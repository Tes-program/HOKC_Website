import React from 'react';
import { Slider } from '../components/Slider';
import { Overlay } from '../components/Overlay';
import { Button } from '../components/Button';
import { Quote } from '../components/Quote';
import { Mission } from '../components/Mission';
import { Donation } from '../components/Donation';
import { Bible } from '../components/Bible';

const Home: React.FC = () => {
  return (
    <>
      <Slider />
      <Overlay />
      <Button />
      <Quote />
      <Mission />
      <Donation />
      <Bible />
    </>
  );
};

export default Home;
