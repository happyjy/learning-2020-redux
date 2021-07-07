import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UserList from '../components/UserList';
import { getUsersFail, getUsersStart, getUsersSuccess } from '../redux/actions';

export default function UserListContainer() {
  const users = useSelector((state) => state.users.data);

  const dispatch = useDispatch();

  const start = useCallback(() => {
    dispatch(getUsersStart());
  }, [dispatch]);
  const success = useCallback(
    (data) => {
      debugger;
      dispatch(getUsersSuccess(data));
    },
    [dispatch],
  );
  debugger;
  const fail = useCallback(() => {
    dispatch(getUsersFail());
  }, [dispatch]);

  return <UserList users={users} start={start} success={success} fail={fail} />;
}
