"use client";

import CountUp from "react-countup";

const stats = [
    {
        num: 8,
        text: "Projects Completed"
    },
    {
        num: 6,
        text: "Technologies"
    },
    {
        num: 7,
        text: "Certifications"
    },
    {
        num: 22,
        text: "Age"
    }
]

const Stats = () => {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
        <div className="container mx-auto">
            <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
                {stats.map((item, index)=>{
                    return (
                    <div className="flex-1 flex gap-4 items-center justify-center xl:justify-start" key={index}>
                        <CountUp 
                        end={item.num} 
                        duration={8} 
                        delay={2} 
                        className="text-4xl xl:text6xl font-extrabold"
                    />
                    <p className={'${item.text.length<15 ? "max-w-[100px]" : "max-w-[150px]"} leading-snug text-white/80'}>{item.text}</p>
                    </div>
                    )
                })}
            </div>
        </div>
    </section>
  )
}

export default Stats
