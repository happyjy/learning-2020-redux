import {
  GET_USERS_FAIL,
  GET_USERS_FULFILLED,
  GET_USERS_PENDING,
  GET_USERS_REJECTED,
  GET_USERS_START,
  GET_USERS_SUCCESS,
} from '../actions';

const initialState = {
  loading: false,
  data: [],
  error: null,
};

export default function user(state = initialState, action) {
  // redux-thunk reducer 처리
  if (action.type === GET_USERS_START) {
    return {
      ...state,
      laoding: true,
      error: null,
    };
  }
  if (action.type === GET_USERS_SUCCESS) {
    return {
      ...state,
      laoding: false,
      data: action.data,
    };
  }
  if (action.type === GET_USERS_FAIL) {
    return {
      ...state,
      laoding: false,
      error: action.error,
    };
  }

  // redux-promise reducer 처리
  if (action.type === GET_USERS_PENDING) {
    return {
      ...state,
      laoding: true,
      error: null,
    };
  }
  if (action.type === GET_USERS_FULFILLED) {
    return {
      ...state,
      laoding: false,
      data: action.payload,
    };
  }
  if (action.type === GET_USERS_REJECTED) {
    return {
      ...state,
      laoding: false,
      error: action.payload,
    };
  }
  return state;
}
