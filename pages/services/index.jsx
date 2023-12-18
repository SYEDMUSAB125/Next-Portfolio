


import ServiceSlider from "../../components/ServiceSlider";


// Components

import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";
// framer motion 
import { motion } from "framer-motion"
import { fadeIn } from "../../variants";




const Services = () => {
  return (
    <div className="h-full bg-primary py-36 flex items-center">
      <Circles />
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8">
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4">
            <motion.h2 variants={fadeIn('up',0.3)
          }
          initial='hidden'
          animate='show'
          exit='hidden'
          className="h2 xl:mt-8">
              My Services <span className="text-accent" >.</span>
            </motion.h2>
            <p className="mb-4 max-w-[400px] mx-auto lg:mx-0">
            I'm an Electronics Engineer and MERN stack virtuoso, fusing hardware and software brilliance. With expertise in TypeScript, Next.js, and Python, I craft seamless web solutions. From circuitry to code, I engineer innovative connections, shaping the digital landscape. Elevate your projects with my dual proficiency in electronics and cutting-edge web developmen
            </p>
            </div>
            <div className="w-full xl:max-w-[65%]">
             
          <ServiceSlider />

            </div>
         
        
        </div>
      </div>
      <Bulb />

    </div>


  )



};

export default Services;
