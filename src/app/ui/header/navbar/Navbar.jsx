import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className='hidden lg:flex flex-col gap-6 my-10'>
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
    </nav>
  )
};

export default Navbar;