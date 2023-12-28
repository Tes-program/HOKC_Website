import React from 'react';
import { Department } from '../components/departmentProps';
import { Helmet, HelmetProvider } from 'react-helmet-async';
const DepartmentPage: React.FC = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Department</title>
          <meta
            name="description"
            content="Discover the diverse ministries within Heirs of The Kingdom Chapel (HOKC), inspired by Ephesians 4:11-12. Our apostles, prophets, evangelists, pastors, and teachers collectively strive for the perfecting of the saints, the work of the ministry, and the edifying of the body of Christ. Each department at HOKC plays a unique role in weaving a tapestry of spiritual growth and community impact. Explore the richness of our ministries as we passionately live out our calling as heirs of His kingdom."
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:image"
            content="https://res.cloudinary.com/dstmstsbe/image/upload/v1703759860/Group_90_lqwy6j.png"
          />
          <meta
            name="twitter:title"
            content="Heirs of The Kingdom Chapel - Department"
          />
          <meta name="twitter:creator" content="@hokcbabcock" />
          <meta name="twitter:site" content="@hokcbabcock" />
          <meta
            name="twitter:description"
            content="Discover the diverse ministries within Heirs of The Kingdom Chapel (HOKC), inspired by Ephesians 4:11-12. Our apostles, prophets, evangelists, pastors, and teachers collectively strive for the perfecting of the saints, the work of the ministry, and the edifying of the body of Christ. Each department at HOKC plays a unique role in weaving a tapestry of spiritual growth and community impact. Explore the richness of our ministries as we passionately live out our calling as heirs of His kingdom."
          />
          <meta
            property="og:title"
            content="Heirs of The Kingdom Chapel - Department"
          />
          <meta property="og:type" content="website" />
          <meta
            property="og:url"
            content="https://hokcbabcockuniversity.com/department"
          />
          <meta
            property="og:image"
            content="https://res.cloudinary.com/dstmstsbe/image/upload/v1703759860/Group_90_lqwy6j.png"
          />
        </Helmet>
      </HelmetProvider>
      <section className="w-full h-full">
        <div className=" text-white bg-gradient-to-r from-red-500 to-red-950 h-[80vh] flex items-center ">
          <div className="p-4">
            <h2 className=" text-xl font-Rubik-Bold font-extrabold pb-6">
              THE HOKC MINISTERS
            </h2>
            <p className="mr-8 lg:mr-24 pb-4 font-Rubik-Regular font-normal ">
              And he gave some, apostles; and some, prophets; and some,
              evangelists; and some, pastors and teachers; For the perfecting of
              the saints, for the work of the ministry, for the edifying of the
              body of Christ:
            </p>
            <p className="font-Rubik-Light font-extralight">
              Ephesians 4:11-12 (KJV)
            </p>
          </div>
          <img
            src="https://res.cloudinary.com/dstmstsbe/image/upload/v1703449541/departmentlogo_dlrdnp.png"
            alt="department logo"
            width={350}
            height={450}
            className="hidden md:block "
          />
        </div>
        <Department />
      </section>
    </>
  );
};

export default DepartmentPage;
