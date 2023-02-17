import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateProfile } from '../store/auth';

const ProfileForm = () => {
  const { auth } = useSelector(state => state);
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    bio: '',
  });
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (auth) {
      setInputs({
        username: auth.username,
        password: auth.password,
        firstName: auth.firstName,
        lastName: auth.lastName,
        bio: auth.bio,
      });
    }
  }, [auth]);

  useEffect(() => {
    if (auth.message) {
      setMessage(auth.message);
    }
  }, [auth]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
    setMessage('');
  }
  
  const handleSubmit = () => {
    dispatch(updateProfile(inputs));
  }

  return (
    <div className="profile-form">
      <label><b>Username</b></label>
      <input
        name="username"
        defaultValue={inputs.username}
        onChange={handleChange}
      />
      <label><b>Password</b></label>
      <input
        type="password"
        name="password"
        defaultValue={inputs.password}
        onChange={handleChange}
      />
      <label><b>First Name</b></label>
      <input
        name="firstName"
        defaultValue={inputs.firstName}
        onChange={handleChange}
      />
      <label><b>Last Name</b></label>
      <input
        name="lastName"
        defaultValue={inputs.lastName}
        onChange={handleChange}
      />
      <label><b>Bio</b></label>
      <input
        name="bio"
        defaultValue={inputs.bio}
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>
        Submit
      </button>
      <div className='profile-update-message'>
        {message}
      </div>
    </div>
  );
};

export default ProfileForm;
