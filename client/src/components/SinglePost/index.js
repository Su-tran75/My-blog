import React, { useEffect, useState, useContext } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios';
import { FirebaseContext } from '../Firebase';

import './singlePost.scss';

const SinglePost = () => {
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

  const firebase = useContext(FirebaseContext);
  const [userSession, setUserSession] = useState(null);
  useEffect(() => {
    const listener = firebase.auth.onAuthStateChanged((user) => {
      user ? setUserSession(user) : props.history.push(`/post/${id}`)
    });
    return () => {
      listener();
    };
  }, []);

  const displayBtn = userSession ? (
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
  ) : (
    ''
  );

  return (
    <article className="singlePost">
      <h2 className="post-title">{post.title}</h2>
      <p className="post-excerpt">{post.text}</p>
      { displayBtn }
    </article>
  );
};

export default SinglePost;
