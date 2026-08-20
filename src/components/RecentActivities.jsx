import React from 'react'

const RecentActivities = () => {
  const activities = [
    { user: 'Ust. Ahmad', action: 'submitted setoran for', target: 'Ahmad Fulan', time: '5 min ago', type: 'setoran' },
    { user: 'Ust. Fatimah', action: 'completed muraja\'ah for', target: 'Juz 30', time: '12 min ago', type: 'murajaah' },
    { user: 'Admin', action: 'added new student', target: 'Muhammad Ali', time: '1 hour ago', type: 'admin' },
    { user: 'Ust. Luqman', action: 'updated grades for', target: 'Class 5B', time: '2 hours ago', type: 'grade' },
    { user: 'System', action: 'generated monthly report', target: 'October 2024', time: '3 hours ago', type: 'report' },
  ]

  const typeColors = {
    setoran: 'bg-primary-container text-on-primary-container',
    murajaah: 'bg-secondary-container text-on-secondary-container',
    admin: 'bg-surface-variant text-on-surface-variant',
    grade: 'bg-surface-container-high text-on-surface',
    report: 'bg-primary-fixed-dim text-on-primary-fixed',
  }

  return (
    <div className="md:col-span-12 bg-surface-container-lowest border border-outline-variant rounded-xl p-6 shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-headline-md text-headline-md text-on-surface">Recent Activities</h3>
        <button className="font-label-md text-label-md text-primary hover:underline">View All</button>
      </div>
      <div className="space-y-4">
        {activities.map((activity, idx) => (
          <div key={idx} className="flex items-center gap-4 p-3 rounded-lg hover:bg-surface/50 transition-colors">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${typeColors[activity.type]}`}>
              <span className="material-symbols-outlined text-sm">
                {activity.type === 'setoran' && 'menu_book'}
                {activity.type === 'murajaah' && 'history'}
                {activity.type === 'admin' && 'person_add'}
                {activity.type === 'grade' && 'analytics'}
                {activity.type === 'report' && 'description'}
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-body-md text-body-md text-on-surface truncate">
                <span className="font-semibold">{activity.user}</span> {activity.action} <span className="font-semibold">{activity.target}</span>
              </p>
              <p className="font-label-md text-xs text-on-surface-variant">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RecentActivities
