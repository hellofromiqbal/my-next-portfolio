import React from 'react';
import Link from 'next/link';
import { MdOutlineArrowOutward } from "react-icons/md";
import { portfolioData } from '@/app/data/portfolioData';

const Experience = () => {
  return (
    <section id='experience' className='flex flex-col gap-4'>
      <div className='lg:hidden sticky top-0 py-4 bg-primary'>
        <h2 className='text-secondary text-base font-semibold'>EXPERIENCE</h2>
      </div>
      <div className='flex flex-col gap-4 md:gap-12'>
        {portfolioData['experience'].data.map((item) => (
          <div key={item.company} className='flex flex-col md:flex-row gap-2 md:gap-4 lg:p-4 rounded-md bg-transparent lg:hover:bg-slate-800 cursor-pointer transition duration-150'>
            <div className='md:basis-3/12 lg:basis-1/3'>
              <p className='text-tertiary text-xs font-semibold text-opacity-60 pt-1'>{item.period}</p>
            </div>
            <div className='md:basis-9/12 lg:basis-2/3 flex flex-col justify-start items-start gap-2'>
              <span className='flex items-center gap-2'>
                <h2 className='text-secondary font-semibold'>{`${item.position} - ${item.company}`}</h2>
                <MdOutlineArrowOutward color='#e2e8f0'/>
              </span>
              <p className='text-sm text-tertiary'>{item.description}</p>
              <div className='flex flex-wrap gap-2 mt-2'>
                {item.technologies.map((technology) => (
                  <span key={technology} className='px-2 py-1 bg-slate-700 text-xs text-secondary text-opacity-80 font-medium rounded-full'>{technology}</span>  
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <Link href="#" className='w-max text-secondary font-semibold hover:underline underline-offset-4 lg:px-4'>View Full Resume</Link>
    </section>
  )
};

export default Experience;