// == Import npm
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

// Import Css
import './app.scss';

// Import components
import Header from '../Header';
import Posts from '../Posts';
import Footer from '../Footer';
import CreatePost from '../CreatePost';
import LoginForm from '../LoginForm';
import SignUpForm from '../SignUpForm';
import SinglePost from '../SinglePost';
import UpdatePost from '../UpdatePost';

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
      <Route path="/post/:id">
        <SinglePost />
      </Route>
      <Route path="/update/:id">
        <UpdatePost />
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
