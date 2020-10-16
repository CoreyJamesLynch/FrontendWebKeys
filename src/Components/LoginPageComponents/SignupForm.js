import React from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const SignupForm = () => (
  <Form>
    <Form.Row>
      <Form.Group as={Col} controlId="formGridFirstName">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" placeholder="First Name" />
      </Form.Group>

      <Form.Group as={Col} controlId="formGridLastName">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" placeholder="Last Name" />
      </Form.Group>
    </Form.Row>

    <Form.Row>
      <Form.Group as={Col} controlId="formGridUsername">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" placeholder="Username" />
      </Form.Group>

      <Form.Group as={Col} controlId="formGridReUsername">
        <Form.Label>Re-type Username</Form.Label>
        <Form.Control type="text" placeholder="Re-type Username" />
      </Form.Group>
    </Form.Row>

    <Form.Row>
      <Form.Group as={Col} controlId="formGridEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Email" />
      </Form.Group>

      <Form.Group as={Col} controlId="formGridReEmail">
        <Form.Label>Re-type Email</Form.Label>
        <Form.Control type="email" placeholder="Re-type Email" />
      </Form.Group>
    </Form.Row>

    <Form.Row>
      <Form.Group as={Col} controlId="formGridPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      <Form.Group as={Col} controlId="formGridRePassword">
        <Form.Label>Re-type Password</Form.Label>
        <Form.Control type="password" placeholder="Re-type Password" />
      </Form.Group>
    </Form.Row>

    <Button variant="primary" type="submit">
      Sign Up
    </Button>
  </Form>
);

export default SignupForm;
