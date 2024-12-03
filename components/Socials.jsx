import React from 'react'
import { RiLinkedinBoxFill, RiMailLine, RiInstagramLine, RiGithubFill } from 'react-icons/ri'

const icons = [
  {
    path: 'https://www.linkedin.com/in/muhammad-rizki-0998/',
    icon: <RiLinkedinBoxFill />,
    title: 'LinkedIn'
  },
  {
    path: 'https://github.com/mrizkinm/',
    icon: <RiGithubFill />,
    title: 'GitHub'
  },
  {
    path: 'mailto:muhammadrizkinur37@gmail.com',
    icon: <RiMailLine />,
    title: 'Email'
  },
  {
    path: 'https://instagram.com/mrizkinm/',
    icon: <RiInstagramLine />,
    title: 'Instagram'
  },
];

const Socials = () => {
  return (
    <div className="flex gap-x-4 mx-auto">
      {icons.map((item, index) => (
        <a href={item.path} key={index} target="_blank" className="rounded-full cursor-pointer p-3 hover:scale-105 ease-in duration-300 border border-gray-300 dark:border-accent bg-gray-50 dark:bg-accent hover:bg-gray-100 dark:hover:bg-accent" title={item.title}>
          {item.icon}
        </a>
      ))}
    </div>
  )
}

export default Socials