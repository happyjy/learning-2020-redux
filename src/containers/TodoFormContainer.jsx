import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import TodoForm from '../component/TodoForm';
import { addTodo } from '../redux/actions';

export default function TodoFormContainer() {
  const dispatch = useDispatch();

  const addTodoFn = useCallback(
    (text) => {
      dispatch(addTodo(text));
    },
    [dispatch],
  );

  return <TodoForm addTodo={addTodoFn} />;
}
