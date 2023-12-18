// testimonial data
const testimonialData = [
  {
    image: '/t-avt-1.jpeg',
    name: 'Muhammad Huzaifah',
    position: 'Content Writer',
    message:
      'Syed Musab is an exceptional developer with an extremely professional approach, both in client communication and technicalities. His critical thinking and his advise while working on projects are top notch. Very satisfied with his approach to use next js in my web design, and his front end development capabilities. Highly Recommended!',
  },
  {
    image: '/t-avt-2.jpeg',
    name: 'Muhammad Huzaifa Shams',
    position: 'CEO of Digiti-Tek',
    message:
      'He is an outstanding MERN stack developer. Their expertise in TypeScript, Next.js, and Python is truly commendable. Adept at seamlessly integrating electronics engineering, they consistently deliver top-notch solutions. A valuable asset to any team, bringing innovation and precision to every project',
  },
  {
    image: '/t-avt-3.jpeg',
    name: 'Mohsin',
    position: 'Senior Web Developer - NCl lab NEDUET',
    message:
      'I had the absolute pleasure of collaborating with Syed Musab on a recent Web project, and the experience was nothing short of outstanding.From the outset, Syed Musab displayed an incredible understanding of both the technical aspects and the aesthetic vision for the project. The result was a breathtakingly beautiful Web application that not only met but exceeded all expectations.',
  },
];




import {FaQuoteLeft} from 'react-icons/fa'
import {Swiper , SwiperSlide} from "swiper/react";
import "swiper/css"
import 'swiper/css/navigation';
import "swiper/css/pagination";
import { Navigation,Pagination } from "swiper";
import Image from 'next/image';


const TestimonialSlider = () => {
  return(
  <>
    
  
  <Swiper 
 navigation={true}
  pagination={{clickable:true}}
  modules={[Navigation, Pagination]}
  className="h-[400px]"
  >
   
    {
      
      testimonialData.map((person,index)=>{
        return(<SwiperSlide key={index}>
  <div className='flex flex-col items-center md:flex-row gap-x-8 h-full px-16'>
    <div className='w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto  xl:mx-0'>
      <div className='flex flex-col justify-center text-center'>
        <div className='  mx-auto'> <Image 
        
        src={person.image}
        width={100}
        height={100}
        alt='people image'
        /></div>
        <div className='text-lg'>{person.name}</div>
        <div className='text-[12px] uppercase font-extralight tracking-widest  '>{person.position}</div>
      </div>
    </div>
    <div className='flex-1 flex flex-col justify-center before:w-[1px] before:bg-white/30 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20'>
     <div className='mb-4'>
      <FaQuoteLeft className='text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0'/>
     </div>
     <div className='xl:text-lg text-center md:text-left'>{person.message}</div>
    </div>
  </div>
</SwiperSlide>
)
      })
    }
  </Swiper>
  
  </>
) }

export default TestimonialSlider;

