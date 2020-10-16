import React from 'react';
import Container from 'react-bootstrap/Container';

import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

const LoginPage = () => (
  <Container>
    {LoginForm}

    <h4>Or</h4>

    {SignupForm}
  </Container>
);

export default LoginPage;
