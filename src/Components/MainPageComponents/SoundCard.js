import React from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { propTypes } from 'react-bootstrap/esm/Image';

// Button should turn from green "primary" to red "danger" depending on if sound is active.
const SoundCard = (props) => (
  <Container>
    <Card>
      <Card.Body>
        <Card.Title>{props.sound.letter}</Card.Title>
        <Card.Text>{props.sound.name}</Card.Text>
        <Button variant="primary">Play</Button>
      </Card.Body>
    </Card>
  </Container>
);

export default SoundCard;

// SoundCard.propTypes = {
//   sound: propTypes.shape({
//     letter: PropTypes.string.isRequired,
//     name: PropTypes.string.isRequired,
//   }),
// };
