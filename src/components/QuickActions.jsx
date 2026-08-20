import React from 'react'

const QuickActions = () => {
  const actions = [
    { icon: 'person_add', label: 'Add Student', color: 'bg-primary-container text-on-primary-container' },
    { icon: 'person_add_alt', label: 'Add Teacher', color: 'bg-secondary-container text-on-secondary-container' },
    { icon: 'download', label: 'Export Report', color: 'bg-surface-container-high text-on-surface' },
    { icon: 'settings', label: 'System Config', color: 'bg-surface-container-high text-on-surface' },
  ]

  return (
    <div className="md:col-span-12 bg-surface-container-lowest border border-outline-variant rounded-xl p-6 shadow-sm">
      <h3 className="font-headline-md text-headline-md text-on-surface mb-4">Quick Actions</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {actions.map((action, idx) => (
          <button
            key={idx}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl font-label-md text-label-md transition-all hover:scale-105 duration-200 ${action.color}`}
          >
            <span className="material-symbols-outlined">{action.icon}</span>
            {action.label}
          </button>
        ))}
      </div>
    </div>
  )
}

export default QuickActions
