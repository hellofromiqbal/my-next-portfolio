import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MdOutlineArrowOutward } from "react-icons/md";

const ProjectCard = ({ item }) => {
  return (
    <div className='flex flex-col-reverse md:flex-row gap-4 lg:p-4 rounded-md bg-transparent lg:hover:bg-slate-800 cursor-pointer transition duration-150'>
      <div className='md:basis-3/12 lg:basis-1/3'>
        <div className='w-1/2 md:w-full h-[100px] relative border-2 border-opacity-60 border-tertiary rounded-md overflow-hidden'>
          <Image src={item.imgUrl} alt={item.title} className='object-cover' fill/>
        </div>
      </div>
      <div className='md:basis-9/12 lg:basis-2/3 flex flex-col justify-start items-start gap-2'>
        <Link href={item.url} className='flex items-center gap-2'>
          <h2 className='text-secondary font-semibold'>{item.title}</h2>
          <MdOutlineArrowOutward color='#e2e8f0'/>
        </Link>
        <p className='text-sm text-tertiary'>{item.description}</p>
        {item.technologies &&
          <div className='flex flex-wrap gap-2 mt-2'>
            {item.technologies.map((technology) => (
              <span key={technology} className='px-2 py-1 bg-slate-700 text-xs text-secondary text-opacity-80 font-medium rounded-full'>{technology}</span>  
            ))}
          </div>
        }
      </div>
    </div>
  )
};

export default ProjectCard;