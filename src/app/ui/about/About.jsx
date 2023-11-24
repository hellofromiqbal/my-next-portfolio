import React from 'react';

const About = () => {
  return (
    <section id='#about' className='flex flex-col gap-4 px-4'>
      <div className='lg:hidden'>
        <h2 className='text-secondary text-base font-semibold'>ABOUT</h2>
      </div>
      <div className='flex flex-col gap-4'>
          <p className='text-tertiary'>In 2020, I worked as a <span className='text-secondary font-medium'>customer service</span> in a private banking company in Indonesia. Worked to summarize tons of data using various <span className='text-secondary font-medium'>non-integrated web applications</span> requiring me to perform the same tasks on each. This experience sparked my <span className='text-secondary font-medium'>curiosity</span> about programming and <span className='text-secondary font-medium'>web development</span>.</p>
          <p className='text-tertiary'>I began to <span className='text-secondary font-medium'>learn</span> web programming in my free time, alongside my daytime job and realized it was <span className='text-secondary font-medium'>complex</span> but this <span className='text-secondary font-medium'>challenge</span> only fueled my <span className='text-secondary font-medium'>excitement</span> for the field. A year later, I resigned to <span className='text-secondary font-medium'>fully dedicate</span> myself on web programming, finding <span className='text-secondary font-medium'>joy</span> in coding and continually expanding my knowledge. Off the computer, I enjoy video games, time with friends, and playing futsal.</p>
      </div>
    </section>
  )
};

export default About;