export const GET_DATA_USER_REQUEST = 'GET_DATA_USER_REQUEST';
export const GET_DATA_USER_SUCCESS = 'GET_DATA_USER_SUCCESS';
export const GET_DATA_USER_FAILURE = 'GET_DATA_USER_FAILURE';
export const GET_DATA_USER_CANCELL = 'GET_DATA_USER_CANCELL';

export const fetchUserData = (id) => {
  return {
    type: GET_DATA_USER_REQUEST,
    id,
  };
};
