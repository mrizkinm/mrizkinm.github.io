import Image from 'next/image'
import React from 'react'
import { Card, CardContent } from './ui/card'

const skill = {
  'Frontend': [
    {
      'name': 'Next.js',
      'image': '/img/skills/nextjs.png'
    },
    {
      'name': 'React',
      'image': '/img/skills/react.png'
    },
    {
      'name': 'Javascript',
      'image': '/img/skills/js.png'
    },
    {
      'name': 'Typescript',
      'image': '/img/skills/typescript.png'
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
  ],
  'Backend': [
    {
      'name': 'Laravel',
      'image': '/img/skills/laravel.png'
    },
    {
      'name': 'Codeigniter',
      'image': '/img/skills/codeigniter.png'
    },
    {
      'name': 'Node.js',
      'image': '/img/skills/nodejs.png'
    },
    {
      'name': 'Express.js',
      'image': '/img/skills/express-js.png'
    },
    {
      'name': 'Django',
      'image': '/img/skills/django.png'
    },
    {
      'name': 'PHP',
      'image': '/img/skills/php.png'
    },
    {
      'name': 'Javascript',
      'image': '/img/skills/js.png'
    },
    {
      'name': 'Typescript',
      'image': '/img/skills/typescript.png'
    },
  ],
  'Database': [
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
  ],
  'Tools & DevOps': [
    {
      'name': 'Apache',
      'image': '/img/skills/apache.png'
    },
    {
      'name': 'Git',
      'image': '/img/skills/git.png'
    },
    {
      'name': 'Ubuntu Server',
      'image': '/img/skills/ubuntu.png'
    },
    {
      'name': 'SSH',
      'image': '/img/skills/ssh.png'
    },
    {
      'name': 'Postman',
      'image': '/img/skills/postman.png'
    },
  ],
  'Others': [
    {
      'name': 'Flutter',
      'image': '/img/skills/flutter.png'
    },
  ]
}

const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-[1240px] px-5 mx-auto">
        <h2 className="text-4xl font-bold mb-8 xl:mb-16 text-center mx-auto">Skills</h2>
        <div className="grid gap-6 md:grid-cols-2">
        {Object.entries(skill).map(([category, items]) => (
          <Card key={category} className="rounded-2xl shadow-sm">
            <CardContent className="p-4">
              <h3 className="text-xl font-semibold mb-2">{category}</h3>
              <ul className="flex flex-wrap gap-2 text-sm text-muted-foreground">
                {items.map(({ name, image }) => (
                  <li
                    key={name}
                    className="bg-muted px-2 py-1 rounded-md border inline-flex items-center gap-1"
                  >
                    {image && (
                      <Image
                        src={image}
                        alt={name}
                        width={20}
                        height={20}
                        className="object-contain"
                      />
                    )}
                    {name}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
      </div>
    </section>
  )
}

export default Skills