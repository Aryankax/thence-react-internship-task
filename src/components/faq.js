// eslint-disable-next-line
import React from 'react';
import Union from '../images/Union.png';
import Plus from '../images/plus.png';
import Minus from '../images/minus.png';

function FAQ() {
  return (
    <div className='border-b-2 Big-FAQ h-[813px] w-[1240px] relative top-[250px] flex items-center justify-center rounded-3xl shadow-lg'>
      <div className='h-[709px] w-[1176px] flex bg-[#E8EEE7] rounded-3xl main-FAQ justify-center items-center'>
        <div className='flex flex-col left-main z-10 justify-center flex-1'>
          <p className='font-CBYG text-[#9E9D9D] text-[32px] pl-5'>What’s on your mind</p>
          <p className='font-Manrope font-semibold text-[60px] text-[#1C1C1C] pl-5'>Ask Questions</p>
          <img src={Union} alt='frames' className='h-[384px] w-[391px] pl-5 mt-2'></img>
        </div>
        <div className='flex flex-col right-main  z-20 w-[581px] h-[531px] items-start p-2 QUESTIONS m-6 justify-center font-Manrope font-semibold text-[16px]'>
          <div className='flex w-[550px] justify-between first-question border-b-2 p-2 transition-transform hover:scale-105'>
          <p>Do you offer freelancers?</p>
          <img src={Plus} alt='plus' className='align-self: flex-end'></img>
          </div>
          <div className='flex w-[550px] justify-between second-question mt-3 p-2 border-b-2  transition-transform hover:scale-105'>
          <p>What’s the guarantee that I will be satisfied
          with the hired talent?</p>
          <img src={Plus} alt='plus' className='align-self: flex-end'></img>
          </div>
          <div className='long-faq'>
          <div className='flex w-[550px] justify-between third-question mt-3 p-2 transition-transform hover:scale-105'>
          <p>Can I hire multiple talents at once?</p>
          <img src={Minus} alt='plus' className='align-self: flex-end'></img>
          </div>
          <p className='font-Manrope text-[12px] text-[#617275] border-b-2 p-2'>If unhappy with a project, communicate with the freelancer, allow for revisions, and refer to the agreement. Escalate to platform support if needed, considering mediation. Review policies, seek collaborative solutions for resolution.</p>
          </div>
          <div className='flex w-[550px] justify-between fourth-question mt-3 p-2 border-b-2 transition-transform hover:scale-105'>
          <p>Why should I not go to an agency directly?</p>
          <img src={Plus} alt='plus' className='align-self: flex-end'></img>
          </div>
          <div className='flex w-[550px] justify-between fifth-question mt-3 p-2 border-b-2 transition-transform hover:scale-105'>
          <p>Who can help me pick a right skillset
          and duration for me?</p>
          <img src={Plus} alt='plus' className='align-self: flex-end'></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQ;

{/* <div className='border flex flex-nowrap Main-FAQ-Box h-[1376px] w-[749px]'> */}
        {/* <div className='border flex flex-col Left-side-main'> */}
          {/* <p className='border font-CBYG text-[#9E9D9D] text-[32px]'>What’s on your mind</p>
          <p className='font-Manrope font-semibold text-[60px] text-[#1C1C1C] border'>Ask Questions</p>
          <img src={Union} alt='frames' className=' border h-[514px] w-[491px]'></img> */}
        {/* </div> */}
        {/* <div className=' border flex flex-col Right-side-main'>

        </div> */}
      {/* </div> */}
