import React from 'react';
import Link from 'next/link';
import { FaGithub, FaFacebook, FaLinkedin } from 'react-icons/fa6';

const Header = () => {
  return (
    <header className='flex flex-col gap-4 px-6 md:px-4 lg:px-0'>
      <div className='flex flex-col gap-2'>
        <h1 className='font-extrabold text-4xl text-secondary'>Muhammad Iqbal</h1>
        <h2 className='font-semibold text-xl text-secondary'>Web Developer</h2>
        <p className='text-tertiary md:w-1/2 lg:w-3/4'>I build exceptional and accessible digital experiences for the web.</p>
      </div>
      <div className='hidden lg:flex flex-col gap-6 my-10'>
        <Link href="#about" className='navLink flex items-center gap-2 w-max'>
          <hr className='transition-all duration-150'/>
          <span>ABOUT</span>
        </Link>
        <Link href="#experience" className='navLink flex items-center gap-2 w-max'>
          <hr className='transition-all duration-150'/>
          <span>EXPERIENCE</span>
        </Link>
        <Link href="#projects" className='navLink flex items-center gap-2 w-max'>
          <hr className='transition-all duration-150'/>
          <span>PROJECTS</span>
        </Link>
      </div>
      <div className='flex flex-row gap-4'>
        <Link href="https://github.com/hellofromiqbal">
          <FaGithub color='#94a3b8' size={25}/>
        </Link>
        <Link href="https://github.com/hellofromiqbal">
          <FaFacebook color='#94a3b8' size={25}/>
        </Link>
        <Link href="https://github.com/hellofromiqbal">
          <FaLinkedin color='#94a3b8' size={25}/>
        </Link>
      </div>
    </header>
  )
};

export default Header;