/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { pastors } from '../constant/pastor';
import { Contact } from '../components/Contact';

const About: React.FC = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>About</title>
          <meta
            name="description"
            content="Discover the vibrant community at Heirs of The Kingdom Chapel (HOKC), a Seventh Day Adventist Church nestled in the heart of Babcock University Teaching Hospital in Ilisan. Join our diverse congregation, drawn from around the world, as we share God's love, emphasize the Sabbath, and promote healthful living. At HOKC, we are a happy family united in faith, committed to nurturing spiritual, physical, and emotional well-being through worship, Bible studies, and community outreach. Come be a part of our journey as heirs of His kingdom!"
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:image"
            content="https://res.cloudinary.com/dstmstsbe/image/upload/v1703759860/Group_90_lqwy6j.png"
          />
          <meta
            name="twitter:title"
            content="Heirs of The Kingdom Chapel - About"
          />
          <meta name="twitter:creator" content="@hokcbabcock" />
          <meta name="twitter:site" content="@hokcbabcock" />
          <meta
            name="twitter:description"
            content="Discover the vibrant community at Heirs of The Kingdom Chapel (HOKC), a Seventh Day Adventist Church nestled in the heart of Babcock University Teaching Hospital in Ilisan. Join our diverse congregation, drawn from around the world, as we share God's love, emphasize the Sabbath, and promote healthful living. At HOKC, we are a happy family united in faith, committed to nurturing spiritual, physical, and emotional well-being through worship, Bible studies, and community outreach. Come be a part of our journey as heirs of His kingdom!"
          />
          <meta
            property="og:title"
            content="Heirs of The Kingdom Chapel - About"
          />
          <meta property="og:type" content="website" />
          <meta
            property="og:url"
            content="https://hokcbabcockuniversity.com/about"
          />
          <meta
            property="og:image"
            content="https://res.cloudinary.com/dstmstsbe/image/upload/v1703759860/Group_90_lqwy6j.png"
          />
        </Helmet>
      </HelmetProvider>
      <div className="w-full h-full">
        <div className="bg-about-background4 lg:bg-about-background bg-no-repeat object-fill min-[1440px]:bg-about-background2 md:bg-about-background3">
          <h1 className="text-3xl font-Rubik-Bold font-bold text-white pt-[135px] text-center md:text-center md:pl-4 md:w-[315px] md:pt-64 lg:pt-[315px]">
            About Heir's of the Kingdom Chapel
          </h1>
        </div>
        <div className="bg-abstract-background1">
          <p className="p-10 font-Rubik-Light font-light md:p-16 lg:text-xl lg:p-20">
            "Heirs of The Kingdom Chapel (HOKC) is a vibrant Seventh Day
            Adventist Church located in the 600-seater hall of Babcock
            University Teaching Hospital in Ilisan. We are part of the Babcock
            University district within the Ogun Conference of the Seventh Day
            Adventist denomination. Our diverse congregation includes members
            from around the world.
            <br /> <br />
            At HOKC, our mission is to share God's love and grace, emphasizing
            the Sabbath and healthful living. Through worship, Bible studies,
            and community outreach, we nurture spiritual, physical, and
            emotional well-being. Our unique location allows us to serve both
            our congregation and the hospital community. We embrace diversity
            and consider ourselves God's happy family, living as heirs of His
            kingdom through faith and commitment."
          </p>
        </div>
        <div className="py-16 flex flex-col justify-end items-end px-6 md:pl-36 lg:pl-72">
          <h2 className="text-black font-Rubik-Bold font-extrabold text-2xl pb-4">
            Our Motto
          </h2>
          <p className="text-end font-Rubik-Bold font-bold text-sm md:text-base">
            We are a family of God. Each family member has a relationship with
            Jesus Christ. Love in the family begins with having a relationship
            with God, the One who instituted the family for a place of
            happiness. We are bound together by love.
          </p>
        </div>
        <div className="bg-big-abstract-background2 md:bg-big-abstract-background">
          <div className="flex flex-col justify-center items-center py-16 md:py-20">
            <div className="flex justify-center pt-10 md:py-16">
              <h1 className="font-Rubik-Bold font-extrabold md:text-4xl text-2xl text-[#BD1424]">
                Our Pastors
              </h1>
            </div>
            <div className="flex-col flex md:flex-row md:flex-wrap justify-center items-center">
              {pastors.map((pastor) => (
                <div
                  key={pastor.id}
                  className="flex flex-col justify-center items-center m-4"
                >
                  <img
                    src={pastor.image}
                    alt={pastor.name}
                    className="h-56 w-fit md:h-fit md:w-32 lg:w-56"
                  />
                  <div className="flex flex-col justify-center items-center">
                    <h1 className="font-Rubik-Bold font-bold text-base">
                      {pastor.name}
                    </h1>
                    <div className="font-Rubik-Bold text-center font-bold text-base">
                      {pastor.position}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Contact bg_image={'white'} />
      </div>
    </>
  );
};

export default About;
