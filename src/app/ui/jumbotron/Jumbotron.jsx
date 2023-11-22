import React from 'react';

const Jumbotron = () => {
  return (
    <section className='bg-slate-900 h-screen md:h-[50vh] lg:h-screen flex flex-col-reverse md:flex-row gap-0 md:gap-0'>
      <div className='basis-1/2 flex justify-center md:items-center px-8 md:px-10'>
        <div className='md:w-4/5 flex flex-col gap-2 md:gap-4 mt-12 md:mt-0'>
          <h3 className='font-semibold text-sm md:text-base text-white'>Hi, I'm Iqbal</h3>
          <h1 className='font-bold text-2xl md:text-4xl text-white'>I'm a Full Stack Developer.</h1>
          <p className='text-slate-400 text-sm md:text-base'>I am a full-stack web developer. I can provide clean code and pixel perfect design.</p>
          <button className='bg-blue-500 hover:bg-blue-400 w-max mt-4 px-4 py-2 text-center text-white font-medium rounded-md transition duration-200'>My Project</button>
        </div>
      </div>
      <div className="basis-1/2 flex justify-center items-end md:items-center">
        <div className="rounded-full w-[250px] md:w-[280px] lg:w-[320px] h-[250px] md:h-[280px] lg:h-[320px] bg-slate-300"></div>
      </div>
    </section>
  )
};

export default Jumbotron;