import React from 'react';
import { Link } from 'react-router-dom';
import { mobileNavData } from '../constant/mobileNav';

export const MobileNav: React.FC = () => {
  return (
    <nav className="flex items-center text-center justify-around py-2">
      <div className="flex">
        <ul className="grid grid-cols-4 gap-16 max-[375px]:gap-14 max-[320px]:gap-12">
          {mobileNavData.map((item, index) => (
            <li
              key={index}
              className="items-center flex flex-col justify-center"
            >
              <Link to={item.path}>
                <div className="flex items-center justify-center">
                  <img src={item.icon} alt={item.title} />
                </div>
                <span className="text-center flex items-center justify-center">
                  {item.title}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};