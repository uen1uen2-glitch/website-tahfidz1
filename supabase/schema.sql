-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- ============================================
-- SCHOOLS (Create first due to FK dependency)
-- ============================================
create table if not exists public.schools (
  id uuid default uuid_generate_v4() primary key,
  name text not null,
  address text,
  phone text,
  email text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- ============================================
-- PROFILES (Users with roles)
-- ============================================
create table if not exists public.profiles (
  id uuid references auth.users on delete cascade primary key,
  email text unique not null,
  full_name text not null,
  role text not null check (role in ('admin', 'teacher', 'parent')),
  school_id uuid,
  avatar_url text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Add foreign key constraint after schools table exists
alter table public.profiles
  add constraint profiles_school_id_fkey foreign key (school_id) references public.schools(id) on delete set null;

-- ============================================
-- CLASSES
-- ============================================
create table if not exists public.classes (
  id uuid default uuid_generate_v4() primary key,
  name text not null,
  teacher_id uuid references public.profiles(id) on delete set null,
  school_id uuid references public.schools(id) on delete cascade not null,
  grade_level text not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- ============================================
-- STUDENTS
-- ============================================
create table if not exists public.students (
  id uuid default uuid_generate_v4() primary key,
  full_name text not null,
  nis text unique not null,
  class_id uuid references public.classes(id) on delete restrict not null,
  parent_id uuid references public.profiles(id) on delete set null,
  target_juz integer not null default 5,
  current_juz integer not null default 0,
  current_page integer not null default 0,
  status text not null default 'active' check (status in ('active', 'inactive', 'graduated')),
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- ============================================
-- SURAH (Reference Data - 114 Surahs)
-- ============================================
create table if not exists public.surahs (
  id integer primary key,
  name_arabic text not null,
  name_latin text not null,
  name_translation text not null,
  ayah_count integer not null,
  revelation_place text not null check (revelation_place in ('makkah', 'madaniyah')),
  juz_number integer not null
);

-- ============================================
-- SETORAN (Daily Memorization Records)
-- ============================================
create table if not exists public.setorans (
  id uuid default uuid_generate_v4() primary key,
  student_id uuid references public.students(id) on delete cascade not null,
  teacher_id uuid references public.profiles(id) on delete set null not null,
  surah_name text not null,
  ayat_range text not null,
  quality_rating text not null check (quality_rating in ('sangat_lancar', 'lancar', 'perlu_murajaah')),
  type text not null default 'setoran' check (type in ('setoran', 'ziadah', 'murajaah', 'ujian')),
  notes text,
  setoran_date date not null default timezone('utc'::text, current_date),
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- ============================================
-- ACHIEVEMENTS (Juz completions, milestones)
-- ============================================
create table if not exists public.achievements (
  id uuid default uuid_generate_v4() primary key,
  student_id uuid references public.students(id) on delete cascade not null,
  juz_number integer not null,
  achievement_type text not null check (achievement_type in ('completed', 'passed', 'excellent')),
  achieved_at date not null,
  notes text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- ============================================
-- INDEXES for Performance
-- ============================================
create index if not exists idx_profiles_role on public.profiles(role);
create index if not exists idx_profiles_school_id on public.profiles(school_id);
create index if not exists idx_students_class_id on public.students(class_id);
create index if not exists idx_students_parent_id on public.students(parent_id);
create index if not exists idx_students_status on public.students(status);
create index if not exists idx_setorans_student_id on public.setorans(student_id);
create index if not exists idx_setorans_teacher_id on public.setorans(teacher_id);
create index if not exists idx_setorans_date on public.setorans(setoran_date);
create index if not exists idx_surahs_juz on public.surahs(juz_number);

-- ============================================
-- TRIGGER: Update updated_at timestamp
-- ============================================
create or replace function public.handle_updated_at()
returns trigger as $$
begin
  new.updated_at = timezone('utc'::text, now());
  return new;
end;
$$ language plpgsql security definer;

create trigger setorans_updated_at before update on public.setorans
  for each row execute procedure public.handle_updated_at();

create trigger students_updated_at before update on public.students
  for each row execute procedure public.handle_updated_at();

create trigger profiles_updated_at before update on public.profiles
  for each row execute procedure public.handle_updated_at();

create trigger schools_updated_at before update on public.schools
  for each row execute procedure public.handle_updated_at();

create trigger classes_updated_at before update on public.classes
  for each row execute procedure public.handle_updated_at();

create trigger achievements_updated_at before update on public.achievements
  for each row execute procedure public.handle_updated_at();

-- ============================================
-- ROW LEVEL SECURITY (RLS) Policies
-- ============================================

-- Profiles: Users can view their own profile
create policy "Users can view own profile" on public.profiles
  for select using (auth.uid() = id);

-- Profiles: Users can update their own profile
create policy "Users can update own profile" on public.profiles
  for update using (auth.uid() = id);

-- Profiles: Admins can view all profiles
create policy "Admins can view all profiles" on public.profiles
  for select using (
    exists (
      select 1 from public.profiles
      where id = auth.uid() and role = 'admin'
    )
  );

-- Students: Teachers can view students in their classes
create policy "Teachers can view their students" on public.students
  for select using (
    exists (
      select 1 from public.classes
      where classes.id = students.class_id
      and classes.teacher_id = auth.uid()
    )
  );

-- Students: Admins can view all students
create policy "Admins can view all students" on public.students
  for select using (
    exists (
      select 1 from public.profiles
      where id = auth.uid() and role = 'admin'
    )
  );

-- Students: Parents can view their own children
create policy "Parents can view their children" on public.students
  for select using (parent_id = auth.uid());

-- Setorans: Teachers can create/update setorans for their students
create policy "Teachers can manage setorans" on public.setorans
  for all using (
    exists (
      select 1 from public.classes
      join public.students on students.class_id = classes.id
      where students.id = setorans.student_id
      and classes.teacher_id = auth.uid()
    )
  );

-- Setorans: Parents can view setorans for their children
create policy "Parents can view children setorans" on public.setorans
  for select using (
    exists (
      select 1 from public.students
      where students.id = setorans.student_id
      and students.parent_id = auth.uid()
    )
  );

-- Setorans: Admins can view all setorans
create policy "Admins can view all setorans" on public.setorans
  for select using (
    exists (
      select 1 from public.profiles
      where id = auth.uid() and role = 'admin'
    )
  );

-- Enable RLS on all tables
alter table public.profiles enable row level security;
alter table public.schools enable row level security;
alter table public.classes enable row level security;
alter table public.students enable row level security;
alter table public.setorans enable row level security;
alter table public.surahs enable row level security;
alter table public.achievements enable row level security;

-- ============================================
-- SAMPLE DATA (Optional - for testing)
-- ============================================

-- Insert sample school
insert into public.schools (id, name, address, phone, email)
values
  ('a0000000-0000-0000-0000-000000000001', 'Nurul Qur''an Islamic School', 'Jl. Islam No. 123, Jakarta', '+62123456789', 'info@nurulquran.sch.id')
on conflict (id) do nothing;

-- Insert sample surahs (first 10 for testing)
insert into public.surahs (id, name_arabic, name_latin, name_translation, ayah_count, revelation_place, juz_number)
values
  (1, 'الفاتحة', 'Al-Fatihah', 'The Opening', 7, 'makkah', 1),
  (2, 'البقرة', 'Al-Baqarah', 'The Cow', 286, 'madaniyah', 1),
  (3, 'آل عمران', 'Ali ''Imran', 'Family of Imran', 200, 'madaniyah', 3),
  (18, 'الكهف', 'Al-Kahf', 'The Cave', 110, 'makkah', 15),
  (36, 'يس', 'Ya-Sin', 'Ya Sin', 83, 'makkah', 22),
  (55, 'الرحمن', 'Ar-Rahman', 'The Beneficent', 78, 'madaniyah', 27),
  (56, 'الواقعة', 'Al-Waqi''ah', 'The Inevitable', 96, 'makkah', 27),
  (67, 'الملك', 'Al-Mulk', 'The Sovereignty', 30, 'makkah', 29),
  (112, 'الإخلاص', 'Al-Ikhlas', 'The Sincerity', 4, 'makkah', 30),
  (113, 'الفلق', 'Al-Falaq', 'The Daybreak', 5, 'makkah', 30),
  (114, 'الناس', 'An-Nas', 'Mankind', 6, 'makkah', 30)
on conflict (id) do nothing;

-- Insert sample profiles
insert into public.profiles (id, email, full_name, role, school_id)
values
  ('b0000000-0000-0000-0000-000000000001', 'admin@nurulquran.sch.id', 'Super Admin', 'admin', 'a0000000-0000-0000-0000-000000000001'),
  ('b0000000-0000-0000-0000-000000000002', 'teacher@nurulquran.sch.id', 'Ust. Luqman Hakim', 'teacher', 'a0000000-0000-0000-0000-000000000001'),
  ('b0000000-0000-0000-0000-000000000003', 'parent@nurulquran.sch.id', 'Bapak Budi', 'parent', 'a0000000-0000-0000-0000-000000000001')
on conflict (id) do nothing;

-- Insert sample class
insert into public.classes (id, name, teacher_id, school_id, grade_level)
values
  ('c0000000-0000-0000-0000-000000000001', 'Class 5B - Ali bin Abi Thalib', 'b0000000-0000-0000-0000-000000000002', 'a0000000-0000-0000-0000-000000000001', '5')
on conflict (id) do nothing;

-- Insert sample student
insert into public.students (id, full_name, nis, class_id, parent_id, target_juz, current_juz, current_page, status)
values
  ('d0000000-0000-0000-0000-000000000001', 'Ahmad Zaki', 'NIS001', 'c0000000-0000-0000-0000-000000000001', 'b0000000-0000-0000-0000-000000000003', 5, 3, 15, 'active')
on conflict (id) do nothing;

-- Insert sample setorans
insert into public.setorans (student_id, teacher_id, surah_name, ayat_range, quality_rating, type, notes, setoran_date)
values
  ('d0000000-0000-0000-0000-000000000001', 'b0000000-0000-0000-0000-000000000002', 'Al-Mulk', '1-15', 'sangat_lancar', 'setoran', 'Alhamdulillah bacaan sangat baik dan tartil.', '2024-10-20'),
  ('d0000000-0000-0000-0000-000000000001', 'b0000000-0000-0000-0000-000000000002', 'Al-Qalam', 'Full', 'lancar', 'murajaah', 'Perhatikan panjang pendek (mad) pada ayat 10-15.', '2024-10-19'),
  ('d0000000-0000-0000-0000-000000000001', 'b0000000-0000-0000-0000-000000000002', 'Juz 29', 'Full', 'sangat_lancar', 'ujian', 'Lulus ujian juz 29 dengan predikat Mumtaz.', '2024-10-12')
on conflict do nothing;
