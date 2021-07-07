import { useEffect } from 'react';

export default function UserList({ users, getUsers }) {
  // useEffect의 decendency list로 정한 것들은 레퍼런스가 바뀌지 않게 useCallback 을 사용해서 생성한다.
  useEffect(() => {
    getUsers();
  }, [getUsers]);

  if (users.length === 0) {
    return <p>현재 유저 정보 없음</p>;
  }
  return (
    <ul>
      {users?.map((user) => (
        <li key={user.id}>{user.login}</li>
      ))}
    </ul>
  );
}
