import React from 'react'

const MobileHeader = () => {
  return (
    <header className="md:hidden flex justify-between items-center mb-6 border-b border-outline-variant pb-4">
      <h1 className="font-headline-lg-mobile text-headline-lg-mobile font-bold text-primary">Daily Setoran</h1>
      <button className="text-on-surface-variant">
        <span className="material-symbols-outlined">menu</span>
      </button>
    </header>
  )
}

export default MobileHeader
