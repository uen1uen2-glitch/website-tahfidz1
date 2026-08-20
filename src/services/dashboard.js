import { supabase } from '../lib/supabase'

export const getDashboardStats = async (userId, role) => {
  try {
    if (role === 'teacher') {
      const { data: teacherProfile } = await supabase
        .from('profiles')
        .select('id')
        .eq('id', userId)
        .single()

      if (!teacherProfile) throw new Error('Profile not found')

      const { count: totalStudents } = await supabase
        .from('students')
        .select('*', { count: 'exact', head: true })
        .eq('class_id', teacherProfile.id)

      const { count: totalSetoransToday } = await supabase
        .from('setorans')
        .select('*', { count: 'exact', head: true })
        .eq('teacher_id', userId)
        .eq('setoran_date', new Date().toISOString().split('T')[0])

      const { data: setorans } = await supabase
        .from('setorans')
        .select('student_id')
        .eq('teacher_id', userId)

      const uniqueStudentIds = [...new Set(setorans?.map(s => s.student_id) || [])]
      const { data: students } = await supabase
        .from('students')
        .select('current_juz')
        .in('id', uniqueStudentIds)

      const totalJuz = students?.reduce((sum, s) => sum + (s.current_juz || 0), 0) || 0

      return {
        totalStudents: totalStudents || 0,
        totalTeachers: 0,
        totalSetoransToday: totalSetoransToday || 0,
        totalJuzMemorized: totalJuz,
        targetAchievement: totalStudents && totalStudents > 0 ? Math.round((totalSetoransToday || 0) / totalStudents * 100) : 0,
      }
    } else if (role === 'admin') {
      const { count: totalStudents } = await supabase
        .from('students')
        .select('*', { count: 'exact', head: true })

      const { count: totalTeachers } = await supabase
        .from('profiles')
        .select('*', { count: 'exact', head: true })
        .eq('role', 'teacher')

      const { count: totalSetoransToday } = await supabase
        .from('setorans')
        .select('*', { count: 'exact', head: true })
        .eq('setoran_date', new Date().toISOString().split('T')[0])

      const { data: allStudents } = await supabase
        .from('students')
        .select('current_juz')

      const totalJuz = allStudents?.reduce((sum, s) => sum + (s.current_juz || 0), 0) || 0

      return {
        totalStudents: totalStudents || 0,
        totalTeachers: totalTeachers || 0,
        totalSetoransToday: totalSetoransToday || 0,
        totalJuzMemorized: totalJuz,
        targetAchievement: 78,
      }
    } else {
      return {
        totalStudents: 0,
        totalTeachers: 0,
        totalSetoransToday: 0,
        totalJuzMemorized: 0,
        targetAchievement: 0,
      }
    }
  } catch (error) {
    console.error('Error fetching dashboard stats:', error)
    throw error
  }
}

export const getRecentEntries = async (userId, role, limit = 10) => {
  try {
    let query = supabase
      .from('setorans')
      .select(`
        id,
        surah_name,
        ayat_range,
        quality_rating,
        type,
        setoran_date,
        created_at,
        student:students(full_name)
      `)
      .order('setoran_date', { ascending: false })
      .limit(limit)

    if (role === 'teacher') {
      query = query.eq('teacher_id', userId)
    } else if (role === 'parent') {
      const { data: parentProfile } = await supabase
        .from('profiles')
        .select('id')
        .eq('id', userId)
        .single()

      if (!parentProfile) return []

      const { data: children } = await supabase
        .from('students')
        .select('id')
        .eq('parent_id', userId)

      if (!children || children.length === 0) return []

      query = query.in('student_id', children.map(c => c.id))
    }

    const { data, error } = await query

    if (error) throw error

    return (data || []).map((entry) => ({
      id: entry.id,
      student_name: entry.student?.full_name || 'Unknown',
      surah_name: entry.surah_name,
      ayat_range: entry.ayat_range,
      quality_rating: entry.quality_rating,
      type: entry.type,
      setoran_date: entry.setoran_date,
      time: new Date(entry.created_at).toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }),
    }))
  } catch (error) {
    console.error('Error fetching recent entries:', error)
    return []
  }
}

export const getStudents = async (classId) => {
  try {
    let query = supabase
      .from('students')
      .select('*')
      .eq('status', 'active')
      .order('full_name')

    if (classId) {
      query = query.eq('class_id', classId)
    }

    const { data, error } = await query

    if (error) throw error
    return data || []
  } catch (error) {
    console.error('Error fetching students:', error)
    return []
  }
}

export const createSetoran = async (setoranData) => {
  try {
    const { data, error } = await supabase
      .from('setorans')
      .insert([setoranData])
      .select()
      .single()

    if (error) throw error
    return data
  } catch (error) {
    console.error('Error creating setoran:', error)
    return null
  }
}

export const getStudentProgress = async (studentId) => {
  try {
    const { data, error } = await supabase
      .from('students')
      .select('current_juz, target_juz')
      .eq('id', studentId)
      .single()

    if (error) throw error

    if (!data) return null

    const progress = Math.round((data.current_juz / data.target_juz) * 100)

    return {
      currentJuz: data.current_juz,
      targetJuz: data.target_juz,
      progress: Math.min(progress, 100),
    }
  } catch (error) {
    console.error('Error fetching student progress:', error)
    return null
  }
}
