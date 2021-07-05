import { ADD_TODO, COMPLETE_TODO } from './actions';

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
//
const initialState = [];

export function todoApp(previousState = initialState, action) {
  // 초기값을 설정해주는 부분
  // if (previousState === undefined) {
  //   return [];
  // }

  if (action.type === ADD_TODO) {
    // action 객체의 property를 보고 action뒤에 어떤 프로퍼티를 접근할지 결정한다.
    return [...previousState, { text: action.text, done: false }];
    /*
      # 아래와 같이 하면 Immuable한 성질을 이용하지 못하는 코드 이다. 
      return previousState.push('')
     */
  }

  if (action.type === COMPLETE_TODO) {
    return previousState.map((todo, idx) => {
      if (idx === action.index) {
        return { ...todo, done: true };
      }
      return todo;
    });
  }

  return previousState;
}
