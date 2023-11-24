import React from 'react';
import Link from 'next/link';
import { portfolioData } from '@/app/data/portfolioData';
import ExperienceCard from './experienceCard/ExperienceCard';

const Experience = () => {
  return (
    <section id='experience' className='flex flex-col gap-4'>
      <div className='lg:hidden sticky top-0 py-4 bg-primary'>
        <h2 className='text-secondary text-base font-semibold'>EXPERIENCE</h2>
      </div>
      <div className='flex flex-col gap-4 md:gap-12'>
        {portfolioData['experience'].data.map((item) => (
          <ExperienceCard key={item.company} item={item}/>
        ))}
      </div>
      <Link href="#" className='w-max text-secondary font-semibold hover:underline underline-offset-4 lg:px-4'>View Full Resume</Link>
    </section>
  )
};

export default Experience;