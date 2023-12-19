// icons
// data

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
const serviceData = [
  {
    icon: <RxPencil2 />,
    title: 'Web Designing',
    description: 'Elevate your websites with our cutting edge technology design service to showcase your uniqueness',
  },
  {
    icon: <RxDesktop />,
    title: 'Development',
    description: 'Enhance your projects with our Full Stack expertise MERN, Tailwind CSS, Next.js. ',
  },
  {
    icon: < SiMultisim />,
    title: 'Design Circuit',
    description: 'Revolutionize circuit design,Multisim and Verilog environments.Reliability converge for cutting-edge electronic solutions',
  },
  {
    icon: <SiArduino />,
    title: 'IOT Developer',
    description: 'Crafting IoT solutions with Arduino and Micro-controller. Seamlessly connecting devices for smart, efficient, and innovative applications in the digital landscape.',
  },
];

import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight
} from "react-icons/rx";
import {Swiper , SwiperSlide} from "swiper/react";
import "swiper/css"
import 'swiper/css/free-mode';
import "swiper/css/pagination";
import { FreeMode,Pagination } from "swiper";


const ServiceSlider = () => {
  return(
  <>
    
  
  <Swiper breakpoints={{
    320:{
slidesPerView:1,
spaceBetween:15,
    },
    640:{
      slidesPerView:3,
      spaceBetween:15,
          },

  }}
  freeMode={true}
  pagination={{clickable:true}}
  modules={[FreeMode,Pagination]}
  className="h-[240px] sm:h-[340px]"
  >
   
    {
      
      serviceData.map((item,index)=>{
        return(<SwiperSlide key={index}>
  <div className="bg-[rgba(62,56,82,0.15)] h-[340px] rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group  cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300 ">
    <div className="text-4xl text-accent mb-4">{item.icon}</div>
    <div>
      {item.title}
      </div>
      <p className="max-w-[350px] leading-normal">{
        item.description
      }</p>
      
    
      <div className="text-3xl">{<RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300"/>}</div>
   
  </div>
</SwiperSlide>
)
      })
    }
  </Swiper>
  
  </>
) }

export default ServiceSlider;
