import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs'
import { User2, MailIcon, HomeIcon, PhoneCall, GraduationCap, Calendar, Briefcase, University } from 'lucide-react'
import Image from 'next/image';
import Link from 'next/link';

const info = [
  {
    icon: <User2 size={20} />,
    text: 'Muhammad Rizki Nur Ma\'arif'
  },
  {
    icon: <MailIcon size={20} />,
    text: <Link href="mailto:muhammadrizkinur37@gmail.com" target="_blank">muhammadrizkinur37@gmail.com</Link>
  },
  {
    icon: <Calendar size={20} />,
    text: 'Born on 14 Sep, 1998'
  },
  {
    icon: <GraduationCap size={20} />,
    text: 'Bachelor of Informatics Engineering, Universitas Bhayangkara Surabaya'
  },
  {
    icon: <HomeIcon size={20} />,
    text: 'Surabaya, Jawa Timur, Indonesia'
  },
];

const experiences = [
  {
    company: 'PT Otak Kiri Kanan',
    role: 'Web Programmer',
    years: 'Sep 2023 - Now',
    description: 'Develop City Cargo web and Telegram Bot App',
    type: 'Project'
  },
  {
    company: 'PT Aplikasi Info Koneksi',
    role: 'Web Programmer, Android Programmer',
    years: 'Aug 2017 - Now',
    description: 'Develop several web applications',
    type: 'Full Time'
  },
  {
    company: 'Politeknik Elektronika Negeri Surabaya',
    role: 'Web Programmer',
    years: 'Jan 2016 - May 2016',
    description: 'Build inventory application for computer engineering laboratory',
    type: 'Internship'
  },
];

const educations = [
  {
    'university': 'Universitas Bhayangkara Surabaya',
    'qualification': 'Informatics Engineering',
    'years': 'Sep 2018 - Nov 2023'
  },
  {
    'university': 'SMK Negeri 1 Surabaya',
    'qualification': 'Software Engineering',
    'years': 'Jul 2014 - Jul 2017'
  }
];

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="max-w-[1240px] px-5 mx-auto">
        <h2 className="text-4xl font-bold mb-8 xl:mb-16 text-center mx-auto">About Me</h2>
        <div className="flex flex-col xl:flex-row">
          <div className="flex flex-1 justify-center items-center p-5">
            <Image src="/img/me.jpg" className="rounded-lg" width="400" height="400" alt="Image" />
          </div>
          <div className="flex-1">
            <Tabs defaultValue="personal">
              <TabsList className="w-full grid grid-cols-3 xl:max-w-[520px]">
                <TabsTrigger value="personal">
                  Personal Info
                </TabsTrigger>
                <TabsTrigger value="experiences">
                  Experiences
                </TabsTrigger>
                <TabsTrigger value="educations">
                  Educations
                </TabsTrigger>
              </TabsList>
              <div className="text-lg mt-8">
                <TabsContent value="personal">
                  <div>
                    <h3 className="h3 mb-8">Hello, I am Muhammad Rizki! 👋</h3>
                    <p className="subtitle text-justify">I am an experienced Full Stack Developer with over 7 years of experience in the software development industry. I graduated from SMK Negeri 1 Surabaya majoring in Software Engineering in 2017. In 2018, I continued my education at Universitas Bhayangkara Surabaya while working, and successfully earned a bachelor&apos;s degree in Informatics Engineering in 2023.</p>
                    <p className="subtitle text-justify">With expertise in both frontend and backend development, I am proficient in various technologies and frameworks, including Laravel, CodeIgniter, Next.js, React, and Flutter. I am capable of developing modern, intuitive websites and building efficient support systems. Additionally, I have experience in developing Android mobile applications, providing end-to-end solutions for both web and mobile-based projects.</p>
                    <p className="subtitle text-justify">I am passionate about collaborating with people to bring their ideas to life. If you need a website or Android app, let&apos;s connect and create something amazing together!</p>
                    <div className="grid gap-4 mb-12">
                      {info.map((item, index) => (
                        <div key={index}>
                          <div className="flex items-center gap-x-4 mx-auto xl:mx-0">
                            <div className="text-primary">{item.icon}</div>
                            <div>{item.text}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="experiences">
                  <div className="mb-8 flex gap-4 items-center">
                    <Briefcase className="text-3xl" />
                    <h3 className="h3">My Experiences</h3>
                  </div>
                  <div className="flex flex-col gap-y-6">
                    {experiences.map((item, index) => {
                      return (
                        <div key={index} className="flex gap-x-8 group">
                          <div className="h-[100px] w-[1px] bg-border relative ml-2">
                            <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[100px] transition-all duration-500"></div>
                          </div>
                          <div className="flex flex-col gap-y-1">
                            <div className="font-semibold">{item.company}</div>
                            <div className="text-lg text-muted-foreground">{item.role} - {item.type}</div>
                            <div className="text-base font-medium">{item.years}</div>
                            <div className="text-lg text-muted-foreground text-justify">{item.description}</div>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </TabsContent>
                <TabsContent value="educations">
                  <div className="mb-8 flex gap-4 items-center">
                    <GraduationCap />
                    <h3 className="h3">My Educations</h3>
                  </div>
                  <div className="flex flex-col gap-y-6">
                    {educations.map((item, index) => {
                      return (
                        <div key={index} className="flex gap-x-8 group">
                          <div className="h-[84px] w-[1px] bg-border relative ml-2">
                            <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                          </div>
                          <div className="flex flex-col gap-y-1">
                            <div className="font-semibold">{item.university}</div>
                            <div className="text-lg text-muted-foreground">{item.qualification}</div>
                            <div className="text-base font-medium">{item.years}</div>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About