import React from 'react';
import { departments } from '../constant/department';

export const Department: React.FC = () => {
  return (
    <div className="grid grid-cols-1 py-10 gap-4 mt-10">
      {departments.map((department) => (
        <div
          key={department.id}
          className={`flex items-center justify-evenly pb-8 ${
            department.id % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
          }`}
        >
          <img
            className=" h-32 sm:w-35 sm:h-40 md:w-64 md:h-52"
            src={department.image}
            alt={department.alt}
          />
          <p className="text-sm md:text-lg font-Rubik-Regular font-bold">
            {department.department}
          </p>
        </div>
      ))}
    </div>
  );
};
