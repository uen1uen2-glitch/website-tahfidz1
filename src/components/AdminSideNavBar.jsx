import React from 'react'

const AdminSideNavBar = () => {
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
    <nav className="hidden md:flex flex-col h-full py-6 border-r border-outline-variant dark:border-outline fixed left-0 top-0 w-[240px] bg-surface-container-low dark:bg-tertiary-container z-40">
      <div className="px-6 mb-8">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden bg-primary-container flex items-center justify-center shrink-0">
            <img
              alt="User Profile Avatar"
              className="w-full h-full object-cover"
              data-alt="A professional headshot of a school principal in a modern educational setting, soft lighting, serene modernism style with deep emerald and subtle gold tones in the background, conveying authority and calm focus."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAschqFd_YdsjpMD-nh5tfhNwhpY-MxDfsvCb4VVFZdwzeSfVlbUfiKGf-1GVoHA6blZ_-5oq4CkFTy3yjasAxzwGsU_YCqt8WheKMGcH8PJ2eLKd8miYtdqHWimtTD-NrDEMheENJVpAptxhtnBICVeNBwM6kPibVwe1ClaQhVD0l7ap-H4ZqcLnMmBuHRIO4bQI2WN3p9pv259u8Q9oTfPquutKZaf6RkCpd99azmVsP646m5yBty"
            />
          </div>
          <div>
            <h1 className="font-headline-md text-headline-md font-bold text-primary dark:text-primary-fixed leading-tight">Tahfidz Monitor</h1>
            <p className="font-label-md text-label-md text-on-surface-variant text-[12px] opacity-80">Academic Portal</p>
          </div>
        </div>
      </div>
      <div className="px-4 mb-6">
        <button className="w-full py-3 px-4 bg-primary text-on-primary rounded-xl font-label-md text-label-md hover:bg-primary-container transition-colors shadow-sm flex items-center justify-center gap-2">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>add</span>
          New Entry
        </button>
      </div>
      <div className="flex-1 overflow-y-auto w-full">
        <ul className="flex flex-col gap-1 w-full pl-0">
          {menuItems.map((item, idx) => (
            <li key={idx} className="w-full pr-4">
              <a
                className={`flex items-center gap-3 px-4 py-3 font-label-md text-label-md hover:translate-x-1 duration-200 rounded-r-full transition-all ${
                  item.active
                    ? 'bg-primary-container dark:bg-primary text-on-primary-container dark:text-on-primary border-l-4 border-secondary-container'
                    : 'text-on-surface-variant dark:text-on-tertiary-container hover:bg-surface-container-high'
                }`}
                href="#"
              >
                <span
                  className="material-symbols-outlined"
                  style={item.filled ? { fontVariationSettings: "'FILL' 1" } : undefined}
                >
                  {item.icon}
                </span>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-auto px-0 w-full pt-4">
        <ul className="flex flex-col gap-1 w-full pl-0">
          {footerItems.map((item, idx) => (
            <li key={idx} className="w-full pr-4">
              <a
                className="flex items-center gap-3 px-4 py-3 text-on-surface-variant dark:text-on-tertiary-container hover:bg-surface-container-high hover:translate-x-1 duration-200 rounded-r-full font-label-md text-label-md transition-all"
                href="#"
              >
                <span className="material-symbols-outlined">{item.icon}</span>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default AdminSideNavBar
