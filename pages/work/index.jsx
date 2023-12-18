


import WorkSlider from "../../components/WorkSlider";


// Components

import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";
// framer motion 
import { motion } from "framer-motion"
import { fadeIn } from "../../variants";




const Work = () => {
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
          className="h2 xl:mt-12">
              My Work <span className="text-accent" >.</span>
            </motion.h2>
            <p className="mb-4 max-w-[400px] mx-auto lg:mx-0">
            Revolutionizing online shopping with a sleek MERN stack platform and Connecting devices seamlessly, my IoT dashboard provides real-time monitoring and control.Transforming living spaces into intelligent hubs using microcontrollers.This project showcases my skills, an engaging and responsive manner, leaving a lasting impression.
            </p>
            </div>
            <div className="w-full xl:max-w-[65%]">
             
          <WorkSlider />

            </div>
         
        
        </div>
      </div>
      <Bulb />

    </div>


  )



};

export default Work;
