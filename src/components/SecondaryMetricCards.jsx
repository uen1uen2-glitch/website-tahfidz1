import React from 'react'

const SecondaryMetricCards = () => {
  return (
    <div className="md:col-span-4 flex flex-col gap-6">
      <div className="bg-surface-container-lowest border border-outline-variant border-t-2 border-t-secondary-container rounded-xl p-6 flex flex-col justify-center" style={{ boxShadow: '0px 10px 15px -3px rgba(6, 78, 59, 0.05)' }}>
        <h3 className="font-label-md text-label-md text-on-surface-variant mb-2">Active Students</h3>
        <div className="flex items-center justify-between">
          <span className="font-headline-md text-headline-md text-on-surface">1,204</span>
          <span className="material-symbols-outlined text-primary-container bg-surface-container-low p-2 rounded-lg">groups</span>
        </div>
      </div>
      <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 flex flex-col justify-center" style={{ boxShadow: '0px 10px 15px -3px rgba(6, 78, 59, 0.05)' }}>
        <h3 className="font-label-md text-label-md text-on-surface-variant mb-2">Active Teachers (Muhaffizh)</h3>
        <div className="flex items-center justify-between">
          <span className="font-headline-md text-headline-md text-on-surface">86</span>
          <span className="material-symbols-outlined text-primary-container bg-surface-container-low p-2 rounded-lg">person_apron</span>
        </div>
      </div>
    </div>
  )
}

export default SecondaryMetricCards
