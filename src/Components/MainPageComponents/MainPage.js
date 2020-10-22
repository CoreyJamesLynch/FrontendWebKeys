import React from 'react';

import Sounds from './TestSounds';
import SoundCard from './SoundCard';
import Container from 'react-bootstrap/esm/Container';

const MainPage = () => {
  const soundCards = Sounds.map((sound) => <SoundCard key={sound.id} sound={sound} />);
  return <Container>{soundCards}</Container>;
};
export default MainPage;
