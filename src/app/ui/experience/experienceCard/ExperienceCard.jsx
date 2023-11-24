import React from 'react';
import Link from 'next/link';
import { MdOutlineArrowOutward } from "react-icons/md";

const ExperienceCard = ({ item }) => {
  return (
    <div className='flex flex-col md:flex-row gap-2 md:gap-4 lg:p-4 rounded-md bg-transparent lg:hover:bg-slate-800 cursor-pointer transition duration-150'>
      <div className='md:basis-3/12 lg:basis-1/3'>
        <p className='text-tertiary text-xs font-semibold text-opacity-60 pt-1'>{item.period}</p>
      </div>
      <div className='md:basis-9/12 lg:basis-2/3 flex flex-col justify-start items-start gap-2'>
        <Link href={item.url} className='flex items-center gap-2'>
          <h2 className='text-secondary font-semibold'>{`${item.position} - ${item.company}`}</h2>
          <MdOutlineArrowOutward color='#e2e8f0'/>
        </Link>
        <p className='text-sm text-tertiary'>{item.description}</p>
        <div className='flex flex-wrap gap-2 mt-2'>
          {item.technologies.map((technology) => (
            <span key={technology} className='px-2 py-1 bg-slate-700 text-xs text-secondary text-opacity-80 font-medium rounded-full'>{technology}</span>  
          ))}
        </div>
      </div>
    </div>
  )
};

export default ExperienceCard;