import { useRef } from 'react';
import useReduxDispatch from '../hooks/useReduxDispatch';
import { addTodo } from '../redux/actions';

export default function TodoForm() {
  const inputRef = useRef();
  const dispatch = useReduxDispatch();

  const click = () => {
    dispatch(addTodo(inputRef.current.value));
    inputRef.current.value = '';
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} />
      <button onClick={click}>추가</button>
    </div>
  );
}
