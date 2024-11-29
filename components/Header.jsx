"use client"

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Nav from './Nav'
import ThemeButton from './ThemeButton'
import MobileNav from './MobileNav'
import Logo from './Logo'

const Header = () => {
  const [header, setHeader] = useState(false)

  useEffect(() => {
    const scrollYPos = window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false)
    })

    return () => window.removeEventListener('scroll', scrollYPos)
  })

  return (
    <header className={`${header
      ? 'py-3 bg-white shadow-lg dark:bg-slate-800'
      : 'py-3 bg-blue-50 dark:bg-transparent'}
      sticky top-0 z-30 transition-all`}>
      <div className="max-w-[1240px] px-5 mx-auto w-full">
        <div className="flex justify-between items-center">
          <Logo />
          <div className="flex items-center gap-x-6">
            <Nav styles="hidden md:flex gap-x-8 items-center" />
            <ThemeButton />
            <div className="md:hidden">
              <MobileNav />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header