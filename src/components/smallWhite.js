// eslint-disable-next-line
import React from 'react';
import rocket from '../images/rocket.png';

function SmallWhite() {
  return (
    <div className='flex flex-col items-center bg-white rounded- w-[250px] h-[88px] p-3 absolute top-[550px] rounded-full right-[630px] transition-transform hover:scale-105 shadow-lg'>
      <img src={rocket} alt='sparkle' className='h-14 w-16 relative right-20'></img>
      <p className='font-Manrope font-bold text-[24px] absolute left-20'>10 DAYS</p>
      <p className='font-Manrope font-medium text-[16px] absolute top-12 left-20 text-[#828282]'>Staff Deployment</p>
    </div>
  );
}

export default SmallWhite;
