export default function TodoList({ todos }) {
  return (
    <ul>
      {todos.map((todo) => {
        return <li key={todo.index}>{todo.text}</li>;
      })}
    </ul>
  );
}
