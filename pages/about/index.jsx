import React, { useState } from 'react'

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
 
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
  SiTailwindcss,
  SiTypescript,
  SiNodedotjs,
  SiMongodb,
  SiPython,
  SiArduino,
  SiNano,
  SiNodemon,
  SiRaspberrypi,
  SiMultisim,
} from "react-icons/si";
import CountUp from 'react-countup';


//  data
const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Web Development',
        icons: [ 
          <FaHtml5 />,
          <FaCss3  />,
          <FaJs  />,
          <SiTypescript  />,
          <SiNodedotjs />,
          <SiNodemon  />,
          <FaReact/>,
          <SiNextdotjs  />,
          <SiMongodb  />,
          <SiTailwindcss/>,
          <SiPython  />,
        
        ],
      },
      {
        title: 'IOT Developer',
        icons: [<SiArduino  />, <SiRaspberrypi  />,<SiMultisim />],
      },
    ],
  },
  {
    title: 'awards',
    info: [
      {
        title: 'Best Mentor Awards - Honoree',
        stage: '2021 - 2022',
      }
      
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'MERN Stack Trainer - LEAD ACADEMY',
        stage: '2022 - Present',
      },
      {
        title: 'Web Developer Trainer - EECS',
        stage: '2022 - Present',
      },
      {
        title: 'IOT Intern - NCAI lab at NEDUET',
        stage: '2022 - 2023',
      },
    ],
  },
  {
    title: 'credentials',
    info: [
      {
        title: 'Metaverse,Web 3.0 and Generative A.I - PIAIC',
        stage: '2023 - Present',
      },
      {
        title: 'B.E in Electronic Engineering - NED University',
        stage: '2020 - Present',
      },
      {
        title: 'Web Development - SMIT',
        stage: '2021',
      },
    
      {
        title: 'Certified IOT Developer - Things Roam Academy, Pakistan',
        stage: '2021',
      },
    ],
  },
];
import Avatar from "../../components/Avatar"
import Circles from "../../components/Circles"
import { motion } from 'framer-motion';
import { fadeIn } from "../../variants"
const About = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className='h-full bg-primary/30 py-32 text-center xl:text-left'>
      <Circles />
      <motion.div variants={fadeIn('right', 0.2)}
        initial='hidden'
        animate='show'
        exit='hidden'
        className='hidden xl:flex absolute bottom-0 -left-[370px]'
      >
        <Avatar />
      </motion.div>
      <div className='container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6'>
        <div className='flex-1 flex flex-col items-center'>
          <motion.h2 variants={fadeIn('right', 0.2)}
        initial='hidden'
        animate='show'
        exit='hidden'>Captivating <span className='text-accent'>Stories</span> birth magnificient designs.</motion.h2>
          <motion.p variants={fadeIn('right', 0.2)}
        initial='hidden'
        animate='show'
        exit='hidden' className='max-w-[380px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0'>6 months ago, I began freelancing as a developer. Since then, I have done remote work for agencies,consulted for startups, and collaborated on digital products for business and consumer use.</motion.p>
       




        {/* counters */}
        <motion.div variants={fadeIn('right', 0.2)}
        initial='hidden'
        animate='show'
        exit='hidden'
        className='hidden md:hidden   xl:flex xl:max-w-none mx-auto xl:mx-0 mb-8'>
          <div className='flex flex-1 xl:gap-x-14'>
            <div className='relative flex-1 after:w-[1px] after:bg-white/10 after:h-full  after:absolute after:top-[0px] after:right-[-180px]'>
              <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2" ><CountUp start={10} end={2} duration={4}/>
               <span>+</span> </div>
               <div className=' text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px] '>
            Years of Experience
          </div>
            </div>
          
         

   {/* clients */}
         
          <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-[0px] after:right-[130px]'>
            <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2" ><CountUp start={20} end={10} duration={4} />
            <span>+</span>
              </div>
              <div className=' text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px] '>
          Satisfied Clients
        </div>

          </div>
        
      
        {/* projects */}
       
          <div className='relative flex-1'>
            <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2" ><CountUp start={0} end={8} duration={4} /> 
            <span>+</span> </div>
            <div className=' text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px] '>
          Comleted projects
        </div>
          </div>
        
       

        </div>


      </motion.div>
      </div>
      <div className='flex flex-col w-full xl:max-w-[48%] h-[480px]'>
        <div className='flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-5'>
          {aboutData.map((item, itemIndex) => {
            return (
              <div key={itemIndex}
                className={`${index === itemIndex && 'text-accent after:w-[100%] after:bg-accent after:tarnsition-all after:duration-300'
                  }
                
                cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 
                after:right-1`}
                onClick={() => setIndex(itemIndex)} >{item.title}</div>
            )
          })}
        </div>
        <div className='py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start'>
          {aboutData[index].info.map((item, itemIndex) => {
            return (
              <div key={itemIndex}
                className='flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60'>
                <div className='font-light mb-2 md:mb-0'>
                  {item.title}
                </div>
                <div className='md:flex hidden '>-</div>
                <div>{item.stage}</div>
                <div className='flex gap-x-4'>
                  {item.icons?.map((icon, itemIcon) => {
                    return <div key={itemIcon}  className='text-2xl text-white'>{icon }
                    </div>
                  })}
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </div>
    </div >
  )
};

export default About;
