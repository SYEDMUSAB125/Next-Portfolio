import Image from 'next/image';
import ParticlesContainer from '../components/ParticlesContainer';
import ProjectBtn from '../components/ProjectsBtn';
import Avatar from "../components/Avatar";
import {motion} from 'framer-motion'
import { fadeIn} from '../variants'
const Home = () => {
  return <div className='bg-primary h-full'>
    <div className='w-full h-full bg-gradient-to-r from-primary/10 via-black/30  to-black/10'>
      <div className='text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto'>
        <motion.h1 variants={fadeIn('down',0.4)}
        initial='hidden'
        animate='show'
        exit='hidden'  className='h1'>
          Transforming ideas <br /> Into{''} <span className='text-accent'>
            Digital Reality
          </span>
        </motion.h1>
        <motion.p variants={fadeIn('down',0.4)}
        initial='hidden'
        animate='show'
        exit='hidden'
         className='max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16'>Crafting the future with lines of code: Whether you're shaping the digital landscape as an IoT developer or weaving the web's magic as a web developer.Together, they bridge the physical and digital realms, let's innovation starts with you.</motion.p>
        <div className='flex justify-center xl:hidden relative'>
          <ProjectBtn/>
        </div>
        <motion.div variants={fadeIn('down',0.4)}
        initial='hidden'
        animate='show'
        exit='hidden'
        className='hidden xl:flex xl:relative xl:-top-10'
        >
          <ProjectBtn />
        </motion.div>
      </div>
    </div>

 <div className='w-[1200px] h-full absolute right-0 bottom-0'>
  <div className='bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0'>
  </div>

<ParticlesContainer/>

<motion.div variants={fadeIn('up',0.5)}
        initial='hidden'
        animate='show'
        exit='hidden'
        transition={{durtion:3, ease:'easeInOut'}}
        className='w-full h-full max-w-[600px] max-h-[550px] absolute -bottom-32 lg:bottom-0 lg:right-[4%]'>
  <Avatar/>
</motion.div>
 </div>

  </div>;
};

export default Home;
