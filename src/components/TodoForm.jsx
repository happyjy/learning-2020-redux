import { useRef } from 'react';

export default function TodoForm({ addTodo }) {
  const inputRef = useRef();

  const click = function (e) {
    addTodo(inputRef.current.value);
    inputRef.current.value = '';
    inputRef.current.focus();
    // e.preventDefault();
    e.stopPropagation(); //  <------ Here is the magic
  };

  return (
    <div>
      <input ref={inputRef} />
      <button onClick={click}>추가</button>
    </div>
  );
}
