import React from 'react';

import Post from './Post';

import './posts.scss';

const Posts = () => (
  <main className="posts">
    <h1 className="title">What's new here ?!</h1>
    <div className="posts-container">
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  </main>
);

export default Posts;
