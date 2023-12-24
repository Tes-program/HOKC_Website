import React from 'react';
import { Slider } from '../components/Slider';
import { Overlay } from '../components/Overlay';
import { Button } from '../components/Button';

const Home: React.FC = () => {
  return (
    <>
      <Slider />
      <Overlay />
      <Button />
    </>
  );
};

export default Home;
