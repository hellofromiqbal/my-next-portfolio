import React from 'react';
import Link from 'next/link';
import { portfolioData } from '@/app/data/portfolioData';
import ExperienceCard from './experienceCard/ExperienceCard';
import { MdOutlineArrowForward } from "react-icons/md";

const Experience = () => {
  return (
    <section id='experience' className='flex flex-col gap-4'>
      <div className='lg:hidden sticky top-0 py-4 bg-primary'>
        <h2 className='text-secondary text-base font-semibold'>EXPERIENCE</h2>
      </div>
      <div className='flex flex-col gap-14 lg:gap-4'>
        {portfolioData['experience'].data.map((item) => (
          <ExperienceCard key={item.company} item={item}/>
        ))}
      </div>
      <Link href="#" className='w-max text-secondary font-semibold hover:underline underline-offset-4 mt-14 lg:mt-4 lg:px-4 flex items-center gap-2'>
        <span>View Full Resume</span>
        <MdOutlineArrowForward color='#e2e8f0'/>
      </Link>
    </section>
  )
};

export default Experience;