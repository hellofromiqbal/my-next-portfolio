import React from 'react';
import Link from 'next/link';
import { FaGithub, FaFacebook, FaLinkedin } from 'react-icons/fa6';

const Header = () => {
  return (
    <header className='flex flex-col gap-4'>
      <div className='flex flex-col gap-2'>
        <h1 className='font-extrabold text-4xl text-secondary'>Muhammad Iqbal</h1>
        <h2 className='font-semibold text-xl text-secondary'>Web Developer</h2>
        <p className='text-tertiary w-3/4'>I build exceptional and accessible digital experiences for the web.</p>
      </div>
      <div className='flex flex-row gap-2'>
        <button className='bg-secondary hover:bg-transparent text-primary hover:text-secondary border border-transparent hover:border-secondary px-4 py-2 font-medium transition duration-100'>Resume</button>
        <button className='bg-transparent text-secondary border border-secondary px-4 py-2 font-medium'>Contact</button>
      </div>
      <div className='flex flex-row gap-2'>
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