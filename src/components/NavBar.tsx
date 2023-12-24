import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import logo from '../assets/logo.png';

const NavBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className=" sm:flex py-2 md:px-4 sm:pl-12 lg:pl-14 lg:px-6 sm:justify-between sm:items-center">
      <div className="flex items-center justify-between px-6 sm:p-0">
        <img src={logo} alt="hokc_logo" width={45} height={45} />
        <div className="sm:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
          >
            <svg
              className={`fill-current h-5 w-6 ${
                isMenuOpen ? 'hidden' : 'block'
              }`}
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
            <svg
              className={`fill-current h-5 w-6 ${
                isMenuOpen ? 'block' : 'hidden'
              }`}
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
            </svg>
          </button>
        </div>
      </div>
      <div
        className={` pl-4 sm:flex sm:p-0 ${isMenuOpen ? 'block' : 'hidden'}`}
      >
        <ul className="sm:flex sm:flex-grow gap-14 sm:pr-14 sm:text-base xl:text-lg">
          <li>
            <Link
              to="/"
              className=" block sm:mt-0 sm:ml-2 hover:text-red-500 font-Rubik-Regular"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className=" block sm:mt-0 sm:ml-2 hover:text-red-500 font-Rubik-Regular"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/event"
              className=" block sm:mt-0 sm:ml-2 hover:text-red-500 font-Rubik-Regular"
            >
              Event
            </Link>
          </li>
          <li>
            <Link
              to="/department"
              className=" block sm:mt-0 sm:ml-2 hover:text-red-500 font-Rubik-Regular"
            >
              Department
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
