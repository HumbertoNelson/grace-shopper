import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import ProfileForm from './ProfileForm';

const Profile = ()=> {
  const { profile } = useSelector(state => state);

  return (
    <>
      <div>
        <h1>Profile</h1>
        <pre>
          {
            JSON.stringify(profile, null, 2)
          }
        </pre>
      </div>
      <ProfileForm />
    </>
  );
};

export default Profile;
