// 액션 타입 정의
/* 
    # ducks pattern namespace
      * 프로젝트이름/리듀서이름(모듈파일이름)/액션타입
*/
export const SHOW_ALL = 'learning-2021-redux/filter/SHOW_ALL';
export const SHOW_COMPLETE = 'learning-2021-redux/filter/SHOW_COMPLETE';

// 액션 생성 함수
export function showAll() {
  return { type: SHOW_ALL };
}
export function showComplete() {
  return { type: SHOW_COMPLETE };
}

// 초기값
const initializeState = 'ALL';

// 리듀서
export default function reducer(previousState = initializeState, action) {
  // console.log('# filter reducer > previousState: ', previousState);
  if (action.type === SHOW_COMPLETE) {
    return 'COMPLETE';
  }

  if (action.type === SHOW_ALL) {
    return 'ALL';
  }

  return previousState;
}
