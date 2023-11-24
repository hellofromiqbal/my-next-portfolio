import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MdOutlineArrowOutward } from "react-icons/md";

const Projects = () => {
  return (
    <section id='projects' className='flex flex-col gap-4'>
      <div className='lg:hidden sticky top-0 py-4 bg-primary z-10'>
        <h2 className='text-secondary text-base font-semibold'>PROJECTS</h2>
      </div>
      <div className='flex flex-col gap-4 md:gap-12'>
        <div className='flex flex-col-reverse md:flex-row gap-4 lg:p-4 rounded-md bg-transparent lg:hover:bg-slate-800 cursor-pointer transition duration-150'>
          <div className='md:basis-3/12 lg:basis-1/3'>
            <div className='w-1/2 md:w-full h-[100px] relative border-2 border-opacity-60 border-tertiary rounded-md overflow-hidden'>
              <Image src="/images/projects-project1.jpg" alt='project1' className='object-cover' fill/>
            </div>
          </div>
          <div className='md:basis-9/12 lg:basis-2/3 flex flex-col justify-start items-start gap-2'>
            <span className='flex items-center gap-2'>
              <h2 className='text-secondary font-semibold'>Build a Spotify Connected App</h2>
              <MdOutlineArrowOutward color='#e2e8f0'/>
            </span>
            <p className='text-sm text-tertiary'>Video course that teaches how to build a web app with the Spotify Web API. Topics covered include the principles of REST APIs, user auth flows, Node, Express, React, Styled Components, and more.</p>
          </div>
        </div>
        <div className='flex flex-col-reverse md:flex-row gap-4 lg:p-4 rounded-md bg-transparent lg:hover:bg-slate-800 cursor-pointer transition duration-150'>
          <div className='md:basis-3/12 lg:basis-1/3'>
            <div className='w-1/2 md:w-full h-[100px] relative border-2 border-opacity-60 border-tertiary rounded-md overflow-hidden'>
              <Image src="/images/projects-project2.jpg" alt='project2' className='object-cover' fill/>
            </div>
          </div>
          <div className='md:basis-9/12 lg:basis-2/3 flex flex-col justify-start items-start gap-2'>
            <span className='flex items-center gap-2'>
              <h2 className='text-secondary font-semibold'>Spotify Profile</h2>
              <MdOutlineArrowOutward color='#e2e8f0'/>
            </span>
            <p className='text-sm text-tertiary'>Web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.</p>
          </div>
        </div>
        <div className='flex flex-col-reverse md:flex-row gap-4 lg:p-4 rounded-md bg-transparent lg:hover:bg-slate-800 cursor-pointer transition duration-150'>
          <div className='md:basis-3/12 lg:basis-1/3'>
            <div className='w-1/2 md:w-full h-[100px] relative border-2 border-opacity-60 border-tertiary rounded-md overflow-hidden'>
              <Image src="/images/projects-project3.jpg" alt='project3' className='object-cover' fill/>
            </div>
          </div>
          <div className='md:basis-9/12 lg:basis-2/3 flex flex-col justify-start items-start gap-2'>
            <span className='flex items-center gap-2'>
              <h2 className='text-secondary font-semibold'>Koala Health</h2>
              <MdOutlineArrowOutward color='#e2e8f0'/>
            </span>
            <p className='text-sm text-tertiary'>Web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.</p>
          </div>
        </div>
      </div>
      <Link href="#" className='w-max text-secondary font-semibold hover:underline underline-offset-4 lg:px-4'>View Full Project Archive</Link>
    </section>
  )
};

export default Projects;