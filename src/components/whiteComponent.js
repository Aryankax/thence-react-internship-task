// eslint-disable-next-line
import React from 'react';
import sparkle from '../images/sparkle.png';

function WhiteComponent() {
  return (
    <div className='flex flex-col items-center bg-white rounded-3xl w-[250px] h-[210px] p-3 absolute top-72 right-[630px] transition-transform hover:scale-110 shadow-lg'>
      <img src={sparkle} alt='sparkle' className='h-14 w-24 relative right-20'></img>
      <p className='font-Manrope text-5xl absolute left-9 top-14'>40%</p>
      <p className='font-Manrope text-lg absolute top-24 p-2'>Achieved reduction in project execution time by optimising team availability</p>
    </div>
  );
}

export default WhiteComponent;
