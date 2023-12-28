import React from 'react';
import livetv from '../assets/live_tv.png';
import time from '../assets/time.png';
import pink_logo from '../assets/pink_logo.png';

export const Overlay: React.FC = () => {
  return (
    <div className="absolute w-full object-cover h-[510px] -my-80 bg-hero-pattern flex items-center min-[2560px]:bg-repeat-x justify-center bg-no-repeat ">
      <div className="flex flex-col justify-center items-center md:flex-row md:justify-between lg:gap-[200px] landscape:flex-row md:gap-[120px] gap-4 md:pt-0 pt-9">
        <div className="md:pb-8 text-center flex justify-center items-center flex-col">
          <img
            className="md:w-[60px] w-[40px] font-Rubik-Regular h-fit"
            src={time}
            alt="live_tv"
          />
          <h2 className="font-Rubik-Medium font-medium md:text-2xl">
            Service Times
          </h2>
          <p className="w-44 text-xs">
            Join us every Wednesday, Friday and Saturday evenings by 6pm and
            Sabbath mornings by 9am
          </p>
        </div>
        <div className="md:pb-8 p-0 text-center flex justify-center items-center flex-col">
          <img
            className="md:w-[60px] w-[40px] font-Rubik-Regular h-fit"
            src={livetv}
            alt="live_tv"
          />
          <h2 className="font-Rubik-Medium font-medium md:text-2xl">
            Join us virtually
          </h2>
          <p className="w-44 text-xs">Join us by clicking the link below</p>
        </div>
        <div className="pb-8 text-center flex justify-center items-center flex-col">
          <img
            className="md:w-[60px] w-[40px] font-Rubik-Regular h-15"
            src={pink_logo}
            alt="live_tv"
          />
          <h2 className="font-Rubik-Medium font-medium md:text-2xl">
            Join us in person
          </h2>
          <p className="w-44 text-xs">
            Join us for services live at BUTH 600 seater auditorium
          </p>
        </div>
      </div>
    </div>
  );
};
