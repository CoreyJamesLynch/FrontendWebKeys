import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';

// Button should turn from green "primary" to red "danger" depending on if sound is active.
const SoundCard = (props) => (
  <Container>
    <Card>
      <Card.Body>
        <Card.Title>{props.sound.key}</Card.Title>
        <Card.Text>{props.sound.name}</Card.Text>
        <Button variant="primary">Play</Button>
      </Card.Body>
    </Card>
  </Container>
);

export default SoundCard;
