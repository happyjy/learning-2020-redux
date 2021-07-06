import { connect } from 'react-redux';
import useReduxState from '../hooks/useReduxState';
import { addTodo } from '../redux/actions';

function TodoList({ todos }) {
  return (
    <ul>
      {todos.map((todo) => {
        return <li key={todo.index}>{todo.text}</li>;
      })}
    </ul>
  );
}

// state를 받아서 props 객체로 만든다.
const mapStateToProps = (state) => {
  console.log('# TodoList.jsx > mapStateToProps > state', state);
  return { todos: state.todos };
};
// dispatch를 받아서 props 객체로 만든다.
const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
