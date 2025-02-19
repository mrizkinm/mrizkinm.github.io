import Image from 'next/image'
import React from 'react'

const skill = [
  {
    'name': 'Laravel',
    'image': '/img/skills/laravel.png'
  },
  {
    'name': 'Codeigniter',
    'image': '/img/skills/codeigniter.png'
  },
  {
    'name': 'PHP',
    'image': '/img/skills/php.png'
  },
  {
    'name': 'Node.js',
    'image': '/img/skills/nodejs.png'
  },
  {
    'name': 'Next.js',
    'image': '/img/skills/nextjs.png'
  },
  {
    'name': 'React',
    'image': '/img/skills/react.png'
  },
  {
    'name': 'Express.js',
    'image': '/img/skills/express-js.png'
  },
  {
    'name': 'Javascript',
    'image': '/img/skills/js.png'
  },
  {
    'name': 'Typescript',
    'image': '/img/skills/typescript.png'
  },
  // {
  //   'name': 'jQuery',
  //   'image': '/img/skills/jquery.png'
  // },
  {
    'name': 'Flutter',
    'image': '/img/skills/flutter.png'
  },
  {
    'name': 'Bootstrap',
    'image': '/img/skills/bootstrap.png'
  },
  {
    'name': 'Tailwind',
    'image': '/img/skills/tailwind.png'
  },
  {
    'name': 'CSS',
    'image': '/img/skills/css.png'
  },
  {
    'name': 'HTML',
    'image': '/img/skills/html.png'
  },
  {
    'name': 'Django',
    'image': '/img/skills/django.png'
  },
  {
    'name': 'MySQL',
    'image': '/img/skills/mysql.png'
  },
  {
    'name': 'PostgreSQL',
    'image': '/img/skills/postgresql.png'
  },
  {
    'name': 'Firebase',
    'image': '/img/skills/firebase.png'
  },
  {
    'name': 'Apache',
    'image': '/img/skills/apache.png'
  },
  {
    'name': 'Git',
    'image': '/img/skills/git.png'
  }
]
const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-[1240px] px-5 mx-auto">
        <h2 className="text-4xl font-bold mb-8 xl:mb-16 text-center mx-auto">Skills</h2>
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {skill.map((item, index) => (
            <div className="flex justify-center p-6 h-[160px] shadow-sm bg-blue-50 dark:bg-slate-800 rounded-xl hover:scale-105 ease-in duration-300" key={index}>
              <div className="flex flex-col gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image src={item.image} alt="Image" width="64" height="64" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>{item.name}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills