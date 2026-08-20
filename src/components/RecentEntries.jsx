import React, { useState, useEffect } from 'react'
import { getRecentEntries } from '../services/dashboard'

const RecentEntries = () => {
  const [entries, setEntries] = React.useState([])
  const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {
    loadEntries()
  }, [])

  const loadEntries = async () => {
    setLoading(true)
    const data = await getRecentEntries('current-user-id', 'teacher')
    setEntries(data)
    setLoading(false)
  }

  const getInitials = (name) => {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2)
  }

  const getAvatarColor = (name) => {
    const colors = ['bg-secondary-container text-on-secondary-container', 'bg-primary-container text-on-primary-container', 'bg-surface-dim text-on-surface']
    const index = name.charCodeAt(0) % colors.length
    return colors[index]
  }

  if (loading) {
    return (
      <div className="md:col-span-12 mt-4">
        <div className="bg-surface-container-lowest rounded-xl border border-outline-variant overflow-hidden shadow-[0px_10px_15px_-3px_rgba(6,78,59,0.05)]">
          <div className="p-8 text-center">
            <p className="text-on-surface-variant font-body-md">Loading entries...</p>
          </div>
        </div>
      </div>
    )
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
        {entries.length === 0 ? (
          <div className="p-8 text-center">
            <p className="text-on-surface-variant font-body-md">No entries yet. Create your first setoran above!</p>
          </div>
        ) : (
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
                {entries.map((entry) => (
                  <tr key={entry.id} className="hover:bg-surface/50 transition-colors">
                    <td className="p-4 flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${getAvatarColor(entry.student_name)}`}>
                        {getInitials(entry.student_name)}
                      </div>
                      <span className="text-on-surface font-medium">{entry.student_name}</span>
                    </td>
                    <td className="p-4 text-on-surface-variant font-quran-text text-lg">{entry.surah_name}: {entry.ayat_range}</td>
                    <td className="p-4">
                      <span
                        className={`inline-block px-3 py-1 rounded-full font-label-md text-xs ${
                          entry.quality_rating === 'sangat_lancar'
                            ? 'badge-sangat-lancar'
                            : entry.quality_rating === 'lancar'
                            ? 'badge-lancar'
                            : 'badge-perlu-murajaah'
                        }`}
                      >
                        {entry.quality_rating.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                      </span>
                    </td>
                    <td className="p-4 text-on-surface-variant hidden sm:table-cell text-sm">{entry.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}

export default RecentEntries
