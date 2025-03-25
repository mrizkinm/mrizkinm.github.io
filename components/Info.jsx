import React from 'react'
import Socials from './Socials'
import Link from 'next/link'
import { RiArrowDownLine } from 'react-icons/ri'
import Image from 'next/image'

const Info = () => {
  return (
    <section className="h-screen flex justify-center items-center bg-blue-50 dark:bg-transparent">
      <div className="max-w-[1240px] px-5 mx-auto w-full">
        <div className="flex justify-between">
          <div className="flex max-w-[700px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
            <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-widest">
              Let&apos;s Work Together
            </div>
            <h1 className="h1 mb-4">Hello, I am Muhammad Rizki! 👋</h1>
            <p className="subtitle max-w-[500px] mx-auto xl:mx-0">I am a Full Stack Developer specializing in building both frontend and backend web applications, as well as Android mobile applications</p>
            <div className="mx-auto xl:mx-0">
              <Socials />
            </div>
          </div>
          <div className="hidden xl:flex">
            <div className="flex items-center">
              <Image src="/img/logo.png" width="400" height="400" alt="Image" />
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center mt-10">
          <Link href="https://mrizkinm.hackerresume.io/ff1b52f3-bad5-40f2-9e44-03b9fb5a585f" target="_blank" className="rounded-full cursor-pointer p-3 border border-gray-300 dark:border-accent bg-gray-50 dark:bg-accent hover:bg-gray-100 dark:hover:bg-accent">
            View My Resume
          </Link>
        </div>
        <div className="flex justify-center items-center mt-10">
          <Link href="/#about" className="rounded-full cursor-pointer p-1 border border-gray-300 dark:border-accent bg-gray-50 dark:bg-accent hover:bg-gray-100 dark:hover:bg-accent animate-bounce">
            <RiArrowDownLine className="text-3xl text-primary" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Info