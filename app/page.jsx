/* eslint-disable react/no-unescaped-entities */
"use client";

import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

// components
import Socials from "@/components/Socials";
import { Photo } from "@/components/Photo";
import Stats from "@/components/Stats";

const Home = () => {
  const playClickSound = () => {
    const audio = new Audio("/assets/click1.mp3");
    audio.play();
  };

  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Full Stack Developer</span>
            <h1 className="h1 mb-6">
              Hello I'm <br /> <span className="text-accent">Jutur Abhishake</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I specialize in writing APIs using ASP.NET, Next.js, Primsa Client and have solid skills in database management, Postgresql and SQL servers. I am also proficient in various programming languages and technologies.
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <a href="/assets/Resume/JuturAbhishake.pdf" download className="uppercase flex items-center gap-2" onClick={playClickSound}>
                <Button variant="outline" size="lg">
                  <span>Download CV</span>
                  <FiDownload className="text-xl ml-2" />
                </Button>
              </a>
              <div className="mb-8 xl:mb-8"><br />
                <Socials 
                  containerStyles="flex gap-6" 
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500" 
                  playClickSound={playClickSound} // Pass the sound function to Socials component
                />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  )
}

export default Home;
