import { useRef } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../redux/actions';

function TodoForm({ addTodo }) {
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

// state를 받아서 props 객체로 만든다.
const mapStateToProps = (state) => {
  return {};
};
// dispatch를 받아서 props 객체로 만든다.
const mapDispatchToProps = (dispatch) => {
  return { addTodo: (text) => dispatch(addTodo(text)) };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);
