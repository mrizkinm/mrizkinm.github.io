import React, { useState } from 'react'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'
import { MenuIcon } from 'lucide-react'
import Nav from './Nav'
import Socials from './Socials'
import Logo from './Logo'

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <MenuIcon className="cursor-pointer" size={25} />
      </SheetTrigger>
      <SheetContent side="left">
        <div className="flex flex-col items-center justify-between h-full py-8 gap-y-32">
          <Logo />
          <Nav styles="flex flex-col items-center gap-y-6 text-2xl" onLinkClick={() => setIsOpen(false)} />
          <Socials />
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav