import React from 'react'

const TopNavBar = () => {
  return (
    <header className="bg-surface dark:bg-inverse-surface border-b border-outline-variant dark:border-outline flat no shadows docked full-width top-0 sticky z-50 transition-all duration-300">
      <div className="flex justify-between items-center w-full px-margin-desktop max-w-container-max mx-auto h-20">
        <div className="font-headline-md text-headline-md font-bold text-primary dark:text-primary-fixed">
          Al-Hikmah Academic
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <a className="text-primary dark:text-primary-fixed border-b-2 border-primary font-bold pb-1 font-label-md text-label-md hover:text-primary dark:hover:text-primary-fixed transition-colors scale-95 active:opacity-80" href="#">Profile</a>
          <a className="text-on-surface-variant dark:text-surface-variant font-label-md text-label-md hover:text-primary dark:hover:text-primary-fixed transition-colors scale-95 active:opacity-80" href="#">News</a>
          <a className="text-on-surface-variant dark:text-surface-variant font-label-md text-label-md hover:text-primary dark:hover:text-primary-fixed transition-colors scale-95 active:opacity-80" href="#">Academic</a>
          <a className="text-on-surface-variant dark:text-surface-variant font-label-md text-label-md hover:text-primary dark:hover:text-primary-fixed transition-colors scale-95 active:opacity-80" href="#">Gallery</a>
          <a className="text-on-surface-variant dark:text-surface-variant font-label-md text-label-md hover:text-primary dark:hover:text-primary-fixed transition-colors scale-95 active:opacity-80" href="#">Contact</a>
          <a className="text-on-surface-variant dark:text-surface-variant font-label-md text-label-md hover:text-primary dark:hover:text-primary-fixed transition-colors scale-95 active:opacity-80" href="#">Admissions</a>
        </nav>
        <div className="flex items-center gap-4">
          <button className="hidden md:flex bg-primary-container text-on-primary-container font-label-md text-label-md px-4 py-2 rounded-full hover:bg-primary hover:text-on-primary transition-colors">
            Dashboard Login
          </button>
          <button className="md:hidden text-primary">
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default TopNavBar
