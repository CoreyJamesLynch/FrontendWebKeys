import React from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

// Button should turn from green "primary" to red "danger" depending on if playlist is active.
const PlaylistCard = ({ playlist }) => (
  <Container>
    <Card bg="dark" text="light" border="warning">
      <Card.Body>
        <Card.Title>{playlist.name}</Card.Title>
        <Button variant="success">Load</Button>
      </Card.Body>
    </Card>
  </Container>
);

export default PlaylistCard;

PlaylistCard.propTypes = {
  playlist: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }),
};
