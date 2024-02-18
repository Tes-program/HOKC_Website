/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Slider } from '../components/Slider';
import { Overlay } from '../components/Overlay';
import { Button } from '../components/Button';
import { Quote } from '../components/Quote';
import { Mission } from '../components/Mission';
import { Donation } from '../components/Donation';
import { Bible } from '../components/Bible';
import { Contact } from '../components/Contact';
// import { InformationModal } from '../components/InformationModal';
// import { useState } from 'react';

// @hokcbabcock
const Home: React.FC = () => {
  // const [isModalOpen, setModalOpen] = useState(true);
  // const handleCloseModal = () => {
  //   setModalOpen(false);
  // };
  // const handleOpenModal = () => {
  //   setModalOpen(true);
  // };

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Heirs of the Kingdom Chapel</title>
          <meta
            name="description"
            content="Experience the extraordinary at Heirs of The Kingdom Chapel (HOKC) - a vibrant Seventh Day Adventist Church located within the heart of Babcock University Teaching Hospital in Ilisan. Join our global family united in faith, where we celebrate diversity, share God's love, and embrace healthful living. Discover a unique blend of spiritual richness and community impact. Welcome to HOKC, where we live as heirs of His kingdom, weaving joy and purpose into every moment."
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:image"
            content="https://res.cloudinary.com/dstmstsbe/image/upload/c_thumb,w_200,g_face/v1703759860/Group_90_lqwy6j.png"
          />
          <meta name="twitter:title" content="Heirs of The Kingdom Chapel" />
          <meta name="twitter:creator" content="@hokcbabcock" />
          <meta name="twitter:site" content="@hokcbabcock" />
          <meta
            name="twitter:description"
            content="Experience the extraordinary at Heirs of The Kingdom Chapel (HOKC) - a vibrant Seventh Day Adventist Church located within the heart of Babcock University Teaching Hospital in Ilisan. Join our global family united in faith, where we celebrate diversity, share God's love, and embrace healthful living. Discover a unique blend of spiritual richness and community impact. Welcome to HOKC, where we live as heirs of His kingdom, weaving joy and purpose into every moment."
          />
          <meta property="og:title" content="Heirs of The Kingdom Chapel" />
          <meta property="og:type" content="website" />
          <meta
            property="og:url"
            content="https://hokcbabcockuniversity.com/"
          />
          <meta
            property="og:image"
            content="https://res.cloudinary.com/dstmstsbe/image/upload/c_thumb,w_200,g_face/v1703759860/Group_90_lqwy6j.png"
          />
        </Helmet>
      </HelmetProvider>
      <Slider />
      <Overlay />
      <Button />
      <Quote />
      <Mission />
      <Donation />
      <Bible />
      <Contact bg_image={'abstract-background'} />
      {/* <InformationModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title="Attendance System Update"
        message="Our QR Scanner is undergoing maintenance. Apologies for any inconvenience. Please check back later. Thank you!"
      /> */}
    </>
  );
};

export default Home;
