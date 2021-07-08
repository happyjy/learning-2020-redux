import axios from 'axios';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UserList from '../components/UserList';
import {
  getUsersFail,
  getUsersPromise,
  getUsersSagaStart,
  getUsersStart,
  getUsersSuccess,
  getUsersThunk,
} from '../redux/modules/users';

export default function UserListContainer() {
  const users = useSelector((state) => state.users.data);
  const dispatch = useDispatch();

  // # useCallback 사용이유?
  //  * 반복적으로 만들어져 UserList에 props로 전달함으로 리소스 낭비
  // const getUsers = useCallback(async () => {
  //   try {
  //     dispatch(getUsersStart());
  //     const res = await axios.get('https://api.github.com/users');
  //     dispatch(getUsersSuccess(res.data));
  //   } catch (e) {
  //     dispatch(getUsersFail());
  //   }
  // }, [dispatch]);

  const getUsers = useCallback(() => {
    // getUsersThunk action creator의 return 값
    //  * function(네트워크 호출 비동기처리해야 할)

    // dispatch(getUsersThunk()); // redux-thunk 방법
    // dispatch(getUsersPromise()); // redux-promise 방법
    dispatch(getUsersSagaStart()); // redux-saga 방법
  }, [dispatch]);

  return <UserList users={users} getUsers={getUsers} />;
}
