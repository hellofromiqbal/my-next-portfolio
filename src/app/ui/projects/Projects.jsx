import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MdOutlineArrowOutward } from "react-icons/md";
import { portfolioData } from '@/app/data/portfolioData';
import ProjectCard from './projectCard/ProjectCard';

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
      <Link href="#" className='w-max text-secondary font-semibold hover:underline underline-offset-4 lg:px-4'>View Full Project Archive</Link>
    </section>
  )
};

export default Projects;