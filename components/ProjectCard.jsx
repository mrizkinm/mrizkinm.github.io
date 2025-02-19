import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Card, CardHeader } from './ui/card'
import { Github, Link2Icon } from 'lucide-react'
import { Badge } from './ui/badge'
import ImageModal from './ImageModal'

const ProjectCard = ({project}) => {
  return (
    <Card className="group overflow-hidden h-full relative">
      <CardHeader className="p-0">
        <div className="relative w-full h-[250px] flex items-center justify-center bg-blue-50 dark:bg-secondary/40">
          <Image className="absolute bottom-0 shadow-2xl object-contain w-full h-full" src={project.image[0]} alt="Image" layout="fill" priority />
          <div className="flex gap-x-4">
            <ImageModal images={project.image} />
            {project.link && (
              <Link href={project.link} target="_blank" title="Url" className="bg-slate-700 w-[45px] h-[45px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200">
              <Link2Icon className="text-white" />
            </Link>
            )}
            {project.github && (
              <Link href={project.github} target="_blank" title="Github" className="bg-slate-700 w-[45px] h-[45px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200">
                <Github className="text-white" />
              </Link>
            )}
          </div>
        </div>
      </CardHeader>
      <div className="h-full px-8 py-6">
        <div className="flex flex-row gap-1 flex-wrap">
          {project.category.map((item, index) => (
            <Badge className="text-sm font-medium mb-2" key={index}>{item}</Badge>
          ))}
        </div>
        <h4 className="h4 mb-1">{project.name}</h4>
        <p className="text-muted-foreground text-lg text-justify">{project.description}</p>
      </div>
    </Card>
  )
}

export default ProjectCard