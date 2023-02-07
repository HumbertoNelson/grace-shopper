import React from 'react';
import { useSelector } from 'react-redux';

const Profile = ()=> {
  const { profile } = useSelector(state => state);

  return (
    <div>
      <h1>Profile</h1>
      <pre>
        {
          JSON.stringify(profile, null, 2)
        }
      </pre>
    </div>
  );
};

export default Profile;
