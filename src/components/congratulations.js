// eslint-disable-next-line
import React, {useEffect, useState} from 'react';
import logo from '../images/logo.png';
import Tick from '../images/Tick.png';
import { useNavigate  } from 'react-router-dom';

function Congratulations() {
    const navigate = useNavigate();

    //Timer 

    const [seconds, setSeconds] = useState(5);

    useEffect(()=>{
        const timer = setTimeout(()=>{
            //Decrease the remaining seconds by 1 every second
            setSeconds(prevSeconds => prevSeconds - 1);
        }, 1000);

        return () => clearTimeout(timer);
    }, [seconds]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate('/');
    }, 5000);

    return () => {
      clearTimeout(timeout);
    };
  }, [navigate]);
  return (
    <div className='flex flex-col justify-center items-center gap-20'>
        <nav className="flex items-center justify-between flex-wrap w-screen">
      <div className="m-2 p-2">
        <img src={logo} className="h-8 transition-transform hover:scale-x-95" alt="logo" />
      </div>
    </nav>
    <div className='flex flex-col w-[718px] h-[357px] justify-center items-center'>
        <img src={Tick} alt='tick' className='w-[50px] h-[50px]'></img>
        <p className='font-CBYG text-[30px] text-[#2DA950]'>Success Submiited</p>
        <p className='font-Manrope font-semibold text-[50px] '>Congratulations</p>
        <p className='font-Manrope font-medium text-[25px] text-[#727272] text-center p-10'>Your request has been successfully submitted to us. We will validate your information and reach out to your shortly with updates</p>
    </div>
    <div>
        <p className='font-Manrope text-[17px]'>Redirecting you to Homepage in <span className='font-bold'>{seconds} Seconds</span></p>
    </div>
    </div>
  );
}

export default Congratulations;
