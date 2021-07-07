import { combineReducers } from 'redux';
import todos from './todos';
import filter from './filter';
import users from './users';
import { connectRouter } from 'connected-react-router';
import history from '../../history';

// state
// ['코딩', '러닝']
// [ {text: '코딩', done: false}, {text: '러닝', done: true}]
/* 
  { 
    todos: [ 
      {text: '코딩', done: false}, 
      {text: '러닝', done: true}
    ], 
    filter: ALL
  }
 */

/* combineREducers에 추가한 object property명으로  */
const reducer = combineReducers({
  todos,
  filter,
  users,
  /* 이곳에 recuder를 추가 */
  router: connectRouter(history),
});
export default reducer;
