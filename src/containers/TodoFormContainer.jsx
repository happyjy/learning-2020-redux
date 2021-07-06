import { connect } from 'react-redux';
import TodoForm from '../component/TodoForm';
import { addTodo } from '../redux/actions';

// redux의 state를 받아서 props 객체로 만든다.(connect hoc에 의해서 컴포넌트 props로 전달)
const mapStateToProps = (state) => {
  return {};
};
// redux의 dispatch를 받아서 props 객체로 만든다.(connect hoc에 의해서 컴포넌트 props로 전달)
const mapDispatchToProps = (dispatch) => {
  return { addTodo: (text) => dispatch(addTodo(text)) };
};

const TodoFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoForm);

export default TodoFormContainer;
