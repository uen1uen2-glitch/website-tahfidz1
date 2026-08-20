import React from 'react'

const SideNavBar = () => {
  const menuItems = [
    { icon: 'dashboard', label: 'Overview', active: false, filled: false },
    { icon: 'menu_book', label: 'Daily Setoran', active: true, filled: true },
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
    <nav className="hidden md:flex flex-col h-full py-6 border-r border-outline-variant bg-surface-container-low fixed left-0 top-0 h-full w-[240px] z-10">
      <div className="px-6 mb-8 flex flex-col gap-2">
        <h1 className="font-headline-md text-headline-md font-bold text-primary">Tahfidz Monitor</h1>
        <p className="font-body-md text-body-md text-on-surface-variant text-sm">Academic Portal</p>
      </div>
      <ul className="flex-1 px-2 space-y-1">
        {menuItems.map((item, idx) => (
          <li key={idx}>
            <a
              className={`flex items-center gap-3 px-4 py-3 font-label-md text-label-md hover:translate-x-1 duration-200 transition-all rounded-r-full ${
                item.active
                  ? 'bg-primary-container text-on-primary-container border-l-4 border-secondary-container'
                  : 'text-on-surface-variant hover:bg-surface-container-highest'
              }`}
              href="#"
            >
              <span className={`material-symbols-outlined ${item.filled ? 'filled-icon' : ''}`}>{item.icon}</span>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
      <div className="px-6 mb-4">
        <button className="w-full bg-primary text-on-primary font-label-md text-label-md py-2 px-4 rounded-full flex items-center justify-center gap-2 hover:bg-primary-container transition-colors shadow-sm">
          <span className="material-symbols-outlined">add</span>
          New Entry
        </button>
      </div>
      <ul className="px-2 space-y-1 mt-auto border-t border-outline-variant pt-4">
        {footerItems.map((item, idx) => (
          <li key={idx}>
            <a
              className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-highest hover:translate-x-1 duration-200 transition-all rounded-r-full font-label-md text-label-md"
              href="#"
            >
              <span className="material-symbols-outlined">{item.icon}</span>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default SideNavBar
