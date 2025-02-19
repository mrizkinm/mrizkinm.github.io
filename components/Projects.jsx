"use client"

import React, { useState } from 'react'
import { Tabs, TabsList, TabsContent, TabsTrigger } from '@/components/ui/tabs'
import ProjectCard from './ProjectCard'

const project = [
  {
    image: ['/img/projects/citycargo1.jpg', '/img/projects/citycargo2.jpg'],
    category: ['Codeigniter', 'Bootstrap'],
    name: 'City Cargo Landing Page',
    description: 'Landing page and registration page for City Cargo website',
    link: 'https://citycargo.id',
    github: ''
  },
  {
    image: ['/img/projects/ccbot1.jpg', '/img/projects/ccbot2.jpg'],
    category: ['Codeigniter', 'Bootstrap'],
    name: 'City Cargo Telegram Bot App',
    description: 'Telegram Bot Application for City Cargo, integrating APIs from several shipping companies such as JNT Cargo, JNT Express and Ninja Xpress into the city cargo application.',
    link: 'https://t.me/CityCargo_bot',
    github: ''
  },
  {
    image: ['/img/projects/admincc.jpg'],
    category: ['Codeigniter', 'Bootstrap'],
    name: 'City Cargo Admin Page',
    description: 'Build admin page for City Cargo application',
    link: '',
    github: ''
  },
  {
    image: ['/img/projects/abisha1.jpg', '/img/projects/abisha2.jpg'],
    category: ['Codeigniter'],
    name: 'Abisha Business Opportunity',
    description: 'Landing page and registration page for Abisha Business Opportunity website',
    link: 'https://abisha.id',
    github: ''
  },
  {
    image: ['/img/projects/mmsi.jpg'],
    category: ['Laravel'],
    name: 'Koperasi Maju Makmur Sejahtera Indonesia',
    description: 'Company profile for Koperasi Maju Makmur Sejahtera Indonesia website',
    link: 'https://mms.id',
    github: ''
  },
  {
    image: ['/img/projects/adminmmsi.jpg'],
    category: ['Laravel', 'Bootstrap'],
    name: 'Koperasi Maju Makmur Sejahtera Indonesia Admin Page',
    description: 'Admin page for Koperasi Maju Makmur Sejahtera Indonesia',
    link: '',
    github: ''
  },
  {
    image: ['/img/projects/react-port1.jpg', '/img/projects/react-port2.jpg', '/img/projects/react-port3.jpg'],
    category: ['React', 'Tailwind'],
    name: 'Portfolio React + Tailwind',
    description: 'Portfolio website with react, tailwind and vite',
    link: '',
    github: 'https://github.com/mrizkinm/react-tailwind-portfolio'
  },
  {
    image: ['/img/projects/shop1.jpg', '/img/projects/shop2.jpg', '/img/projects/shop3.jpg', '/img/projects/shop4.jpg', '/img/projects/shop5.jpg', '/img/projects/shop6.jpg', '/img/projects/shop7.jpg', '/img/projects/shop8.jpg'],
    category: ['Next.js', 'React', 'Tailwind', 'MySQL'],
    name: 'Online Shop Admin Page',
    description: 'Online shop admin page with next.js, react and tailwind',
    link: '',
    github: 'https://github.com/mrizkinm/next-admin-shop'
  },
  {
    image: ['/img/projects/shop-base1.jpg', '/img/projects/shop-base2.jpg', '/img/projects/shop-base3.jpg', '/img/projects/shop-base4.jpg', '/img/projects/shop-base5.jpg', '/img/projects/shop-base6.jpg', '/img/projects/shop-base7.jpg', '/img/projects/shop-base8.jpg'],
    category: ['Next.js', 'React', 'Tailwind', 'MySQL', 'Midtrans'],
    name: 'Gundam Base Online Shop Website',
    description: 'Online shop website with Midtrans payment method',
    link: '',
    github: 'https://github.com/mrizkinm/next-online-shop'
  },
  {
    image: ['/img/projects/admin-docs1.jpg', '/img/projects/admin-docs2.jpg', '/img/projects/admin-docs3.jpg'],
    category: ['Express.js', 'Prisma', 'PostgreSQL'],
    name: 'Gundam Base REST API Admin Page with Express.js',
    description: 'REST API for admin page online shop with express.js, prisma and postgresql',
    link: '',
    github: 'https://github.com/mrizkinm/express-admin-shop'
  },
  {
    image: ['/img/projects/shop-docs1.jpg', '/img/projects/shop-docs2.jpg', '/img/projects/shop-docs3.jpg'],
    category: ['Express.js', 'Midtrans', 'Prisma', 'PostgreSQL'],
    name: 'Gundam Base REST API Online Shop with Express.js',
    description: 'REST API for online shop with express.js, midtrans, prisma and postgresql',
    link: '',
    github: 'https://github.com/mrizkinm/express-online-shop'
  },
  {
    image: ['/img/projects/pantaucorona.jpg'],
    category: ['Flutter'],
    name: 'Pantau Corona',
    description: 'An application to monitor corona virus patient data in Indonesia and the world',
    link: '',
    github: 'https://github.com/mrizkinm/pantaucorona'
  },
  {
    image: ['/img/projects/laporcepat1.jpg', '/img/projects/laporcepat2.jpg', '/img/projects/laporcepat3.jpg'],
    category: ['Flutter', 'Firebase'],
    name: 'Lapor Cepat',
    description: 'An application to report a criminal incident to the police with real time messaging',
    link: '',
    github: 'https://github.com/mrizkinm/laporcepat'
  },
  {
    image: ['/img/projects/prediksi1.png', '/img/projects/prediksi2.png', '/img/projects/prediksi3.png'],
    category: ['Django', 'MySQL', 'Bootstrap'],
    name: 'Food price prediction application uses ARIMA method',
    description: 'Food price prediction application for basic needs uses the ARIMA (Autoregressive Integrated Moving Average) method with the django python framework',
    link: '',
    github: 'https://github.com/mrizkinm/prediksi'
  },
  {
    image: ['/img/projects/sawkasir1.jpg', '/img/projects/sawkasir2.jpg', '/img/projects/sawkasir3.jpg'],
    category: ['Codeigniter', 'MySQL', 'Bootstrap'],
    name: 'Decision Support System with SAW method for selecting cashier employees',
    description: 'Decision Support System with SAW (Simple Additive Weighting) method for selecting cashier employees',
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

  return (
    <section id="projects" className="py-20">
      <div className="max-w-[1240px] px-5 mx-auto">
        <h2 className="text-4xl font-bold mb-8 xl:mb-16 text-center mx-auto">Projects</h2>
        <Tabs defaultValue={category} className="mb-24 xl:mb-48">
          <TabsList className="w-full grid h-full grid-cols-2 md:grid-cols-4 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none">
            {categoryList.map((item, index) => (
              <TabsTrigger onClick={() => setCategory(item)} value={item} key={index} className="capitalize w-auto">{item}</TabsTrigger>
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