import { connect } from 'react-redux';
import TodoList from '../component/TodoList';

// redux의 state를 받아서 props 객체로 만든다.(connect hoc에 의해서 컴포넌트 props로 전달)
const mapStateToProps = (state) => {
  console.log('# TodoList.jsx > mapStateToProps > state', state);
  return { todos: state.todos };
};
// redux의 dispatch를 받아서 props 객체로 만든다.(connect hoc에 의해서 컴포넌트 props로 전달)
const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
