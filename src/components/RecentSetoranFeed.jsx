import React from 'react'

const RecentSetoranFeed = () => {
  const feedItems = [
    {
      surah: 'Surah Al-Mulk, Verses 1-15',
      time: 'Today',
      badges: ['Sangat Lancar', 'Ziadah'],
      badgeClasses: ['bg-[#e6f4ea] text-[#137333]', 'bg-surface-variant text-on-surface-variant'],
      note: '"Alhamdulillah bacaan sangat baik dan tartil. Pertahankan muraja\'ah harian."',
      active: true,
    },
    {
      surah: 'Surah Al-Qalam, Full',
      time: 'Yesterday',
      badges: ['Lancar', "Muraja'ah"],
      badgeClasses: ['bg-[#fff8e1] text-[#f57f17]', 'bg-surface-variant text-on-surface-variant'],
      note: '"Perhatikan panjang pendek (mad) pada ayat 10-15."',
      active: false,
    },
    {
      surah: 'Juz 29 Review',
      time: 'Oct 12',
      badges: ['Sangat Lancar', 'Ujian Juz'],
      badgeClasses: ['bg-[#e6f4ea] text-[#137333]', 'bg-surface-variant text-on-surface-variant'],
      note: '"Lulus ujian juz 29 dengan predikat Mumtaz. Masya Allah."',
      active: false,
    },
  ]

  return (
    <div className="md:col-span-4 bg-surface-container-lowest border border-outline-variant rounded-xl p-6 shadow-sm flex flex-col h-[400px]">
      <h3 className="font-headline-md text-headline-md text-on-surface mb-6">Recent Daily Setoran</h3>
      <div className="flex-1 overflow-y-auto pr-2 space-y-6">
        {feedItems.map((item, idx) => (
          <div key={idx} className="relative pl-6 border-l-2 pb-2" style={{ borderColor: item.active ? 'var(--color-primary-container)' : 'var(--color-surface-variant)' }}>
            <div
              className="absolute -left-[9px] top-0 w-4 h-4 rounded-full border-2 border-white"
              style={{ backgroundColor: item.active ? 'var(--color-primary-container)' : 'var(--color-surface-variant)' }}
            ></div>
            <div className="flex justify-between items-start mb-1">
              <span className="font-label-md text-label-md text-on-surface">{item.surah}</span>
              <span className="font-label-md text-xs text-on-surface-variant">{item.time}</span>
            </div>
            <div className="mb-2">
              {item.badges.map((badge, bIdx) => (
                <span key={bIdx} className={`inline-block px-2 py-0.5 rounded-full font-label-md text-[10px] ${item.badgeClasses[bIdx]} mr-1`}>
                  {badge}
                </span>
              ))}
            </div>
            <p className="font-body-md text-sm text-on-surface-variant italic">{item.note}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RecentSetoranFeed
