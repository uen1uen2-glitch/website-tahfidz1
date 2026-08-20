import React from 'react'

const AttendanceOverview = () => {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri']
  const percentages = [95, 88, 92, 85, 78]
  const maxVal = Math.max(...percentages)

  return (
    <div className="md:col-span-12 lg:col-span-6 bg-surface-container-lowest border border-outline-variant rounded-xl p-6 shadow-sm">
      <h3 className="font-headline-md text-headline-md text-on-surface mb-6">Weekly Attendance Overview</h3>
      <div className="flex items-end justify-between gap-4 h-40">
        {days.map((day, idx) => {
          const heightPercent = (percentages[idx] / maxVal) * 100
          return (
            <div key={idx} className="flex-1 flex flex-col items-center gap-2">
              <div className="w-full bg-surface-variant rounded-t-lg relative overflow-hidden" style={{ height: '100%' }}>
                <div
                  className="absolute bottom-0 w-full bg-primary rounded-t-lg transition-all duration-1000 ease-out"
                  style={{ height: `${heightPercent}%` }}
                ></div>
              </div>
              <span className="font-label-md text-xs text-on-surface-variant">{day}</span>
              <span className="font-label-md text-xs text-on-surface font-bold">{percentages[idx]}%</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default AttendanceOverview
