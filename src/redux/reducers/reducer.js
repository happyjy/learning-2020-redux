import { combineReducers } from 'redux';
import todos from './todos';
import filter from './filter';

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

const reducer = combineReducers({
  todos,
  filter,
  /* 이곳에 recuder를 추가 */
});
export default reducer;
