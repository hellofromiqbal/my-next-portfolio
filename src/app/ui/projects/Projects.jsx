import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MdOutlineArrowOutward } from "react-icons/md";
import { portfolioData } from '@/app/data/portfolioData';

const Projects = () => {
  return (
    <section id='projects' className='flex flex-col gap-4'>
      <div className='lg:hidden sticky top-0 py-4 bg-primary z-10'>
        <h2 className='text-secondary text-base font-semibold'>PROJECTS</h2>
      </div>
      <div className='flex flex-col gap-4 md:gap-12'>
        {portfolioData['projects'].data.map((item) => (
          <div key={item.title} className='flex flex-col-reverse md:flex-row gap-4 lg:p-4 rounded-md bg-transparent lg:hover:bg-slate-800 cursor-pointer transition duration-150'>
            <div className='md:basis-3/12 lg:basis-1/3'>
              <div className='w-1/2 md:w-full h-[100px] relative border-2 border-opacity-60 border-tertiary rounded-md overflow-hidden'>
                <Image src={item.imgUrl} alt={item.title} className='object-cover' fill/>
              </div>
            </div>
            <div className='md:basis-9/12 lg:basis-2/3 flex flex-col justify-start items-start gap-2'>
              <span className='flex items-center gap-2'>
                <h2 className='text-secondary font-semibold'>{item.title}</h2>
                <MdOutlineArrowOutward color='#e2e8f0'/>
              </span>
              <p className='text-sm text-tertiary'>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      <Link href="#" className='w-max text-secondary font-semibold hover:underline underline-offset-4 lg:px-4'>View Full Project Archive</Link>
    </section>
  )
};

export default Projects;