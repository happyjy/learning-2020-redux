import { useSelector } from 'react-redux';
import TodoList from '../components/TodoList';

function TodoFormContainer() {
  const todos = useSelector((state) => state.todos);

  return <TodoList todos={todos} />;
}
export default TodoFormContainer;
