import React from 'react'
import SideNavBar from './components/SideNavBar'
import MobileHeader from './components/MobileHeader'
import SummaryCard from './components/SummaryCard'
import QuickActionForm from './components/QuickActionForm'
import RecentEntries from './components/RecentEntries'

const App = () => {
  return (
    <div className="bg-background text-on-surface font-body-md min-h-screen flex">
      <SideNavBar />
      <main className="flex-1 ml-0 md:ml-[240px] p-margin-mobile md:p-gutter max-w-container-max w-full">
        <MobileHeader />
        <div className="mb-8">
          <h2 className="font-headline-lg text-headline-lg text-on-surface hidden md:block mb-2">Input Setoran Hafalan</h2>
          <p className="text-on-surface-variant font-body-md text-body-md">Manage daily memorization assessments for your assigned students.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          <SummaryCard />
          <QuickActionForm />
          <RecentEntries />
        </div>
      </main>
    </div>
  )
}

export default App
