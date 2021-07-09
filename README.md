아래 branch list와 프로젝트 root 정보가 있는데 브런치 순번대로 설명을 작성한 .md파 일이 있다.  
번호별로 간략 설명도 아래 적어 놓았다.

# 번호별 간략 설명

## 번호1

* todoslist의 filter, todos를 구현(번호2,3에서도 이 모듈로 진행)

## 번호2

* store객체에서 dispatch, getState로 redux, react 연결

## 번호3

* react-redux사용
* 방법1: hoc(connect 객체)에 mapStateToProps, mapDispatchToProps callback function 설정으로 구현
* 방법2: hook으로 dispatch, state select하는 방법으로 구현

## 번호4 비동기처리 진행/ 팁

* github user list 가지고 오는 모듈 구현 으로 실습("usersList 모듈")
* 비동기처리방법1: Async Action with redux
* 비동기처리방법2: redux-thunk 활용
* 비동기처리방법3: promise-middleware
* 팁1: redux middleware
* 팁2: redux devtools 연결

## 번호5 비동기 처리/ 팁

* 비동기처리방버: redux-saga
* 팁1: Ducks Pattern
* 팁2: react-router-dom을 redux에 연결하기
* 팁3: redux-actions

## 번호 6,7,8,9

* redux에서 비동기 처리할 수있는 네 가지 방법
* 해당 브랜치에서 프로젝트를 수행시켜 확인할 수 있다.

# branch list

1. redux작업(action,reducers,createStore,combineReducers)
2. redux_with_react(react-redux사용X)
3. redux_with_react(react-redx사용O)
4. redux에서_비동기처리방법_3가지
5. Redux_Advance(2)
6. 6.1비동기(Action)
7. 6.2비동기(redux-thunk)
8. 6.3비동기(redux-promise)
9. 6.4비동기(redux-saga)

# file list

프로젝트 root에 위치

1. 작업내용 - redux 설정.md
2. 작업내용 - redux, react 연결(react-redux사용x).md
3. 작업내용 - redux, react 연결(react-redux사용).md
4. 작업내용 - redux 비동기 처리.md
5. 작업내용 - redux advance.md
