import axios from 'axios';

const profile = (state = {}, action)=> {
  if (action.type === 'SET_PROFILE') {
    return action.profile;
  }
  return state;
};

export const fetchProfile = () => {
  return async(dispatch) => {
    const token = window.localStorage.getItem('token');
    const response = await axios.get('/api/profile', {
      headers: {
        authorization: token
      }
    });
    dispatch({ type: 'SET_PROFILE', profile: response.data });
  };
};

export default profile;
