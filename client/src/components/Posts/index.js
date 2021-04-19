import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import axios from 'axios';
import { FirebaseContext } from '../Firebase';

import Post from './Post';
import Loader from '../Loader';
import Logout from '../Logout';

import './posts.scss';

const Posts = (props) => {
  const [postsList, setPostsList] = useState([]);
  const [loadingPosts, setLoadingPosts] = useState(true);

  const [userSession, setUserSession] = useState(null);
  const firebase = useContext(FirebaseContext);

  useEffect(() => {
    const listener = firebase.auth.onAuthStateChanged((user) => {
      user ? setUserSession(user) : props.history.push('/')
    });
    return () => {
      listener();
    };
  }, []);

  const displayBtnLogout = userSession ? (<Logout props={props} />) : (
    ''
  );

  const displayCreatePost = userSession ? ( 
    <Link className="header-link " to="/createPost">Create post</Link>
  ) : (
    ''
  );

  const loadPosts = () => {
    axios.get('http://localhost:8081/api/get')
      .then((response) => {
        setPostsList(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoadingPosts(false);
      });
  };

  useEffect(() => {
    loadPosts();
  }, []);

  return (
    <main className="posts">
      <div className="top">
        <h1 className="title">What's new here ?!</h1>
        {displayCreatePost}
        {displayBtnLogout}
      </div>
      <div className="posts-container">
        {loadingPosts && <Loader />}
        {!loadingPosts && (
          postsList.map((post) => (
            <Post key={post.id} {...post} />
          )))}
      </div>
    </main>
  );
};

Posts.propTypes = {
  postsList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default Posts;
