import React from 'react';
import Link from 'next/link';
import { portfolioData } from '@/app/data/portfolioData';
import Navbar from './navbar/Navbar';

const Header = () => {
  const profile = portfolioData['header'];

  return (
    <header className='flex flex-col gap-4 px-6 md:px-4 lg:px-0'>
      <div className='flex flex-col gap-2'>
        <Link href="/" className='font-extrabold text-4xl text-secondary w-max'>{profile.name}</Link>
        <h2 className='font-semibold text-lg text-secondary'>{profile.profession}</h2>
        <p className='text-tertiary md:w-1/2 lg:w-3/4'>{profile.description}</p>
      </div>
      <Navbar/>
      <div className='flex flex-row gap-4'>
        {profile.socialMedia.map((item) => (
          <Link key={item.platform} href={item.url}>{item.icon}</Link>
        ))}
      </div>
    </header>
  )
};

export default Header;