import React from 'react';
import Container from 'react-bootstrap/Container';

import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

class LoginPage extends React.Component {
  render() {
    return (
      <Container>
        <Container>
          <LoginForm />
        </Container>

        <div>
          <h4>Or</h4>
        </div>

        <Container>
          <SignupForm />
        </Container>
      </Container>
    );
  }
}

export default LoginPage;
