import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import axios from 'axios';

import Post from './Post';
import Loader from '../Loader';

import './posts.scss';

const Posts = () => {
  const [postsList, setPostsList] = useState([]);

  // useEffect(() => {
  //   Axios.get('http://localhost:8081/api/get').then((response) => {
  //     setPostsList(response.data);
  //   });
  // }, []);

  const [loadingPosts, setLoadingPosts] = useState(true);

  const loadPosts = () => {
    // axios.get('http://localhost:8081/api/get').then((data) => {
    //   console.log(data);
    // });
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
      <h1 className="title">What's new here ?!</h1>
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
    }).isRequired,
  ).isRequired,
};

export default Posts;
