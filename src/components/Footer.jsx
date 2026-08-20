import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-primary dark:bg-on-primary-fixed text-on-primary dark:text-primary-fixed full-width">
      <div className="w-full py-12 px-margin-desktop flex flex-col md:flex-row justify-between items-center max-w-container-max mx-auto">
        <div className="mb-8 md:mb-0 text-center md:text-left">
          <div className="font-headline-md text-headline-md text-on-primary mb-2">
            Al-Hikmah Islamic School
          </div>
          <p className="font-body-md text-body-md text-on-primary-container dark:text-primary-fixed-dim">
            © 2024 Al-Hikmah Islamic School. All Rights Reserved.
          </p>
        </div>
        <nav className="flex flex-wrap justify-center gap-6">
          <a className="font-label-md text-label-md text-on-primary-container dark:text-primary-fixed-dim hover:text-secondary-fixed transition-colors opacity-90 hover:opacity-100 transition-opacity" href="#">Privacy Policy</a>
          <a className="font-label-md text-label-md text-on-primary-container dark:text-primary-fixed-dim hover:text-secondary-fixed transition-colors opacity-90 hover:opacity-100 transition-opacity" href="#">Terms of Service</a>
          <a className="font-label-md text-label-md text-on-primary-container dark:text-primary-fixed-dim hover:text-secondary-fixed transition-colors opacity-90 hover:opacity-100 transition-opacity" href="#">Alumni Portal</a>
          <a className="font-label-md text-label-md text-on-primary-container dark:text-primary-fixed-dim hover:text-secondary-fixed transition-colors opacity-90 hover:opacity-100 transition-opacity" href="#">Career</a>
        </nav>
      </div>
    </footer>
  )
}

export default Footer
