import React from 'react'

const TotalProgress = () => {
  return (
    <div className="md:col-span-8 bg-surface-container-lowest border border-outline-variant rounded-xl p-6 shadow-sm flex flex-col justify-center">
      <h3 className="font-label-md text-label-md text-on-surface-variant mb-2 uppercase tracking-wider">Total Hafalan Progress</h3>
      <div className="flex items-end gap-2 mb-4">
        <span className="font-headline-xl text-headline-xl text-primary">3 Juz</span>
        <span className="font-body-lg text-body-lg text-on-surface-variant mb-1">, 15 Pages</span>
      </div>
      <div className="w-full bg-surface-variant rounded-full h-3 mb-2 overflow-hidden">
        <div className="bg-primary h-3 rounded-full transition-all duration-1000 ease-out" style={{ width: '65%' }}></div>
      </div>
      <div className="flex justify-between font-label-md text-xs text-on-surface-variant mt-1">
        <span>Juz 30, 29, 28 Completed</span>
        <span>Target: 5 Juz by Year End</span>
      </div>
    </div>
  )
}

export default TotalProgress
