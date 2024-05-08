// eslint-disable-next-line
import React from 'react';

function Dollar() {
  return (
    <div className='flex flex-col items-center bg-[#002E18] rounded-3xl w-[280px] h-[240px] p-3 absolute top-[550px] left-[90px] transition-transform hover:scale-110 z-20 shadow-lg'>
      <p className='font-Manrope text-5xl absolute left-5 top-10 font-bold text-white'>$0.5</p>
      <p className='font-Manrope text-xl absolute left-32 top-16 font-bold text-[#A6A3A0]'>MILLION</p>
      <p className='font-Manrope text-lg absolute top-20 p-8 text-[#CCCCCC]'>Reduced client expenses by saving on hiring and employee costs.</p>
    </div>
  );
}

export default Dollar;
