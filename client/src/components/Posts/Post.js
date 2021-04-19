import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

const Post = ({ id, post_title, post_text }) => {
  const history = useHistory();

  return (
    <div
      className="post"
      onClick={() => {
        history.push(`post/${id}`);
      }}
    >
      <article className="article">
        <h2 className="post-title">{post_title}</h2>
        <p className="post-excerpt">{post_text.length > 280 ? post_text.substring(0,280) + '...' : post_text}</p>
      </article>
    </div>
  );
};

Post.propTypes = {
  id: PropTypes.number.isRequired,
  post_title: PropTypes.string.isRequired,
  post_text: PropTypes.string.isRequired,
};

export default Post;
