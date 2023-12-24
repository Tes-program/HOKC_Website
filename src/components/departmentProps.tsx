import React from 'react';
import { departments } from '../constant/department';

export const Department: React.FC = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10">
      {departments.map((department) => (
        <div
          key={department.id}
          className="flex flex-col items-center justify-center"
        >
          <img
            className="w-20 h-20"
            src={department.image}
            alt={department.alt}
          />
          <p className="text-sm font-Rubik-Regular">{department.department}</p>
        </div>
      ))}
    </div>
  );
};
