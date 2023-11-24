import React from 'react';
import Link from 'next/link';
import { portfolioData } from '@/app/data/portfolioData';
import ProjectCard from './projectCard/ProjectCard';
import { MdOutlineArrowForward } from "react-icons/md";

const Projects = () => {
  return (
    <section id='projects' className='flex flex-col gap-4'>
      <div className='lg:hidden sticky top-0 py-4 bg-primary z-10'>
        <h2 className='text-secondary text-base font-semibold'>PROJECTS</h2>
      </div>
      <div className='flex flex-col gap-14 lg:gap-4'>
        {portfolioData['projects'].data.map((item) => (
          <ProjectCard key={item.title} item={item}/>
        ))}
      </div>
      <Link href="#" className='w-max text-secondary font-semibold hover:underline underline-offset-4 mt-14 lg:mt-4 lg:px-4 flex items-center gap-2'>
        <span>View Full Project Archive</span>
        <MdOutlineArrowForward color='#e2e8f0'/>
      </Link>
    </section>
  )
};

export default Projects;