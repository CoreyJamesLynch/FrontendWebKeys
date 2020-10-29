import React from 'react';
import PropTypes from 'prop-types';
import { Card, Button } from 'react-bootstrap';

class SoundCard extends React.Component {
  state = {
    active: false,
  };

  clickHandler = (id) => {
    console.log(id);
  };

  render() {
    const { sound } = this.props;
    return (
      <Card bg="dark" text="light" border="warning">
        <Card.Body>
          <Card.Title>{sound.letter}</Card.Title>
          <Card.Text>{sound.name}</Card.Text>
          <Button type="button" onClick={() => this.clickHandler(sound.id)}>
            Play
          </Button>
        </Card.Body>
      </Card>
    );
  }
}

export default SoundCard;

SoundCard.propTypes = {
  sound: PropTypes.shape({
    letter: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }),
};
