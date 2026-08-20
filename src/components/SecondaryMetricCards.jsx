import React from 'react'

const StatCard = ({ title, value, icon, trend, trendUp, borderColor }) => {
  return (
    <div
      className={`bg-surface-container-lowest border border-outline-variant ${borderColor ? `border-t-2 ${borderColor}` : ''} rounded-xl p-6 flex flex-col justify-center transition-transform hover:scale-[1.02] duration-200`}
      style={{ boxShadow: '0px 10px 15px -3px rgba(6, 78, 59, 0.05)' }}
    >
      <h3 className="font-label-md text-label-md text-on-surface-variant mb-2">{title}</h3>
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <span className="font-headline-md text-headline-md text-on-surface">{value}</span>
          {trend && (
            <span className={`font-label-md text-xs mt-1 ${trendUp ? 'text-green-700' : 'text-red-700'}`}>
              {trendUp ? '↑' : '↓'} {trend} vs last month
            </span>
          )}
        </div>
        <span className={`material-symbols-outlined bg-surface-container-low p-2 rounded-lg ${borderColor ? 'text-primary-container' : 'text-on-surface-variant'}`}>
          {icon}
        </span>
      </div>
    </div>
  )
}

const SecondaryMetricCards = () => {
  return (
    <div className="md:col-span-4 flex flex-col gap-6">
      <StatCard
        title="Active Students"
        value="1,204"
        icon="groups"
        trend="12%"
        trendUp={true}
        borderColor="border-t-secondary-container"
      />
      <StatCard
        title="Active Teachers (Muhaffizh)"
        value="86"
        icon="person_apron"
        trend="3%"
        trendUp={true}
        borderColor=""
      />
      <StatCard
        title="Avg. Daily Setoran"
        value="342"
        icon="menu_book"
        trend="5%"
        trendUp={false}
        borderColor="border-t-secondary-container"
      />
    </div>
  )
}

export default SecondaryMetricCards
