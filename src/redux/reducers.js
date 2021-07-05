import { ADD_TODO } from './actions';

const initialState = [];

function todoApp(previousState = initialState, action) {
  // 초기값을 설정해주는 부분
  // if (previousState === undefined) {
  //   return [];
  // }

  if (action.type === ADD_TODO) {
    // action 객체의 property를 보고 action뒤에 어떤 프로퍼티를 접근할지 결정한다.
    return [...previousState, action.todo];

    /*
      # 아래와 같이 하면 Immuable한 성질을 이용하지 못하는 코드 이다. 
      return previousState.push('')
     */
  }

  return previousState;
}
