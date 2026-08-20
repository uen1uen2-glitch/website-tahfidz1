import React from 'react'
import AdminSideNavBar from './components/AdminSideNavBar'
import MobileHeader from './components/MobileHeader'
import MainHighlightCard from './components/MainHighlightCard'
import SecondaryMetricCards from './components/SecondaryMetricCards'

const App = () => {
  return (
    <div className="bg-background text-on-surface font-body-md antialiased min-h-screen flex">
      <AdminSideNavBar />
      <main className="flex-1 md:ml-[240px] w-full min-h-screen pb-20">
        <MobileHeader />
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-8 md:py-12">
          <header className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary mb-2">Super Admin Dashboard</h2>
              <p className="font-body-md text-body-md text-on-surface-variant">High-level institutional performance and system administration.</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="font-label-md text-label-md text-on-surface-variant bg-surface-container-high px-4 py-2 rounded-full border border-outline-variant">Academic Year 2024/2025</span>
            </div>
          </header>
          <section className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-12">
            <MainHighlightCard />
            <SecondaryMetricCards />
          </section>
        </div>
      </main>
    </div>
  )
}

export default App
