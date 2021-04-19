import React, { useState, useEffect, useContext } from 'react';
import { FirebaseContext } from '../Firebase';

import './logout.scss';
import App from '../App';

const Logout = (props) => {
  const firebase = useContext(FirebaseContext);

  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (checked) {
      console.log('Disconnected');
      firebase.logoutUser()
        .then(() => {
          props.props.history.push('/welcome');
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [checked, firebase]);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <div className="logOut">
      <label className="switch">
        <input
          type="checkbox"
          checked={checked}
          onChange={handleChange}
        />
        <span className="slider round" />
      </label>
    </div>
  );
};

export default Logout;
