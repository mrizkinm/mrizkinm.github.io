import React from 'react'
import Socials from './Socials'

const Footer = () => {
  const today = new Date();  // Bulan (0-11, perlu ditambah 1)
  const year = today.getFullYear();

  return (
    <footer className="bg-slate-900 py-12">
      <div className="max-w-[1240px] mx-auto px-5">
        <div className="flex flex-col items-center">
          <Socials />
          <div className="text-muted-foreground mt-4 text-center">
          Copyright &copy; {year} Muhammad Rizki. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer