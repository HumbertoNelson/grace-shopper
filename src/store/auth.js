import axios from 'axios';

const auth = (state = {}, action)=> {
  if (action.type === 'SET_AUTH' || action.type === 'UPDATE_PROFILE') {
    return action.auth;
  }
  return state;
};

export const logout = () => {
  window.localStorage.removeItem('token');
  return { type: 'SET_AUTH', auth: {} };
};

export const loginWithToken = () => {
  return async(dispatch)=> {
    const token = window.localStorage.getItem('token');
    if(token){
      const response = await axios.get('/api/auth', {
        headers: {
          authorization: token
        }
      });
      dispatch({ type: 'SET_AUTH', auth: response.data });
    }
  };
};

export const attemptLogin = (credentials) => {
  return async(dispatch)=> {
    const response = await axios.post('/api/auth', credentials);
    window.localStorage.setItem('token', response.data);
    dispatch(loginWithToken());
  };
};

export const registerUser = (credentials) => {
  return async (dispatch) => {
    const response = await axios.post('/api/auth/user', credentials);
    window.localStorage.setItem('token', response.data);
    dispatch(loginWithToken());
  };
}

export const updateProfile = (profile) => {
  return async(dispatch) => {
    const token = window.localStorage.getItem('token');
    const response = await axios.put('/api/auth/user', profile, {
      headers: {
        authorization: token
      }
    });
    dispatch({ type: 'UPDATE_PROFILE', auth: response.data });
  };
};

export default auth;
