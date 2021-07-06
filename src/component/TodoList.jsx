import useReduxState from '../hooks/useReduxState';

export default function Todolist() {
  const state = useReduxState();

  return (
    <ul>
      {state.todos.map((todo) => {
        return <li key={todo.index}>{todo.text}</li>;
      })}
    </ul>
  );
}
