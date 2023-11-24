import React from 'react';
import Link from 'next/link';

const Experience = () => {
  return (
    <section id='experience' className='flex flex-col gap-4 px-4'>
      <div className='lg:hidden sticky top-0 py-4 bg-primary'>
        <h2 className='text-secondary text-base font-semibold'>EXPERIENCE</h2>
      </div>
      <div className='flex flex-col gap-4'>
        <div className='flex flex-col md:flex-row gap-2 md:gap-4 md:p-4 rounded-md bg-transparent lg:hover:bg-slate-800 cursor-pointer transition duration-150'>
          <div className='md:basis-3/12 lg:basis-1/3'>
            <p className='text-tertiary text-xs font-semibold text-opacity-60 pt-1'>MARCH - JUNE 2023</p>
          </div>
          <div className='md:basis-9/12 lg:basis-2/3 flex flex-col justify-start items-start gap-2'>
            <h2 className='text-secondary font-semibold'>Front-End Web Developer - Gikslab</h2>
            <p className='text-sm text-tertiary'>Deliver high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more. Provide leadership within engineering department through close collaboration, knowledge shares, and mentorship.</p>
            <div className='flex flex-wrap gap-2 mt-2'>
              <span className='px-2 py-1 bg-slate-700 text-xs text-secondary text-opacity-80 font-medium rounded-full'>Next.js</span>
              <span className='px-2 py-1 bg-slate-700 text-xs text-secondary text-opacity-80 font-medium rounded-full'>React</span>
              <span className='px-2 py-1 bg-slate-700 text-xs text-secondary text-opacity-80 font-medium rounded-full'>Express.js</span>
              <span className='px-2 py-1 bg-slate-700 text-xs text-secondary text-opacity-80 font-medium rounded-full'>MongoDB</span>
              <span className='px-2 py-1 bg-slate-700 text-xs text-secondary text-opacity-80 font-medium rounded-full'>Node.js</span>
              <span className='px-2 py-1 bg-slate-700 text-xs text-secondary text-opacity-80 font-medium rounded-full'>JWT</span>
              <span className='px-2 py-1 bg-slate-700 text-xs text-secondary text-opacity-80 font-medium rounded-full'>React Redux</span>
              <span className='px-2 py-1 bg-slate-700 text-xs text-secondary text-opacity-80 font-medium rounded-full'>Tailwind</span>
              <span className='px-2 py-1 bg-slate-700 text-xs text-secondary text-opacity-80 font-medium rounded-full'>Bootstrap</span>
            </div>
          </div>
        </div>
        <div className='flex flex-col md:flex-row gap-2 md:gap-4 md:p-4 rounded-md bg-transparent lg:hover:bg-slate-800 cursor-pointer transition duration-150'>
          <div className='md:basis-3/12 lg:basis-1/3'>
            <p className='text-tertiary text-xs font-semibold text-opacity-60 pt-1'>2021 - 2022</p>
          </div>
          <div className='md:basis-9/12 lg:basis-2/3 flex flex-col justify-start items-start gap-2'>
            <h2 className='text-secondary font-semibold'>Front-End Web Developer - Tokopedia</h2>
            <p className='text-sm text-tertiary'>Deliver high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more. Provide leadership within engineering department through close collaboration, knowledge shares, and mentorship.</p>
            <div className='flex flex-wrap gap-2 mt-2'>
              <span className='px-2 py-1 bg-slate-700 text-xs text-secondary text-opacity-80 font-medium rounded-full'>Next.js</span>
              <span className='px-2 py-1 bg-slate-700 text-xs text-secondary text-opacity-80 font-medium rounded-full'>React</span>
              <span className='px-2 py-1 bg-slate-700 text-xs text-secondary text-opacity-80 font-medium rounded-full'>Express.js</span>
              <span className='px-2 py-1 bg-slate-700 text-xs text-secondary text-opacity-80 font-medium rounded-full'>MongoDB</span>
              <span className='px-2 py-1 bg-slate-700 text-xs text-secondary text-opacity-80 font-medium rounded-full'>Node.js</span>
              <span className='px-2 py-1 bg-slate-700 text-xs text-secondary text-opacity-80 font-medium rounded-full'>JWT</span>
              <span className='px-2 py-1 bg-slate-700 text-xs text-secondary text-opacity-80 font-medium rounded-full'>React Redux</span>
              <span className='px-2 py-1 bg-slate-700 text-xs text-secondary text-opacity-80 font-medium rounded-full'>Tailwind</span>
              <span className='px-2 py-1 bg-slate-700 text-xs text-secondary text-opacity-80 font-medium rounded-full'>Bootstrap</span>
            </div>
          </div>
        </div>
      </div>
      <Link href="#" className='w-max text-secondary font-semibold hover:underline underline-offset-4'>View Full Resume</Link>
    </section>
  )
};

export default Experience;