import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

const NavigationBar = () => (
  <Navbar bg="dark" expand="lg">
    <Navbar.Brand href="/">Web Keys</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse className="justify-content-end">
      <Navbar.Text>
        <a href="/LoginPage">Login/Signup</a>
      </Navbar.Text>
    </Navbar.Collapse>
  </Navbar>
);

export default NavigationBar;
