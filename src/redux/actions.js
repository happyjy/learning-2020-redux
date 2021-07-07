import axios from 'axios';

// # todos reducer action, action creator
export const ADD_TODO = 'ADD_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';

// {type: ADD_TODO, text: '할일'}
export function addTodo(text) {
  return {
    type: ADD_TODO,
    text,
  };
}

// {type: COMPLETE_TODO, index: 3}
export function complete_todo(index) {
  return {
    type: COMPLETE_TODO,
    index,
  };
}

// # filter reducer action, action creator
export const SHOW_ALL = 'SHOW_ALL';
export const SHOW_COMPLETE = 'SHOW_COMPLETE';

export function showAll() {
  return { type: SHOW_ALL };
}

export function showComplete() {
  return { type: SHOW_COMPLETE };
}

// # users
// 깃헙 API 호출을 시작하는 것을 의미
export const GET_USERS_START = 'GET_USERS_START';
// 깃헙 API 호출에 대한 응답이 성공적으로 돌아온 경우
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS';
// 깃헙 API 호출에 대한 응답이 실패한 경우
export const GET_USERS_FAIL = 'GET_USERS_FAIL';

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

// 비동기 처리 with thunk
export function getUsersThunk() {
  return async (dispatch) => {
    debugger;
    try {
      dispatch(getUsersStart());
      const res = await axios.get('https://api.github.com/users');
      dispatch(getUsersSuccess(res.data));
    } catch (e) {
      dispatch(getUsersFail());
    }
  };
}

// 비동기 처리 with redux-promise
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
const GET_USERS = 'GET_USERS';

export const GET_USERS_PENDING = 'GET_USERS_PENDING';
export const GET_USERS_FULFILLED = 'GET_USERS_FULFILLED';
export const GET_USERS_REJECTED = 'GET_USERS_REJECTED';

export function getUsersPromise() {
  return {
    type: GET_USERS,
    payload: async () => {
      const res = await axios.get('https://api.github.com/users');
      return res.data;
    },
  };
}
