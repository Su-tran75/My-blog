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
import Welcome from '../Welcome';

// == Import

// == Composant
const App = () => (
  <div className="app">
    <Header />

    <Switch>
      <Route path="/welcome" component={Welcome} />
      <Route path="/createPost" component={CreatePost} />
      <Route path="/signUpForm" component={SignUpForm} />
      <Route path="/loginForm" component={LoginForm} />
      <Route path="/post/:id" component={SinglePost} />
      <Route path="/update/:id" component={UpdatePost} />
      <Route exact path="/" component={Posts} />
      <Route>
        <div className="page404">
          Sorry... page not found !
        </div>
      </Route>
    </Switch>

    <Footer />
  </div>
);

// == Export
export default App;
