// # users
import axios from 'axios';
/* 
  # 방법1. 비동기 처리 (without any middleware)
  # 방법2. 비동기 처리 with redux-thunk middleware
  # 방법3. 비동기 처리 with redux-promise middleware
*/

// # 방법1. [액션타입]비동기 처리 (without any middleware)
// 깃헙 API 호출을 시작하는 것을 의미
export const GET_USERS_START = 'learning-2021-redux/filter/GET_USERS_START';
// 깃헙 API 호출에 대한 응답이 성공적으로 돌아온 경우
export const GET_USERS_SUCCESS = 'learning-2021-redux/filter/GET_USERS_SUCCESS';
// 깃헙 API 호출에 대한 응답이 실패한 경우
export const GET_USERS_FAIL = 'learning-2021-redux/filter/GET_USERS_FAIL';

// # 방법3. [액션타입]비동기 처리 with redux-promise middleware
const GET_USERS = 'learning-2021-redux/filter/GET_USERS';
export const GET_USERS_PENDING = 'learning-2021-redux/filter/GET_USERS_PENDING';
export const GET_USERS_FULFILLED =
  'learning-2021-redux/filter/GET_USERS_FULFILLED';
export const GET_USERS_REJECTED =
  'learning-2021-redux/filter/GET_USERS_REJECTED';

// # 방법1, 방법2 [액션생성함수]
export function getUsersStart() {
  return {
    type: GET_USERS_START,
  };
}
export function getUsersSuccess(data) {
  return {
    type: GET_USERS_SUCCESS,
    data,
  };
}
export function getUsersFail(error) {
  return {
    type: GET_USERS_FAIL,
    error,
  };
}

// # 방법2. [액션생성함수]비동기 처리 with redux-thunk middleware
export function getUsersThunk() {
  return async (dispatch) => {
    try {
      dispatch(getUsersStart());
      const res = await axios.get('https://api.github.com/users');
      dispatch(getUsersSuccess(res.data));
    } catch (e) {
      dispatch(getUsersFail());
    }
  };
}

// # 방법3. [액션생성함수]비동기 처리 with redux-promise middleware
/*
 * 어떤 타입으로 dispatch 할때 payload에 promise 함수가 있으면
 * 어떤 타입에 _PENDING, _FULFILLED, _REJECTED를 붙인 action type이 생성된다.
 * payload에 promise 함수가 성공, 실패 여부에 따라서
 * 성공하면 type_FULFILLED 액션으로 payload 프로퍼티로 설정한 promise함수의 return 값을 reducer로 넘긴다.
 * 실패하면 type_REJECTED 액션으로 payload 프로퍼티로 promise의 error값을 reducer로 넘긴다.
 */

/*
 * * 함수에 async를 아래와 같이 붙이면 promise객체를 반환
 *  * async () => {}
 */

/*
 * * 정리
 *  * thunk는 비동기 시작, 성공, 실패에 대한 actions creator를 직접 입력해야 하지만
 *  * promise-redux는 비동기 작업을 처리하는 타입에 post fix를 붙여 (_PENDING, _FULLFILLED, _REJECTED)
 *  * promise의 비동기 처리 성공, 실패에 따라서 자동으로 dispatch 해준다.
 */
export function getUsersPromise() {
  return {
    type: GET_USERS,
    payload: async () => {
      const res = await axios.get('https://api.github.com/users');
      return res.data;
    },
  };
}

const initialState = {
  loading: false,
  data: [],
  error: null,
};

export default function reducer(state = initialState, action) {
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
