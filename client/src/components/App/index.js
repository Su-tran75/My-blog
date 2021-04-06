// == Import npm
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

// Import Css
import './app.scss';

// Import components
import Header from 'src/components/Header';
import Posts from 'src/components/Posts';
import Footer from 'src/components/Footer';
import CreatePost from 'src/components/CreatePost';
import LoginForm from 'src/components/LoginForm';
import SignUpForm from 'src/components/SignUpForm';

// == Import

// == Composant
const App = ({ isLogged }) => (
  <div className="app">
    <Header />
    <Switch>
      <Route exact path="/">
        <Posts />
      </Route>
      <Route path="/createPost">
        <CreatePost />
      </Route>
      <Route path="/signUpForm">
        <SignUpForm />
      </Route>
      <Route path="/loginForm">
        <LoginForm />
      </Route>
      <Route>
        <div className="page404">
          Sorry... page not found !
        </div>
      </Route>
    </Switch>
    <Footer />
  </div>
);

App.propTypes = {
  isLogged: PropTypes.bool.isRequired,
};

// == Export
export default App;
