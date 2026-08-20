import React from 'react'

const ParentSideNavBar = () => {
  const menuItems = [
    { icon: 'dashboard', label: 'Overview', active: true, filled: true },
    { icon: 'menu_book', label: 'Daily Setoran', active: false, filled: false },
    { icon: 'auto_stories', label: 'Ziadah', active: false, filled: false },
    { icon: 'history', label: "Muraja'ah", active: false, filled: false },
    { icon: 'analytics', label: 'Report Cards', active: false, filled: false },
    { icon: 'settings', label: 'Settings', active: false, filled: false },
  ]

  const footerItems = [
    { icon: 'help', label: 'Support' },
    { icon: 'logout', label: 'Logout' },
  ]

  return (
    <nav className="hidden md:flex fixed left-0 top-0 h-full w-[240px] bg-surface-container-low dark:bg-tertiary-container flex-col py-6 border-r border-outline-variant dark:border-outline z-50">
      <div className="px-6 mb-8 flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-on-primary">
          <span className="material-symbols-outlined icon-fill">school</span>
        </div>
        <div>
          <h1 className="font-headline-md text-headline-md font-bold text-primary dark:text-primary-fixed">Tahfidz Monitor</h1>
          <p className="font-label-md text-label-md text-on-surface-variant">Academic Portal</p>
        </div>
      </div>
      <button className="mx-6 mb-6 px-4 py-2 bg-primary text-on-primary font-label-md text-label-md rounded-lg flex items-center justify-center gap-2 hover:opacity-90 transition-opacity shadow-sm">
        <span className="material-symbols-outlined">add</span>
        New Entry
      </button>
      <ul className="flex-1 space-y-1 mt-4">
        {menuItems.map((item, idx) => (
          <li key={idx}>
            <a
              className={`flex items-center gap-3 px-4 py-3 font-label-md text-label-md hover:translate-x-1 duration-200 rounded-r-full transition-all ${
                item.active
                  ? 'bg-primary-container dark:bg-primary text-on-primary-container dark:text-on-primary border-l-4 border-secondary-container'
                  : 'text-on-surface-variant dark:text-on-tertiary-container hover:bg-surface-container-highest dark:hover:bg-tertiary'
              }`}
              href="#"
            >
              <span className={`material-symbols-outlined ${item.filled ? 'icon-fill' : ''}`}>{item.icon}</span>
              <span className="font-label-md text-label-md">{item.label}</span>
            </a>
          </li>
        ))}
      </ul>
      <div className="mt-auto px-4 space-y-1 border-t border-outline-variant pt-4 mx-2">
        {footerItems.map((item, idx) => (
          <a
            key={idx}
            className="flex items-center gap-3 px-4 py-3 text-on-surface-variant dark:text-on-tertiary-container hover:bg-surface-container-highest dark:hover:bg-tertiary transition-all hover:translate-x-1 duration-200"
            href="#"
          >
            <span className="material-symbols-outlined">{item.icon}</span>
            <span className="font-label-md text-label-md">{item.label}</span>
          </a>
        ))}
      </div>
    </nav>
  )
}

export default ParentSideNavBar
