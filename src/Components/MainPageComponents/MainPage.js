import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Sounds from './TestSounds';
import SoundCard from './SoundCard';

const MainPage = () => {
  const soundCards = Sounds.map((sound) => <SoundCard key={sound.id} sound={sound} />);
  return (
    <Container>
      <Row xs={2} md={3} lg={4}>
        {soundCards}
      </Row>
    </Container>
  );
};
export default MainPage;
