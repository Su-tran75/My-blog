import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';
import KeyboardReturnIcon from '@material-ui/icons/KeyboardReturn';

import './updatePost.scss';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    border: '2px solid black',
    padding: '20px',
    width: '75%',
    height: '90%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

    '& > *': {
      margin: theme.spacing(1),
      width: '90%',
    },
  },
}));

const UpdatePost = (props) => {
  const classes = useStyles();

  const { id } = useParams();
  // const [post, setPost] = useState([]);
  const [newTitle, setNewTitle] = useState('');
  const [newText, setNewText] = useState('');

  // const loadPost = () => {
  //   axios.get(`http://localhost:8081/api/getFromId/${id}`)
  //     .then((response) => {
  //       console.log(response.data);
  //       setPost({ title: response.data[0].post_title, text: response.data[0].post_text });
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  const updatePost = () => {
    if (newTitle !== '' && newText !== '') {
      axios.put(`http://localhost:8081/api/updateFromId/${id}`, { newTitle, newText })
        .then(() => {
          props.history.push(`/post/${id}`);
          // alert('post updated');
        })
        .catch((err) => {
          console.log(err);
        });
    }
    // else {
    //   alert('Title and text are required');
    // }
  };

  useEffect(() => {
    // loadPost();
    updatePost();
  }, []);

  return (
    <div className="updatePost">
      <h1>Update post</h1>
      <form className={classes.root} noValidate autoComplete="off">
        <Link to={`/post/${id}`}>
          <KeyboardReturnIcon />
        </Link>
        <TextField
          id="outlined-basic"
          label="Title required"
          variant="outlined"
          type="text"
          required
          // defaultValue={post.title}
          onChange={(e) => {
            console.log(e.target.value);
            setNewTitle(e.target.value);
          }}
        />

        <TextField
          id="outlined-multiline-static"
          label="Text required"
          multiline
          rows={10}
          variant="outlined"
          required
          onChange={(e) => {
            console.log(e.target.value);
            setNewText(e.target.value);
          }}
        />
        <button
          className="submitButton"
          type="button"
          onClick={updatePost}
        >Submit
        </button>
      </form>
    </div>
  );
};

UpdatePost.propTypes = {
  history: PropTypes.func.isRequired,
  push: PropTypes.func.isRequired,
};

export default UpdatePost;

// Need to empty the inputs after submit
