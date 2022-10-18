/* 리덕스 (툴킷X) 
- reducer : store안의 state를 변화 시킬 action이 정의 되어있는 함수
- store : state가 저장되는 저장소
- Provider : 컴포넌트에 store를 제공
- selector : store에서 사용할 변수를 꺼내서 할당
- dispatch : state를 변화시킬 컴포넌트에서 reducer로 action을 넘겨줌
- action : state를 어떻게 변화시킬 것인지 사전적으로 정의 */

/* 리덕스 툴킷 사용법 주석

1. store안에 있는 state 변화 시킬 action이 정의 되어있는 리듀서 함수 선언
function reducer(state, action) {
  switch (action.type) {
    case "up":
      return { ...state, value: state.value + action.step };
      
      // 리듀서의 디폴트 값 : 정의되지 않은 액션이 들어오면 반환한다.
      default:
        return state;
      }
    }
    
2. 초기 state 설정 (선택 사항)
  const initState = { value: 0 };
    
3. 스토어 생성 : (리듀서, state)가 매개변수로 들어옴
  스토어? 전역 상태들이 저장되는 저장소
  const store = createStore(reducer, initState);

4. store를 사용할 컴포넌트를 Provider로 묶어줌

5. 사용할 state를 셀렉터로 묶어서 변수에 할당

6. reducer로 action을 넘겨줄 dispatch를 작성 

7. store를 쪼개서 관리할 수 있는 저장소 slice 생성
  slice에 필요한 것 : 변수, 초기값, 리듀서s (reducer랑 다른 거임)
*/

// 리덕스 툴킷 설치 : npm install @reduxjs/toolkit
import React from "react";
import { Provider, useSelector, useDispatch } from "react-redux";
import store from "./store";
import { up } from "./counterSlice";

function Counter() {
  const count = useSelector((state) => state.counter.value);

  const dispatch = useDispatch();
  return (
    <div>
      <button
        onClick={() => {
          // dispatch({ type: "counter/up", step: 2 });
          // dispatch({counterSlice.actions.up(2)});
          dispatch(up(2));
        }}>
        +
      </button>{" "}
      {count}
    </div>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <div>
        <Counter></Counter>
      </div>
    </Provider>
  );
}
