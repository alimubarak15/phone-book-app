import {
  GET_DATA_USER_CANCELL,
  GET_DATA_USER_FAILURE,
  GET_DATA_USER_REQUEST,
  GET_DATA_USER_SUCCESS,
} from '../actions';

const initialState = {
  data: [],
  isLoading: false,
  error: null,
  status: '',
};
export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA_USER_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_DATA_USER_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
      };
    case GET_DATA_USER_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.err,
      };
    case GET_DATA_USER_CANCELL:
      return {
        ...state,
        isLoading: false,
        status: 'cancelled',
      };

    default:
      return state;
  }
};
