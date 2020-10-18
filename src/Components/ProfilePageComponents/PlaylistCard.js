import React from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { propTypes } from 'react-bootstrap/esm/Image';

// Button should turn from green "primary" to red "danger" depending on if playlist is active.
const PlaylistCard = (props) => (
  <Container>
    <Card>
      <Card.Body>
        <Card.Title>{props.playlist.name}</Card.Title>
        <Button variant="primary">Load</Button>
      </Card.Body>
    </Card>
  </Container>
);

export default PlaylistCard;

PlaylistCard.propTypes = {
  playlist: propTypes.shape({
    name: PropTypes.string.isRequired,
  }),
};
