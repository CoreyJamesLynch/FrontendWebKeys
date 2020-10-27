import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';

import LoadingButton from './LoadingButton';

const SoundCard = ({ sound }) => (
  <Card bg="dark" text="light" border="warning">
    <Card.Body>
      <Card.Title>{sound.letter}</Card.Title>
      <Card.Text>{sound.name}</Card.Text>
      <LoadingButton>Play</LoadingButton>
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
