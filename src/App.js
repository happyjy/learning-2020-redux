// import { addTodo } from './redux/actions';
import useReduxState from './hooks/useReduxState';
// import useReduxDispatch from './hooks/useReduxDispatch';
import TodoForm from './component/TodoForm';
import TodoList from './component/TodoList';

function App() {
  const state = useReduxState();

  return (
    <div className="App">
      <header className="App-header">
        {/* {JSON.stringify(state)} */}
        <TodoList value={state} />
        <TodoForm />
      </header>
    </div>
  );
}

export default App;
