import React from 'react';

const Discusss = () => {
  return (
    <div className='bg-gradient-to-r from-green-500 to-yellow-300 flex flex-col sm:flex-row justify-evenly items-center py-12 px-4 sm:px-6 lg:px-8'>
      <div className='text-center sm:text-left'>
        <h1 className='text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold'>
          Ready To Get Started? Let's Discuss <br/> Your Project!
        </h1>
      </div>
      <div className='py-5'>
        <button className='bg-white rounded-lg text-green-500 border-2 border-cyan-400 px-4 sm:px-5 py-2 sm:py-3 text-base sm:text-lg'>
          CALL US NOW
        </button>
      </div>
    </div>
  );
};

export default Discusss;
