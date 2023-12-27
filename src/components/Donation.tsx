import React from 'react';

export const Donation: React.FC = () => {
  return (
    <div className="bg-abstract-background w-full h-full bg-no-repeat">
      <div className="flex flex-col justify-center md:flex-row-reverse md:gap-20 lg:gap-60">
        <div className="flex flex-col justify-center items-center px-12 pt-12 pb-6">
          <h1 className="font-Rubik-Bold font-extrabold text-2xl pb-6">
            Given yet?
          </h1>
          <p className="font-Rubik-Light font-light text-center pb-4">
            Malachi 3:10 NKJV <br />
            “Bring all the tithes into the storehouse, That there may be food in
            My house, “And try Me now in this,” Says the LORD of hosts, “If I
            will not open for you the windows of heaven And pour out for you
            such blessing That there will not be room enough to receive it”.
          </p>
          <button className="border bg-[#BD1424] rounded-xl font-Rubik-Regular text-white p-2">
            Give Now
          </button>
        </div>
        <div className="flex flex-col justify-center items-center pb-10 md:pb-0 md:pt-1 lg:pt-10 md:px-20 lg:px-28">
          <img
            src="https://asset.brandfetch.io/idPXJmyni4/idSLulezX4.png"
            className="w-[200px] h-fit pb-4"
            alt="access_bank"
          />
          <p className="font-semibold text-2xl">0094476450</p>
          <p className="text-center font-semibold text-[16px]">
            Access <br /> Diamond Bank
          </p>
        </div>
      </div>
    </div>
  );
};
