import React from 'react'

const MainHighlightCard = () => {
  return (
    <div className="md:col-span-8 bg-surface-container-lowest border border-outline-variant rounded-xl p-8 relative overflow-hidden flex flex-col justify-between" style={{ boxShadow: '0px 10px 15px -3px rgba(6, 78, 59, 0.05)' }}>
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary-fixed opacity-10 rounded-full -translate-y-1/2 translate-x-1/4 blur-3xl pointer-events-none"></div>
      <div>
        <h3 className="font-label-md text-label-md text-on-surface-variant mb-1 uppercase tracking-wider">Total Institutional Hafalan</h3>
        <div className="flex items-baseline gap-3 mb-6">
          <span className="font-headline-xl text-headline-xl text-primary font-bold">14,250</span>
          <span className="font-body-md text-body-md text-on-surface-variant">Juz Memorized</span>
        </div>
      </div>
      <div className="space-y-4">
        <div>
          <div className="flex justify-between mb-1 font-label-md text-label-md">
            <span className="text-on-surface-variant">Target Achievement (Yearly)</span>
            <span className="text-primary font-bold">78%</span>
          </div>
          <div className="h-2 w-full bg-surface-container-high rounded-full overflow-hidden">
            <div className="h-full bg-primary rounded-full transition-all duration-1000 ease-out" style={{ width: '78%' }}></div>
          </div>
        </div>
        <div className="flex flex-wrap gap-6 mt-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-secondary-container"></div>
            <span className="font-label-md text-label-md text-on-surface-variant">Excellent (45%)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-primary-fixed-dim"></div>
            <span className="font-label-md text-label-md text-on-surface-variant">On Track (33%)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-surface-dim"></div>
            <span className="font-label-md text-label-md text-on-surface-variant">Needs Improvement (22%)</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainHighlightCard
