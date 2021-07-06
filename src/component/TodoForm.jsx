import { useRef } from 'react';

export default function TodoForm({ addTodo }) {
  const inputRef = useRef();

  const click = () => {
    addTodo(inputRef.current.value);
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
