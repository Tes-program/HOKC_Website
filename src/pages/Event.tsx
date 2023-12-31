import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
const Event: React.FC = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Event</title>
          <meta
            name="description"
            content="Join the vibrant community at Heirs of The Kingdom Chapel (HOKC) for transformative events that celebrate faith, fellowship, and community. From inspiring worship services to engaging community outreach, our events are designed to nurture spiritual growth and connection. Discover a calendar filled with opportunities to gather, learn, and serve. Be part of something extraordinary at HOKC - where each event is a unique chapter in our journey as heirs of His kingdom."
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:image"
            content="https://res.cloudinary.com/dstmstsbe/image/upload/c_thumb,w_200,g_face/v1703759860/Group_90_lqwy6j.png"
          />
          <meta
            name="twitter:title"
            content="Heirs of The Kingdom Chapel - Event"
          />
          <meta name="twitter:creator" content="@hokcbabcock" />
          <meta name="twitter:site" content="@hokcbabcock" />
          <meta
            name="twitter:description"
            content="Join the vibrant community at Heirs of The Kingdom Chapel (HOKC) for transformative events that celebrate faith, fellowship, and community. From inspiring worship services to engaging community outreach, our events are designed to nurture spiritual growth and connection. Discover a calendar filled with opportunities to gather, learn, and serve. Be part of something extraordinary at HOKC - where each event is a unique chapter in our journey as heirs of His kingdom."
          />
          <meta
            property="og:title"
            content="Heirs of The Kingdom Chapel - Event"
          />
          <meta property="og:type" content="website" />
          <meta
            property="og:url"
            content="https://hokcbabcockuniversity.com/event"
          />
          <meta
            property="og:image"
            content="https://res.cloudinary.com/dstmstsbe/image/upload/c_thumb,w_200,g_face/v1703759860/Group_90_lqwy6j.png"
          />
        </Helmet>
      </HelmetProvider>
      <div className="w-full h-full">
        <div className="flex justify-center p-20 md:p-28">
          <h1 className="text-xl md:text-3xl lg:text-4xl font-Rubik-Black font-extrabold">
            No Upcoming Event...
          </h1>
        </div>
      </div>
    </>
  );
};

export default Event;
