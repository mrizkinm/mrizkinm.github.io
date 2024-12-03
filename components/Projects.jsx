"use client"

import React, { useEffect, useState } from 'react'
import { Tabs, TabsList, TabsContent, TabsTrigger } from '@/components/ui/tabs'
import ProjectCard from './ProjectCard'

const project = [
  {
    image: ['/img/projects/citycargo.jpg', '/img/projects/admincc.jpg'],
    category: ['Codeigniter 4', 'Bootstrap 5'],
    name: 'City Cargo Landing Page',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
    link: 'https://citycargo.id',
    github: ''
  },
  {
    image: ['/img/projects/ccbot1.jpg', '/img/projects/ccbot2.jpg'],
    category: ['Codeigniter 4', 'Bootstrap 5'],
    name: 'City Cargo Telegram Bot App',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
    link: 'https://t.me/CityCargo_bot',
    github: ''
  },
  {
    image: ['/img/projects/admincc.jpg'],
    category: ['Codeigniter 4', 'Bootstrap 5'],
    name: 'City Cargo Admin Page',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
    link: '',
    github: ''
  },
  {
    image: ['/img/projects/abisha.jpg'],
    category: ['Codeigniter 4'],
    name: 'Abisha',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
    link: 'https://abisha.id',
    github: ''
  },
  {
    image: ['/img/projects/mmsi.jpg'],
    category: ['Codeigniter 4'],
    name: 'MMSI Landing Page',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
    link: 'https://mms.id',
    github: ''
  },
  {
    image: ['/img/projects/adminmmsi.jpg'],
    category: ['Laravel 11'],
    name: 'MMSI Admin Page',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
    link: '',
    github: ''
  },
  {
    image: ['/img/projects/pantaucorona.jpg'],
    category: ['Flutter'],
    name: 'Pantau Corona',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
    link: '',
    github: 'https://github.com/mrizkinm/pantaucorona'
  },
  {
    image: ['/img/projects/laporcepat1.jpg', '/img/projects/laporcepat2.jpg', '/img/projects/laporcepat3.jpg'],
    category: ['Flutter', 'Firebase'],
    name: 'Lapor Cepat',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod',
    link: '',
    github: 'https://github.com/mrizkinm/laporcepat'
  },
  {
    image: ['/img/projects/adminmmsi.jpg'],
    category: ['Django', 'MySQL'],
    name: 'Food price prediction application uses ARIMA method',
    description: 'Food price prediction application for basic needs uses the ARIMA (Autoregressive Integrated Moving Average) method with the django python framework',
    link: '',
    github: 'https://github.com/mrizkinm/prediksi'
  },
  {
    image: ['/img/projects/adminmmsi.jpg'],
    category: ['Codeigniter 3', 'MySQL'],
    name: 'SPK SAW method for selecting cashier employees',
    description: 'SPK SAW method for selecting cashier employees',
    link: '',
    github: 'https://github.com/mrizkinm/spksawkasir'
  }
];

const uniqueCat = ['all projects', ...new Set(project.flatMap(p => p.category))];

const Projects = () => {
  const [categoryList, setCategoryList] = useState(uniqueCat)
  const [category, setCategory] = useState('all projects')
  const filteredProjects = project.filter((item) => {
    return category.toLowerCase() === 'all projects'
      ? true
      : item.category.includes(category);
  });

  useEffect(() => {
    console.log(category);
    console.log(filteredProjects);
  })

  return (
    <section id="projects" className="pb-20 xl:py-24">
      <div className="max-w-[1240px] px-5 mx-auto">
        <h2 className="text-4xl font-bold mb-8 xl:mb-16 text-center mx-auto">Projects</h2>
        <Tabs defaultValue={category} className="mb-24 xl:mb-48">
          <TabsList className="w-full grid h-full md:grid-cols-4 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none">
            {categoryList.map((item, index) => (
              <TabsTrigger onClick={() => setCategory(item)} value={item} key={index} className="capitalize w-[162px] md:w-auto">{item}</TabsTrigger>
            ))}
          </TabsList>
          <div className="text-lg xl:mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredProjects.map((item, index) => (
              <TabsContent value={category} key={index}>
                <ProjectCard project={item} />
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </section>
  )
}

export default Projects