import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Post = ({post_title, post_text}) => {
  const [isLogged, setIsLogged] = useState(false);

  return (
    <Link to="#" className="post">
      <article>
        <h2 className="post-title">{post_title}</h2>
        <p className="post-excerpt">{post_text.length > 380 ? post_text.substring(0,380) + '...' : post_text}</p>
        {/* // TODO rectifier isLogged */}
        {!isLogged && (
          <div className="button">
            <button type="button" className="button-edit">
              Edit
            </button>

            <button type="button" className="button-delete">
              Delete
            </button>
          </div>
        )}
      </article>
    </Link>
  );
};

Post.propTypes = {
  post_title: PropTypes.string.isRequired,
  post_text: PropTypes.string.isRequired,
};

export default Post;
