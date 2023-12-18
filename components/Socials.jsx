import { RiYoutubeLine,RiInstagramLine,
  RiFacebookBoxLine,RiDribbbleLine,
  RiBehanceLine,RiPinterestLine, RiFacebookLine, RiGithubFill, RiNpmjsFill, RiFacebookBoxFill, RiFacebookCircleFill, RiFacebookCircleLine, RiFacebookFill, RiLinkedinBoxFill, RiLinkedinBoxLine, RiLinkedinFill
  
} from 'react-icons/ri'
import Link from 'next/link'
const Socials = () => {
  return (
    <div className='flex 
     items-center gap-x-5 text-lg'>
      <Link href={'https://github.com/SYEDMUSAB125'} className='hover:text-accent
      transition-all duration-300'>
        <RiGithubFill/>
      </Link>
      <Link href={'https://www.facebook.com/intellegent.sudent'} className='hover:text-accent
      transition-all duration-300'>
        <RiFacebookFill/>
      </Link>
      <Link href={'https://www.linkedin.com/in/syed-muhammad-musab-533a07222/'} className='hover:text-accent
      transition-all duration-300'>
        <RiLinkedinFill/>
      </Link>
      <Link href={'https://www.npmjs.com/~syedmusab'} className='hover:text-accent
      transition-all duration-300'>
        <RiNpmjsFill/>
      </Link>
      
      
    </div>
  )
};

export default Socials;
