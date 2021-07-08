
# redux-promise 동작 원리

* 어떤 타입으로 dispatch 할때 payload에 promise 함수가 있으면
  * 어떤 타입에 _PENDING,_FULFILLED, _REJECTED를 붙인 action type이 생성된다.
* payload에 promise 함수가 성공, 실패 여부에 따라서
  * 성공하면 [type]_FULFILLED 액션으로 payload 프로퍼티로 설정한 promise함수의 return 값을 reducer로 넘긴다.
  * 실패하면 [type]_REJECTED 액션으로 payload 프로퍼티로 promise의 error값을 reducer로 넘긴다.

# redux-promise 정리

* thunk는 비동기 시작, 성공, 실패에 대한 actions creator를 직접 입력해야 하지만
* promise-redux는 비동기 작업을 처리하는 타입에 post fix를 붙여 (_PENDING,_FULLFILLED, _REJECTED)
* promise의 비동기 처리 성공, 실패에 따라서 자동으로 dispatch 해준다.
