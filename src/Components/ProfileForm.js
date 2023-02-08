import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateProfile } from '../store/profile';

const ProfileForm = ()=> {
  const { profile } = useSelector(state => state);
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    bio: '',
  });

  useEffect(() => {
    if (profile) {
      setInputs({
        username: profile.username,
        password: profile.password,
        firstName: profile.firstName,
        lastName: profile.lastName,
        bio: profile.bio,
      });
    }
  }, [profile]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  }
  
  const handleSubmit = () => {
    dispatch(updateProfile(inputs));
  }

  return (
    <div>
      <label>Username</label>
      <input
        name="username"
        defaultValue={inputs.username}
        onChange={handleChange}
      />
      <label>Password</label>
      <input
        type="password"
        name="password"
        defaultValue={inputs.password}
        onChange={handleChange}
      />
      <label>First Name</label>
      <input
        name="firstName"
        defaultValue={inputs.firstName}
        onChange={handleChange}
      />
      <label>Last Name</label>
      <input
        name="lastName"
        defaultValue={inputs.lastName}
        onChange={handleChange}
      />
      <label>Bio</label>
      <input
        name="bio"
        defaultValue={inputs.bio}
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default ProfileForm;
