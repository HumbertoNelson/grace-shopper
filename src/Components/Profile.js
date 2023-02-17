import React from 'react';
import { useSelector } from 'react-redux';
import ProfileForm from './ProfileForm';

const Profile = ()=> {
  const { auth } = useSelector(state => state);

  return (
    <div className='profile-container'>
      <h2 className='profile-title'>{auth.firstName}'s Customer Profile</h2>
      {/* <pre>
        {
          JSON.stringify(auth, null, 2)
        }
      </pre> */}
      <div className='profile-data'>
        <p className='profile-data-title'><b>Username:</b></p>
        <p>{auth.username}</p>
        <p className='profile-data-title'><b>First Name:</b></p>
        <p>{auth.firstName}</p>
        <p className='profile-data-title'><b>Last Name:</b></p>
        <p>{auth.lastName}</p>
        <p className='profile-data-title'><b>Bio:</b></p>
        <p>{auth.bio}</p>
      </div>
      <h3>Update Profile:</h3>
      <ProfileForm />
    </div>
  );
};

export default Profile;
