import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import ProfileForm from './ProfileForm';

const Profile = ()=> {
  const { auth } = useSelector(state => state);

  return (
    <>
      <div className='profile'>
        <h1>Profile</h1>
        <pre>
          {
            JSON.stringify(auth, null, 2)
          }
        </pre>
      </div>
      <ProfileForm />
    </>
  );
};

export default Profile;
