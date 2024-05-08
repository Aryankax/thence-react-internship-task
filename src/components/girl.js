// eslint-disable-next-line
import React from 'react';
import girl from '../images/girl.png'

function Girl() {
  return (
    <div className='flex flex-col items-center relative top-12 right-60'>
        <img src={girl} alt="girl" className='rounded-[55px] h-[450px] w-[450px]'></img>
    </div>
  );
}

export default Girl;
