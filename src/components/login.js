import React, { useState } from 'react';
import LoginNav from './loginNav';
import { Link } from 'react-router-dom';

function Login() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  const handleNameChange = (e) => {
    const newName = e.target.value;
    setName(newName);
    // Check if form is valid
    setIsFormValid(isValidEmail && newName !== '');
  };

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    // Check if email is valid
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newEmail);
    setIsValidEmail(isValid);
    // Check if form is valid
    setIsFormValid(isValid && name !== '');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform login logic here
    console.log('Name:', name);
    console.log('Email:', email);
  };

  return (
    <div className="flex flex-col justify-center items-center gap-32">
      <nav>
        <LoginNav />
      </nav>
      <form onSubmit={handleSubmit} className="w-[588px] h-[538.22px] bg-white flex flex-col items-center justify-center">
        <div className='flex flex-col justify-center items-center '>
          <p className='font-CBYG text-[#2DA950] text-[36px] mb-2'>Registration Form</p>
          <p className='font-Manrope font-semibold text-[36px]  m-1'>Start your success Journey here!</p>
        </div>
        <div className="mb-6">
          <input
            className="shadow appearance-none border  w-full py-2 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline bg-[#EFEFEF] rounded-full"
            id="name"
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <div className="mb-4">
          <input
            className={`${
              isValidEmail ? 'border-green-500' : 'border-red-500'
            } shadow appearance-none border rounded-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-[#EFEFEF]`}
            id="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={handleEmailChange}
          />
          {!isValidEmail && <p className="text-red-500 text-xs italic ml-2 mt-4">Please enter a valid email.</p>}
        </div>
        <div className="flex items-center justify-between">
          {isFormValid ? (
            <Link to='/congratulations' className="bg-[#d1d1d1] hover:bg-black text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline w-[220px] mt-3">
              Submit
            </Link>
          ) : (
            <button className="bg-gray-500 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline w-[220px] mt-3" disabled>
              Submit
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default Login;
