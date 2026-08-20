import React from 'react'

const RecentEntries = () => {
  const entries = [
    { initials: 'AF', name: 'Ahmad Fulan', surah: 'Al-Mulk: 1-10', status: 'Sangat Lancar', time: '10:45 AM', color: 'bg-secondary-container text-on-secondary-container' },
    { initials: 'FZ', name: 'Fatima Zahra', surah: 'An-Naba: 1-40', status: 'Lancar', time: '09:15 AM', color: 'bg-primary-container text-on-primary-container' },
    { initials: 'UK', name: 'Umar bin Khattab', surah: 'Al-Baqarah: 255', status: 'Perlu Muraja\'ah', time: '08:30 AM', color: 'bg-surface-dim text-on-surface' },
  ]

  const statusClass = {
    'Sangat Lancar': 'badge-sangat-lancar',
    'Lancar': 'badge-lancar',
    'Perlu Muraja\'ah': 'badge-perlu-murajaah',
  }

  return (
    <div className="md:col-span-12 mt-4">
      <div className="flex justify-between items-end mb-4">
        <h3 className="font-headline-md text-headline-md text-on-surface">Recent Entries</h3>
        <a className="text-primary font-label-md text-label-md hover:underline flex items-center gap-1" href="#">
          View All <span className="material-symbols-outlined text-sm">arrow_forward</span>
        </a>
      </div>
      <div className="bg-surface-container-lowest rounded-xl border border-outline-variant overflow-hidden shadow-[0px_10px_15px_-3px_rgba(6,78,59,0.05)]">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-surface-container-low text-on-surface-variant font-label-md text-label-md border-b border-outline-variant">
                <th className="p-4">Student</th>
                <th className="p-4">Surah/Ayat</th>
                <th className="p-4">Status</th>
                <th className="p-4 hidden sm:table-cell">Time</th>
              </tr>
            </thead>
            <tbody className="font-body-md text-body-md divide-y divide-outline-variant">
              {entries.map((entry, idx) => (
                <tr key={idx} className="hover:bg-surface/50 transition-colors">
                  <td className="p-4 flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-full ${entry.color} flex items-center justify-center font-bold text-sm`}>
                      {entry.initials}
                    </div>
                    <span className="text-on-surface font-medium">{entry.name}</span>
                  </td>
                  <td className="p-4 text-on-surface-variant font-quran-text text-lg">{entry.surah}</td>
                  <td className="p-4">
                    <span className={`inline-block px-3 py-1 rounded-full ${statusClass[entry.status]} font-label-md text-xs`}>
                      {entry.status}
                    </span>
                  </td>
                  <td className="p-4 text-on-surface-variant hidden sm:table-cell text-sm">{entry.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default RecentEntries
