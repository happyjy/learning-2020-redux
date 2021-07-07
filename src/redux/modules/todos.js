// # todos reducer action, action creator

// 액션 타입 정의
export const ADD_TODO = 'learning-2021-redux/todos/ADD_TODO';
export const COMPLETE_TODO = 'learning-2021-redux/todos/COMPLETE_TODO';

// 액션 생성 함수
// {type: ADD_TODO, text: '할일'}
export function addTodo(text) {
  return {
    type: ADD_TODO,
    text,
  };
}
// {type: COMPLETE_TODO, index: 3}
export function complete_todo(index) {
  return {
    type: COMPLETE_TODO,
    index,
  };
}

// 초기값
const initializeState = [];

// 리듀서
export default function reducer(previousState = initializeState, action) {
  // 초기값을 설정해주는 부분
  // if (previousState === undefined) {
  //   return [];
  // }

  // console.log('# todos reducer > previousState: ', previousState);
  if (action.type === ADD_TODO) {
    // action 객체의 property를 보고 action뒤에 어떤 프로퍼티를 접근할지 결정한다.
    return [
      ...previousState,
      { index: previousState.length, text: action.text, done: false },
    ];
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
