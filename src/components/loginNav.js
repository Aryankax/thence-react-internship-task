import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';

function LoginNav() {
  return (
    <nav className="flex items-center justify-between flex-wrap px-3 py-1 m-3 w-screen">
      <div className="m-2 p-2">
        <img src={logo} className="h-8 transition-transform hover:scale-x-105" alt="logo" />
      </div>
      <div className="m-2 p-2 cursor-pointer rounded-full border">
        <Link to="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-500 hover:text-gray-800 transition-colors"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </Link>
      </div>
    </nav>
  );
}

export default LoginNav;
