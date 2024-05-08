// eslint-disable-next-line
import React from 'react';
import C from "../images/C.png";

function Footer() {
  return (
    <div className='flex items-center relative  w-[1246px] h-[104px] bg-[#F5F5F5] rounded-3xl shadow-2xl border'>
        <img src={C} alt='c' className='w-[25px] left-24 relative'></img>
        <p className='relative left-24 p-2 font-Manrope font-medium text-[15px]'>Talup 2023. All rights reserved</p>
        <p className='relative left-[590px] p-2 font-Manrope font-medium text-[15px]  underline'>Terms & Conditions</p>
        <p className='relative left-[620px] p-2 font-Manrope font-medium text-[15px]  underline'>Privacy Policy</p>
    </div>
  );
}

export default Footer;
