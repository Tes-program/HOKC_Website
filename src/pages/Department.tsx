import React from 'react';
import { Department } from '../components/departmentProps';
const DepartmentPage: React.FC = () => {
  return (
    <section className="w-full h-full">
      <div className=" text-white bg-gradient-to-r from-red-500 to-red-950 h-[80vh] flex items-center ">
        <div className="p-4">
          <h2 className="text-lg font-semibold pb-6">THE HOKC MINISTERS</h2>
          <p className="mr-8 pb-4">
            And he gave some, apostles; and some, prophets; and some,
            evangelists; and some, pastors and teachers; For the perfecting of
            the saints, for the work of the ministry, for the edifying of the
            body of Christ:
          </p>
          <p className=" font-light">Ephesians 4:11-12 (KJV)</p>
        </div>
        <img src="" alt="" />
      </div>
      <Department />
    </section>
  );
};

export default DepartmentPage;
