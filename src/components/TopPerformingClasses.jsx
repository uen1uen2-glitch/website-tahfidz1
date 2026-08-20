import React from 'react'

const TopPerformingClasses = () => {
  const classes = [
    { name: 'Class 5A - Ali bin Abi Thalib', progress: 85, juz: '4.2 / 5 Juz' },
    { name: 'Class 5B - Ali bin Abi Thalib', progress: 78, juz: '3.9 / 5 Juz' },
    { name: 'Class 4A - Umar bin Khattab', progress: 72, juz: '3.6 / 5 Juz' },
    { name: 'Class 4B - Umar bin Khattab', progress: 68, juz: '3.4 / 5 Juz' },
  ]

  return (
    <div className="md:col-span-12 lg:col-span-6 bg-surface-container-lowest border border-outline-variant rounded-xl p-6 shadow-sm">
      <h3 className="font-headline-md text-headline-md text-on-surface mb-6">Top Performing Classes</h3>
      <div className="space-y-4">
        {classes.map((cls, idx) => (
          <div key={idx} className="flex items-center gap-4">
            <div className="w-8 h-8 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center font-bold text-sm shrink-0">
              {idx + 1}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-center mb-1">
                <span className="font-label-md text-label-md text-on-surface truncate">{cls.name}</span>
                <span className="font-label-md text-xs text-on-surface-variant ml-2">{cls.juz}</span>
              </div>
              <div className="w-full bg-surface-variant rounded-full h-2 overflow-hidden">
                <div className="bg-primary h-2 rounded-full transition-all duration-1000 ease-out" style={{ width: `${cls.progress}%` }}></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TopPerformingClasses
