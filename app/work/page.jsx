"use client";

import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { 
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider
} from "@/components/ui/tooltip";
import Link from 'next/link';
import Image from 'next/image';
import WorkSliderBtns from '@/components/WorkSliderBtns';

const projects = [
  {
    num: '01',
    category: 'Database Management',
    title: 'Storing Air Quality Index values in Realtime',
    description: 'A web application that stores air quality index values in XAMPP server Database',
    stack: [
      {
        name: 'Python',
      },
      {
        name: 'XAMPP server',
      }
    ],
    image: '/assets/work/thumb5.png',
    link: "https://drive.google.com/file/d/1l_-80w8fGMbgtBafAf7MnviBLstz6ZmZ/view?usp=sharing"
  },
  {
    num: '02',
    category: 'Backend',
    title: 'Face Detection',
    description: 'Face Detection using OpenCV',
    stack: [
      {
        name: 'Python',
      },
      {
        name: 'OpenCV',
      }
    ],
    image: '/assets/work/thumb3.png',
    link: "https://github.com/abhishakejutur/projects/tree/qrcode_scanner/Image%20Processing%20Projects/Face%20Detection"
  },
  {
    num: '03',
    category: 'Frontend',
    title: 'Portfolio',
    description: 'My personal portfolio website',
    stack: [
      {
        name: 'HTML',
      },
      {
        name: 'CSS',
      },
      {
        name: 'Figma',
      },
      {
        name: 'React/next.js',
      },
    ],
    image: '/assets/work/thumb1.png',
    link: ""
  },
  {
    num: '04',
    category: 'Flutter Application',
    title: 'Call logs Access Data',
    description: 'A flutter application to access call logs data from the phone',
    stack: [
      {
        name: 'Flutter',
      },
      {
        name: 'Dart',
      }
    ],
    image: '/assets/work/thumb2.png',
    link: "https://github.com/abhishakejutur/call_logs_access_app_6"
  },
]

const Work = () => {
  const [project, setProject] = useState(projects[0]);
  const handleSlideChange = (swiper)=>{
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  }
  return (
    <motion.section 
      initial={{opacity: 0}} 
      animate={{opacity: 1,
        transition: { delay: 2.4, duration:0.4, ease:"easeIn"},
      }}
      className='min-h-[80vh] flex flex-col justify-center py-12 xl:px-0'
    >
      <div className="container mx-auto">
        <div className='flex flex-col xl:flex-row xl:gap-[30px]'>
          <div className='w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none'>
            <div className='flex flex-col gap-[30px] mb-4 h-[50%]'>
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">{project.num}</div>
            </div>
            <h2 className='text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize mb-4'>
              {project.category} project
            </h2>
            <p className='text-white/60 mb-4'>
              {project.description}
            </p>
            <ul className='flex gap-4 mb-4'>
              {project.stack.map((item, index)=>{
                return <li key={index} className='text-xl text-accent'>
                  {item.name}{index !== project.stack.length - 1 && ","}
                  </li>
              })}
            </ul>
            <div className='border border-white/20 mb-4'></div>
            <div className='flex items-center gap-4'>
              <Link href={project.link}>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group'>
                      <BsArrowUpRight className='text-white text-3xl group-hover:text-accent' />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>project code</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Link>
            </div>
          </div>
          <div className='w-full xl:w-[50%]'>
            <Swiper spaceBetween={30} slidesPerView={1} className='xl:h-[520px] mb-12' onSlideChange={handleSlideChange}>
              {projects.map((project, index)=>{
                return <SwiperSlide key={index} className='w-full'>
                  <div className='h-[460px] relative group flex justify-center items-center bg-pink-50/20'>
                    <div className='absolute top-0 bottom-0 w-full h-full bg-black/10 z-10'>

                    </div>
                    <div className='relative w-full h-full'>
                      <Image src={project.image} fill className='object-cover' alt='AJ-Project'/>
                    </div>
                  </div>
                </SwiperSlide>
              })}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent-500 hover:bg-accent-700 text-white rounded-full text-[20px] w-[42px] h-[42px] flex justify-center items-center transition-transform duration-300 ease-in-out transform hover:scale-110"
                iconsStyles="text-[20px]"
              />


            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Work;
