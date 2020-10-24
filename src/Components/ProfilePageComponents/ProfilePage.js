import React from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';

import PlaylistCard from './PlaylistCard';

const playlists = [
  { id: 1, name: 'testPlaylist', user_id: 1 },
  { id: 2, name: 'testPlaylist', user_id: 1 },
  { id: 3, name: 'testPlaylist', user_id: 1 },
  { id: 4, name: 'testPlaylist', user_id: 1 },
];

const loggedInUser = 'http://localhost:3000/users/1/';
const user = [{ id: 1, first_name: 'Corey', last_name: 'Lynch', username: 'bearinawolfpack' }];

class ProfilePage extends React.Component {
  state = {
    name: '',
    firstName: '',
    lastName: '',
    currentUsername: '',
    newUsername: '',
    currentEmail: '',
    newEmail: '',
    currentPassword: '',
    newPassword: '',
  };

  changeHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const playlistCards = playlists.map((playlist) => (
      <PlaylistCard key={playlist.id} playlist={playlist} />
    ));

    return (
      <>
        <Container>
          <Form>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridFirstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder={user.first_name}
                  name="firstName"
                  value={this.state.firstName}
                  onChange={this.changeHandler}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridLastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder={user.last_name}
                  name="lastName"
                  value={this.state.lastName}
                  onChange={this.changeHandler}
                />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridUsername">
                <Form.Label>Current Username</Form.Label>
                <Form.Control
                  type="text"
                  placeholder={user.username}
                  name="currentUsername"
                  value={this.state.currentUsername}
                  onChange={this.changeHandler}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridReUsername">
                <Form.Label>New Username</Form.Label>
                <Form.Control
                  type="text"
                  placeholder=""
                  name="newUsername"
                  value={this.state.newUsername}
                  onChange={this.changeHandler}
                />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Current Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder={user.email}
                  name="currentEmail"
                  value={this.state.currentEmail}
                  onChange={this.changeHandler}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridReEmail">
                <Form.Label>New Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder=""
                  name="newEmail"
                  value={this.state.newEmail}
                  onChange={this.changeHandler}
                />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Current Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder=""
                  name="currentPassword"
                  value={this.state.currentPassword}
                  onChange={this.changeHandler}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridRePassword">
                <Form.Label>New Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder=""
                  name="newPassword"
                  value={this.state.newPassword}
                  onChange={this.changeHandler}
                />
              </Form.Group>
            </Form.Row>
            <Button variant="primary" type="submit">
              Save
            </Button>
          </Form>
        </Container>

        <Container>
          <Row xs={2} md={3} lg={4}>
            {playlistCards}
          </Row>
        </Container>
      </>
    );
  }
}

export default ProfilePage;
