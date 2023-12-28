import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

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
      <div>
        <h2>About Page</h2>
        {/* Add content specific to the About page */}
      </div>
    </>
  );
};

export default About;
