// eslint-disable-next-line
import React from 'react';
import Nav from './nav';
import BelowNavDiv from './belowNavDiv';
import Girl from './girl';
import WhiteComponent from './whiteComponent';
import SmallWhite from './smallWhite';
import Dollar from './dollar';
import Text from './text';
import frames from '../images/frames.png'
import FAQ from './faq';
import Footer from './footer';

function Home() {
  return (
    <div className='flex flex-col justify-top items-center'>
          <div className='m-1'>
          <Nav/>
          </div>
          <div className='relative main-content'>
          <BelowNavDiv/>
          <Girl/>
          <WhiteComponent/>
          <SmallWhite/>
          <Dollar/>
          <Text/>
          <img src={frames} alt='frames' className=' absolute top-[520px] left-[470px] w-12'></img>
          <button className='bg-black  w-[215px] h-[70px] absolute top-[650px] left-[440px] rounded-full text-white font-Manrope z-10 transition-transform hover:scale-105'>Explore More -></button>
          </div>
          <div className=' relative FAQ-Section'>
            <FAQ/>
          </div>
          <footer className='relative top-72'>
            <Footer/>
          </footer>
    </div>
  );
}

export default Home;
