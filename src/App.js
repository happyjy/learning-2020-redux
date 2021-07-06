import logo from './logo.svg';
import './App.css';
// import { addTodo } from './redux/actions';
import useReduxState from './hooks/useReduxState';
// import useReduxDispatch from './hooks/useReduxDispatch';
import TodoForm from './component/TodoForm';
import TodoList from './component/TodoList';

function App() {
  // const state = useReduxState();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* {JSON.stringify(state)} */}
        <TodoList />
        <TodoForm />
      </header>
    </div>
  );
}

export default App;
