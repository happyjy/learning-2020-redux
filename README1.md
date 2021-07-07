1. action, actions creators 설정 (commit: 1c26a50526927befe7c77e1a0d1423c21c2c62a3)
2. reducer 설정(commit: f803f31de7852bf5ea745fff09294f8216c2881c)
3. createStore(commit: 30808edc76f294f690ea9c9ccbec740727ac6f09)
   1. createStore 설정/ store객체의 getState, subscribe, unsubscribe 함수에 대해서 createStore.js 분석
4. complete_todo action 추가(commit: 60a909674757289e14bbf348f1ed8789d64e88e4)
5. reducer에 complete_todo, show_all, show_complete 로직 추가
   1. reducer에 todo 관련 로직, show all/complete를 추가 하다 보니 복잡해졌다.
   2. 분리가 필요해 보인다.
   3. redux는 단일 스토어라 나누지 못한다.
      1. 그래서 reducer를 나눌 고민을 시작.
   4. 현재 state는 dictionary 개체에 todo, filter 두개의 프로퍼티를 가지고 있다.
      1. 그래서 관심사(프로퍼티)별로 별개의 reducer를 작성하고 합치는 것을 생가해낸다.
   5. 이것이 바로 `combineReducer`(redux 객체) 입니다.
6. combineReducer 추가 작업
   1. 파일 구조

   ```js
      src
      ┣ redux
      ┃ ┣ reducers
      ┃ ┃ ┣ reducer.js    : 1. combineReducers를 통해서 reducer 합친다.
      ┃ ┃ ┣ filter.js     : 1.1 filter reducer 함수
      ┃ ┃ ┗ todos.js      : 1.1 todos reducer 함수
      ┃ ┣ actions.js      : 3.1 actions: dispatch 함수에 전달되는 actions
      ┃ ┗ store.js        : 2. createStore 함수에 reducer인자로 초기화
      ┣ App.js
      ┣ index.js          : 3. store.js에서 생성한 store 사용/ store객체 함수 dispatch로 redux store state update
   ```

7. Redux 를 React 에 연결 (1) - react-redux 안쓰고 연결하기
8. Redux 를 React 에 연결 (2-1) - react-redux 쓰고 연결하기

* provider 사용(react-redux)
* connect 사용(react-redux)
  * mapStateToProps, mapDispatchToProps

9. Redux 를 React 에 연결 (2-2) - react-redux 쓰고 연결하기

* 관심사 분리(container, presentational)
* container
  * redux에서 connect hoc객체에 의해서 state, dispatch를 받아서 컴포넌트 props로 전달하는 역할
* presentational
  * 위 container에 의해서 전달된 state, dispatch를 props로 전달 받는다.
  * view 역할을 한다.(render될 컴포넌트 요소만 있다.)

10. Redux 를 React 에 연결 (2-3) - react-redux 쓰고 연결하기

* hook으로 component에서 redux store객체의 state, dispatch 객체를 호출해서 컴포넌트 props에 꽂아 줌으로 사용
* 사용된 hook: useDispatch, useSelector, useCallback
* 파일 구조/ 설명

  ```js
   src
    ┣ components              : 역할분리1 - view 역할 리액트 컴포넌트
    ┃ ┣ TodoForm.jsx
    ┃ ┗ TodoList.jsx
    ┣ containers              : 역할분리2 - store객체를 리액트 컴포넌트 주입
    ┃ ┣ TodoFormContainer.jsx
    ┃ ┗ TodoListContainer.jsx
    ┣ contexts                : redux를 react연결시 사용 [react-redux사용X]
    ┃ ┗ ReduxContext.js
    ┣ hooks
    ┃ ┣ useReduxDispatch.js   : redux를 react연결시 사용 [react-redux사용X] - store객체의 dispatch 함수 가져올때 
    ┃ ┗ useReduxState.js      : redux를 react연결시 사용 [react-redux사용X] - store객체의 state 값 가져올때 
    ┣ redux
    ┃ ┣ reducers
    ┃ ┃ ┣ filter.js           : reducer
    ┃ ┃ ┣ reducer.js          : reducer
    ┃ ┃ ┗ todos.js            : combineReducer로 reducer 관심사 분리
    ┃ ┣ actions.js            : action creator, actions 
    ┃ ┗ store.js              : store객체 생성(by redux패키지의 createStore함수에 reducer 주입)
    ┣ App.js                  
    ┣ index.js                : redux를 react에 연결하기 위해서 App 컴포넌트를 감싼다.
  ```
