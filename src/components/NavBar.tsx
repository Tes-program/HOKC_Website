import React from 'react';
import { Link } from 'react-router-dom';

const NavBar: React.FC = () => {
  return (
    <nav className=' flex justify-around py-4 px-2  '>
          <img src="hokc.svg" alt="logo" width={45} height={45} />
          <ul className=' flex space-x-4 lg:space-x-8'>
              <li>
                  <Link to="/" className="hover:text-red-500">Home</Link>
              </li>
              <li>
                  <Link to="/about" className="hover:text-red-500">About</Link>
              </li>
              <li>
                  <Link to="/event" className="hover:text-red-500">Event</Link>
              </li>
          <li>
              <Link to="/department" className="hover:text-red-500">Department</Link>
          </li>
      </ul>
      <div>
              <img src="" alt="profile" />
              <span><p>Profile</p></span>
          </div>
    </nav>
  );
};



export default NavBar;