import React from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class SignupForm extends React.Component {
  state = {
    firstName: '',
    lastName: '',
    username: '',
    reUsername: '',
    email: '',
    reEmail: '',
    password: '',
    rePassword: '',
  };

  changeHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <Form>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridFirstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="First Name"
              name="firstName"
              value={this.state.firstName}
              onChange={this.changeHandler}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridLastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Last Name"
              name="lastName"
              value={this.state.lastName}
              onChange={this.changeHandler}
            />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Username"
              name="username"
              value={this.state.username}
              onChange={this.changeHandler}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridReUsername">
            <Form.Label>Re-type Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Re-type Username"
              name="reUsername"
              value={this.state.reUsername}
              onChange={this.changeHandler}
            />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Email"
              name="email"
              value={this.state.email}
              onChange={this.changeHandler}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridReEmail">
            <Form.Label>Re-type Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Re-type Email"
              name="reEmail"
              value={this.state.reEmail}
              onChange={this.changeHandler}
            />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              value={this.state.password}
              onChange={this.changeHandler}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridRePassword">
            <Form.Label>Re-type Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Re-type Password"
              name="rePassword"
              value={this.state.rePassword}
              onChange={this.changeHandler}
            />
          </Form.Group>
        </Form.Row>

        <Button variant="primary" type="submit">
          Sign Up
        </Button>
      </Form>
    );
  }
}

export default SignupForm;
