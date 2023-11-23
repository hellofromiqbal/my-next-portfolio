import React from 'react';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa6";

const Jumbotron = () => {
  return (
    <section className='bg-main h-screen md:h-[50vh] lg:h-screen flex flex-col-reverse md:flex-row px-4 md:px-20 lg:px-32'>
      <div className='basis-1/2 flex items-start md:items-center'>
        <div className='flex flex-col gap-4 lg:w-2/3'>
          <div className='flex flex-col gap-2'>
            <h1 className='text-4xl text-secondary font-bold'>Muhammad Iqbal</h1>
            <h3 className='text-secondary font-semibold'>Web Developer</h3>
            <p className='text-tertiary'>I build exceptional and accessible digital experiences for the web.</p>
          </div>
          <div className='flex flex-col md:flex-row gap-2'>
            <button className='border border-transparent bg-secondary hover:border-secondary hover:bg-transparent text-primary hover:text-secondary text-center py-2 px-4 transition duration-150'>Resume</button>
            <button className='border border-secondary bg-transparent text-secondary text-center py-2 px-4'>Contact</button>
          </div>
          <div className='flex gap-4'>
            <Link href="https://github.com/hellofromiqbal" target='_blank'>
              <FaGithub color='#94a3b8' fontSize={25}/>
            </Link>
            <Link href="https://facebook.com/hellofromiqbal" target='_blank'>
              <FaFacebook color='#94a3b8' fontSize={25}/>
            </Link>
            <Link href="https://linkedin.com/in/hellofromiqbal" target='_blank'>
              <FaLinkedin color='#94a3b8' fontSize={25}/>
            </Link>
          </div>
        </div>
      </div>
      <div className='basis-1/2 flex justify-center items-center'>
        <div className='w-[230px] h-[230px] md:w-[250px] md:h-[250px] lg:w-[270px] lg:h-[270px] rounded-full bg-secondary'></div>
      </div>
    </section>
  )
};

export default Jumbotron;