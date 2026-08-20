import React from 'react'

const SummaryCard = () => {
  return (
    <div className="md:col-span-4 bg-surface-container-lowest rounded-xl p-6 border border-outline-variant shadow-[0px_10px_15px_-3px_rgba(6,78,59,0.05)] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-secondary-container"></div>
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container">
          <span className="material-symbols-outlined">group</span>
        </div>
        <div>
          <h3 className="font-headline-md text-headline-md text-primary">24</h3>
          <p className="font-label-md text-label-md text-on-surface-variant">Assigned Students</p>
        </div>
      </div>
      <div className="space-y-3">
        <div className="flex justify-between items-center text-sm">
          <span className="text-on-surface-variant">Setoran Today</span>
          <span className="font-bold text-primary">12 / 24</span>
        </div>
        <div className="w-full bg-surface-variant rounded-full h-2">
          <div className="bg-primary h-2 rounded-full" style={{ width: '50%' }}></div>
        </div>
      </div>
    </div>
  )
}

export default SummaryCard
