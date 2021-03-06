import React, { useState } from 'react';
import Axios from 'axios';
import PropTypes from 'prop-types';

import './createPost.scss';

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

const CreatePost = (props) => {
  const classes = useStyles();

  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  const submitPost = () => {
    Axios.post('http://localhost:8081/api/create', { title, text });
    props.history.push('/');
  };

  return (
    <div className="createPost">
      <h1>Create a new post</h1>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          id="outlined-basic"
          label="Title"
          variant="outlined"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <TextField
          id="outlined-multiline-static"
          label="Text"
          multiline
          rows={10}
          variant="outlined"
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <button className="submitButton" type="button" onClick={submitPost}>Submit</button>
      </form>
    </div>
  );
};

CreatePost.propTypes = {
  history: PropTypes.object.isRequired,
  push: PropTypes.func,
};

export default CreatePost;

// Need to empty the inputs after submit
