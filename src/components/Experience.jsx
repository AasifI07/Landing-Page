import React from 'react';

const Experience = () => {
  return (
    <div className='container mx-auto py-8 px-4 md:px-8 lg:px-12 flex flex-col md:flex-row justify-between items-center'>
      <div className='text-center md:text-left mb-8 md:mb-0'>
        <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-[#0069d9]'>
          We have <span className='text-4xl md:text-5xl lg:text-6xl'>15 years</span> of <br className='hidden md:block' /> experience
        </h1>
        <p className='text-base md:text-lg lg:text-xl text-slate-500 font-semibold mt-4'>
          Get the highest quality IT services from the best tech provider in <br className='hidden lg:block' /> Chennai
        </p>
      </div>
      <div className='flex flex-col md:flex-row gap-8 md:gap-12'>
        <div className='text-center'>
          <span className="block w-[30px] md:w-[35px] h-[5px] md:h-[6px] bg-[#0069d9] mx-auto" />
          <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-[#0069d9] mt-2'>500 +</h1>
          <p className='text-base md:text-lg lg:text-xl font-base'>Projects</p>
        </div>
        <div className='text-center'>
          <span className="block w-[30px] md:w-[35px] h-[5px] md:h-[6px] bg-[#0069d9] mx-auto" />
          <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-[#0069d9] mt-2'>100 +</h1>
          <p className='text-base md:text-lg lg:text-xl font-base'>Clients</p>
        </div>
        <div className='text-center'>
          <span className="block w-[30px] md:w-[35px] h-[5px] md:h-[6px] bg-[#0069d9] mx-auto" />
          <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-[#0069d9] mt-2'>30 +</h1>
          <p className='text-base md:text-lg lg:text-xl font-base'>Technologies</p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
