/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import missionStatement from '../assets/mission_statement.png';

export const Mission: React.FC = () => {
  return (
    <div className="flex-col gap-6 md:gap-2 flex justify-center md:flex-row py-8">
      <div className="flex flex-col md:justify-start justify-center md:items-start items-center px-6 md:pl-6 md:pr-12">
        <h1 className="text-center md:text-start flex justify-center font-Rubik-Bold font-extrabold md:text-xl text-[22px] pb-4 md:pb-2 lg:text-4xl">
          "We embark on a joyful mission to uplift and renew a community."
        </h1>
        <p className="text-center pb-6 md:text-start lg:text-base md:text-[12px] font-Rubik-Regular text-[18px]">
          "We are nurturing soldiers for God, each step in our journey a dance
          to the divine rhythm of life. With hearts filled with love, we embrace
          our purpose, spreading kindness and light to every corner of the
          world. <br /> <br />
          Together, we create a harmonious symphony of faith, hope, and
          compassion, moving to the sacred music of our shared mission."
        </p>
        <button className="border bg-[#BD1424] rounded-xl font-Rubik-Regular text-white p-2">
          The Work Force
        </button>
      </div>
      <div className="">
        <img
          src={missionStatement}
          className="md:w-[1500px] lg:w-[1200px] h-fit"
          alt="mission statement"
        />
      </div>
    </div>
  );
};
