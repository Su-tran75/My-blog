import React, { useEffect, useState } from 'react';
import { useParams, useHistory, Redirect } from 'react-router-dom';
import axios from 'axios';

import './singlePost.scss';

const SinglePost = ({ isLogged }) => {
  const { id } = useParams();
  const [post, setPost] = useState([]);
  const history = useHistory();
  const [isDelete, setIsDelete] = useState(false);

  const deletePost = () => {
    axios.delete(`http://localhost:8081/api/deleteFromId/${id}`)
      .then((response) => {
        console.log(response);
        // window.location = '/';
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsDelete(true);
        history.push('/');
      });
  };

  useEffect(() => {
    axios.get(`http://localhost:8081/api/getFromId/${id}`)
      .then((response) => {
        setPost({ title: response.data[0].post_title, text: response.data[0].post_text });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <article className="singlePost">
      <h2 className="post-title">{post.title}</h2>
      <p className="post-excerpt">{post.text}</p>
      {/* // TODO rectifier isLogged */}
      {!isLogged && (
      <div className="button">
        <button
          type="button"
          className="button-edit"
          onClick={() => {
            history.push(`/update/${id}`);
          }}
        >
          Edit
        </button>

        <button
          type="button"
          className="button-delete"
          onClick={deletePost}
        >
          Delete
        </button>
      </div>
      )}
    </article>
  );
};

export default SinglePost;
