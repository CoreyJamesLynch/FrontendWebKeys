import React from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

import PlaylistCard from './PlaylistCard';

const loggedInUser = 'http://localhost:3000/users/1/';
const playlists = { id: 1, name: 'testPlaylist', user_id: 1 };
const user = { id: 1, first_name: 'Corey', last_name: 'Lynch', username: 'bearinawolfpack' };

class ProfilePage extends React.Component {
  render() {
    const playlistCards = playlists.map((playlist) => (
      <PlaylistCard key={playlist.id} playlist={playlist} />
    ));

    return (
      <>
        <Form>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" placeholder={user.first_name} />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" placeholder={user.last_name} />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridUsername">
              <Form.Label>Current Username</Form.Label>
              <Form.Control type="text" placeholder={user.username} />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridReUsername">
              <Form.Label>New Username</Form.Label>
              <Form.Control type="text" placeholder="" />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Current Email</Form.Label>
              <Form.Control type="email" placeholder={user.email} />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridReEmail">
              <Form.Label>New Email</Form.Label>
              <Form.Control type="email" placeholder="" />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Current Password</Form.Label>
              <Form.Control type="password" placeholder="" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridRePassword">
              <Form.Label>New Password</Form.Label>
              <Form.Control type="password" placeholder="" />
            </Form.Group>
          </Form.Row>

          <Button variant="primary" type="submit">
            Save
          </Button>
        </Form>
        <Container>{playlistCards}</Container>
      </>
    );
  }
}

export default ProfilePage;
