import Link from 'next/link'
import React from 'react'

const links = [
  {
    path: '/',
    name: 'home'
  },
  {
    path: '/#about',
    name: 'about me'
  },
  {
    path: '/#skills',
    name: 'skills'
  },
  {
    path: '/#projects',
    name: 'projects'
  }
]

const Nav = ({styles, onLinkClick}) => {
  return (
    <nav className={`${styles}`}>
      {links.map((item, index) => (
        <Link href={item.path} key={index} className={`capitalize hover:text-primary transition-all hover:border-b-2 hover:border-blue-500`} onClick={onLinkClick}>
          {item.name}
        </Link>
      ))}
    </nav>
  )
}

export default Nav