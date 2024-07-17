"use client";
import { useState } from 'react';
import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    num: '01',
    title: 'Database Management',
    description: 'I can manage database using SQL Server, postgreSQL and MySQL.',
    href: "/work"
  },
  {
    num: '02',
    title: 'Backend Development',
    description: 'I can build APIs and backend services using ASP.NET(C#)/Java/Pyhton.',
    href: "https://github.com/abhishakejutur/projects"
  },
  {
    num: '03',
    title: 'Frontend Development',
    description: 'I can build frontend using HTML, CSS, Bootstrap and Figma.',
    href: "/work"
  },
  {
    num: '04',
    title: 'Application Development',
    description: 'I can build applications using Flutter.',
    href: "https://github.com/abhishakejutur/call_logs_access_app_6"
  }
];

const Services = () => {
  const playClickSound = () => {
    const audio = new Audio("/assets/click1.mp3");
    audio.play();
  };

  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div 
          initial={{opacity: 0}}
          animate={{
            opacity:1, 
            transition:{delay: 2.4, duration: 0.4, ease: 'easeIn'}
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">{service.num}</div>
                  <Link href={service.href} onClick={playClickSound} className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45">
                    <BsArrowDownRight className="text-primary text-3xl"/>
                  </Link>
                </div>
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">{service.title}</h2>
                <p className="text-white/60">{service.description}</p>
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Services;
