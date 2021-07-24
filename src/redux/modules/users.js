import axios from 'axios';
import { push } from 'connected-react-router';
import { call, delay, put, takeEvery } from 'redux-saga/effects';

/* # INDEX
  # 방법1. 비동기 처리 (without any middleware)
  # 방법2. 비동기 처리 with redux-thunk middleware
  # 방법3. 비동기 처리 with redux-promise middleware
  # 방법4. redux-saga
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

// # [액션생성함수] 방법1(미들웨어사용x), 방법2(redux-thunk), 방법4(redux-saga)
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

const initialState = {
  loading: false,
  data: [],
  error: null,
};

export default function reducer(state = initialState, action) {
  // redux-thunk reducer 처리
  // redux-saga reducer 처리
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

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(4);
      resolve();
    }, ms);
  });
}
// # 방법2. [액션생성함수]비동기 처리 with redux-thunk middleware
export function getUsersThunk() {
  return async (dispatch, getState, { history }) => {
    try {
      dispatch(getUsersStart());
      // sleep
      await sleep(2000);
      const res = await axios.get('https://api.github.com/users');
      dispatch(getUsersSuccess(res.data));
      history.push('/');
    } catch (e) {
      dispatch(getUsersFail());
    }
  };
}

// # 방법3. [액션생성함수]비동기 처리 with redux-promise middleware
/* # rudux-promise 설명
 * 어떤 타입으로 dispatch 할때 payload에 promise 함수가 있으면
 * 어떤 타입에 _PENDING, _FULFILLED, _REJECTED를 붙인 action type이 생성된다.
 * payload에 promise 함수가 성공, 실패 여부에 따라서
 * 성공하면 type_FULFILLED 액션으로 payload 프로퍼티로 설정한 promise함수의 return 값을 reducer로 넘긴다.
 * 실패하면 type_REJECTED 액션으로 payload 프로퍼티로 promise의 error값을 reducer로 넘긴다.
 */

/* # 함수에 async를 아래와 같이 붙이면 promise객체를 반환
 *  * async () => {}
 */

/* # 정리
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

// # 방법4. redux-saga
const GET_USERS_SAGA_START = 'GET_USERS_SAGA_START';

export function getUsersSagaStart() {
  return {
    type: GET_USERS_SAGA_START,
  };
}
function* getUsersSaga(action) {
  try {
    /* # put (redux-saga effect - )
     *  * store에 dispatch 하도록 스케쥴링한다.
     *  * doc: https://redux-saga.js.org/docs/api/#putchannel-action
     */
    yield put(getUsersStart());
    // sleep 2초
    yield delay(2000);
    // 비동기로 동작
    /* # call (redux-saga effect - 비동기 동작)
     * 비동기 동작
     * doc: https://redux-saga.js.org/docs/api/#callfn-args
     * call의 첫번째 변수가 promise를 반환하는 객체인경우 설명
     * redux-saga는 generator가 Promise객체가 settled상태까지 대기하고
     * 이후 pormise resolved에 따라서(resolved, rejected) generator는 다시 재개 된다.
     * 원문 : If fn is a normal function and returns a Promise, the middleware will suspend the Generator until the Promise is settled. After the promise is resolved the Generator is resumed with the resolved value, or if the Promise is rejected an error is thrown inside the Generator.
     */
    const res = yield call(axios.get, 'https://api.github.com/users');
    yield put(getUsersSuccess(res.data));
    yield put(push('/'));
  } catch (e) {
    yield put(getUsersFail());
  }
}

/*
 *
 * * saga 함수를 saga 미들웨어에 등록 단계
 * * users.js안에서 생성된 saga함수를 한군데 모아서 sgaa 미들웨어에 등록
 * *
 */
export function* usersSaga() {
  yield takeEvery(GET_USERS_SAGA_START, getUsersSaga);
}
