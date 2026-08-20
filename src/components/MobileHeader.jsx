import React from 'react'

const MobileHeader = () => {
  return (
    <div className="md:hidden flex justify-between items-center w-full px-margin-mobile h-20 bg-surface border-b border-outline-variant sticky top-0 z-30">
      <h1 className="font-headline-md text-headline-md font-bold text-primary">Tahfidz Monitor</h1>
      <button className="text-on-surface-variant p-2">
        <span className="material-symbols-outlined">menu</span>
      </button>
    </div>
  )
}

export default MobileHeader
