import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/store';
import { addTodo } from './redux/actions';

// dispatch수행 되면 "subscribe"함수 수행
store.subscribe(() => {
  console.log(store.getState());
});

console.log(store);
store.dispatch(addTodo('coding'));
store.dispatch(addTodo('read book'));
store.dispatch(addTodo('run nearby '));

/* 
  # store Object 5개 function 반환
    * dispatch: ƒ dispatch(action)
    * getState: ƒ getState()
    * replaceReducer: ƒ replaceReducer(nextReducer)
    * subscribe: ƒ subscribe(listener)
    * Symbol(observable): ƒ observable()
*/

/* 
   # getState의 반환값은 뭘까? redux package code를 보며 분석해보자
    * 아래 파일 위치의 redux의 createStore.js 파일을 분석해보자
      * node_modules/redux/src/createStore.js
    * createStore 함수하나로 구성 되어 있다. 
    * line 32: createStore 함수는 첫번째 파라미터로 reducer pure function을 받는다. 
    * line 305: dispatch 함수를 type이 ActionTypes.INIT에의해서 수행
    * line 218: dispatch 함수 내에서 인자로 받은 reducer을 실행하고 반환값을 currentState에 할당
    * line 308: createStore 함수 반환 객체들이며 여기서 getState가 포함 되어 있다.
    * line 93: getState 함수가 있고 반환값은 currentState이다.
*/

/* 
  # subscribe은 언제 수행되고 어떻게 수행되는 대상 될까? 
    > POINT1: subscribe 함수 수행
    > POINT2: 수행 대상 설정
    * 먼저 subscribe 함수 부터 분석해보자
    * line 128: subscribe 함수가 있다. 
    * line 149: 72 line에 있는 nextListeners 배열에 push 한다. (POINT2: 수행 대상 설정)
    * line 223: dispatch 함수내에서 nextListeners을 순회 하며 배열에 담긴 function을 실행한다.(POINT1: subscribe 함수 수행)
*/

/* 
  # unsubscribe에 대해서 알아보자
    * line151: unsubscribe은 subscribe 함수의 return 값이다. 
    * 그래서 subscribe함수를 설정하고 return 값을 변수에 담고(이 unsubscribe 함수가 담긴다)
      * dispatch 이후에 함수가 수행되는 것을 멈추기 위해서는 해당 return 값을 수행시킨다.
    * line 166: subscribe 함수 수행시에 "nextListeners" 배열에 함수가 담기는데, 이 배열에서 indexOf 함수를 통해 subscribe함수 호출시에 인자 값으로 넘긴 listener 함수로 몇번째 인덱스에 있는지 찾은후 splice 함수로 제거한다.
*/

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
