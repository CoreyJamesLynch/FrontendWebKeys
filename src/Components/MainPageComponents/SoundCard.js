import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

// Button should turn from green "primary" to red "danger" depending on if sound is active.
const SoundCard = ({ sound }) => (
  <Card bg="dark" text="light" border="warning">
    <Card.Body>
      <Card.Title>{sound.letter}</Card.Title>
      <Card.Text>{sound.name}</Card.Text>
      <Button variant="success">Play</Button>
    </Card.Body>
  </Card>
);

export default SoundCard;

SoundCard.propTypes = {
  sound: PropTypes.shape({
    letter: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }),
};
