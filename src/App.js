import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import NavigationBar from './Components/Navbar';
import MainPage from './Components/MainPageComponents/MainPage';
import LoginPage from './Components/LoginPageComponents/LoginPage';
import ProfilePage from './Components/ProfilePageComponents/ProfilePage';

function App() {
  return (
    <>
      <NavigationBar />
      <Router>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/LoginPage" component={LoginPage} />
          <Route exact path="/ProfilePage" component={ProfilePage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
