import React from 'react'

const SideNavBar = () => {
  return (
    <nav className="hidden md:flex flex-col h-full py-6 border-r border-outline-variant bg-surface-container-low fixed left-0 top-0 h-full w-[240px] z-10">
      <div className="px-6 mb-8 flex flex-col gap-2">
        <h1 className="font-headline-md text-headline-md font-bold text-primary">Tahfidz Monitor</h1>
        <p className="font-body-md text-body-md text-on-surface-variant text-sm">Academic Portal</p>
      </div>
      <ul className="flex-1 px-2 space-y-1">
        <li>
          <a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-highest hover:translate-x-1 duration-200 transition-all rounded-r-full font-label-md text-label-md" href="#">
            <span className="material-symbols-outlined">dashboard</span>
            Overview
          </a>
        </li>
        <li>
          <a className="flex items-center gap-3 px-4 py-3 bg-primary-container text-on-primary-container border-l-4 border-secondary-container rounded-r-full font-label-md text-label-md" href="#">
            <span className="material-symbols-outlined filled-icon">menu_book</span>
            Daily Setoran
          </a>
        </li>
        <li>
          <a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-highest hover:translate-x-1 duration-200 transition-all rounded-r-full font-label-md text-label-md" href="#">
            <span className="material-symbols-outlined">auto_stories</span>
            Ziadah
          </a>
        </li>
        <li>
          <a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-highest hover:translate-x-1 duration-200 transition-all rounded-r-full font-label-md text-label-md" href="#">
            <span className="material-symbols-outlined">history</span>
            Muraja&apos;ah
          </a>
        </li>
        <li>
          <a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-highest hover:translate-x-1 duration-200 transition-all rounded-r-full font-label-md text-label-md" href="#">
            <span className="material-symbols-outlined">analytics</span>
            Report Cards
          </a>
        </li>
        <li>
          <a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-highest hover:translate-x-1 duration-200 transition-all rounded-r-full font-label-md text-label-md" href="#">
            <span className="material-symbols-outlined">settings</span>
            Settings
          </a>
        </li>
      </ul>
      <div className="px-6 mb-4">
        <button className="w-full bg-primary text-on-primary font-label-md text-label-md py-2 px-4 rounded-full flex items-center justify-center gap-2 hover:bg-primary-container transition-colors shadow-sm">
          <span className="material-symbols-outlined">add</span>
          New Entry
        </button>
      </div>
      <ul className="px-2 space-y-1 mt-auto border-t border-outline-variant pt-4">
        <li>
          <a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-highest hover:translate-x-1 duration-200 transition-all rounded-r-full font-label-md text-label-md" href="#">
            <span className="material-symbols-outlined">help</span>
            Support
          </a>
        </li>
        <li>
          <a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-highest hover:translate-x-1 duration-200 transition-all rounded-r-full font-label-md text-label-md" href="#">
            <span className="material-symbols-outlined">logout</span>
            Logout
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default SideNavBar
