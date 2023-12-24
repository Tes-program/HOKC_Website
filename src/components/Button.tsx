import React from 'react';
import arrowForward from '../assets/arrow_forward.svg';

export const Button: React.FC = () => {
  const url: string = 'https://www.youtube.com/@hokcheirsofthekingdomchape7469';
  return (
    <div className="flex justify-center items-center pt-28 pb-16 md:py-10 lg:py-16">
      <div className="bg-[#BD1424] border rounded-xl text-center justify-center flex w-[340px] py-2">
        <a
          href={url}
          className="text-white text-sm text-center flex font-Rubik-Medium font-bold "
        >
          Click here to join our youtube channel
          <span className="inline-flex items-baseline justify-self-center">
            {/* // svg for arrow forward icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
              strokeWidth="3"
              stroke="currentColor"
              className="w-5 h-4 pt-2 font-extrabold"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
              />
            </svg> */}
            <img
              src={arrowForward}
              width={15}
              className="self-center mx-1"
              height={5}
              alt=""
            />
          </span>
        </a>
      </div>
    </div>
  );
};
