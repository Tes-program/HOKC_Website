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
            className=" h-32 sm:w-35 sm:h-40 md:w-96 md:h-64"
            src={department.image}
            alt={department.alt}
          />
          <p className="text-sm md:text-2xl font-Rubik-Bold font-bold">
            {department.department}
          </p>
        </div>
      ))}
    </div>
  );
};
