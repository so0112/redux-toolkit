// 리덕스 툴킷 설치 : npm install @reduxjs/toolkit
import React from "react";
import { Provider, useSelector, useDispatch } from "react-redux";
import { createStore } from "redux";
import { createSlice } from "@reduxjs/toolkit";

// 1. store안에 있는 state 변화 시킬 action이 정의 되어있는 리듀서 함수 선언
function reducer(state, action) {
  switch (action.type) {
    case "up":
      return { ...state, value: state.value + action.step };

    // 리듀서의 디폴트 값 : 정의되지 않은 액션이 들어오면 반환한다.
    default:
      return state;
  }
}

// 2. 초기 state 설정 (선택 사항)
const initState = { value: 0 };

// 3. 스토어 생성 : (리듀서, state)가 매개변수로 들어옴
// 스토어? 전역 상태들이 저장되는 저장소
const store = createStore(reducer, initState);

function Counter() {
  // 5. 사용할 state를 셀렉터로 묶어서 변수에 할당
  const count = useSelector((state) => state.value);

  const dispatch = useDispatch();
  return (
    <div>
      {/*6. reducer로 action을 넘겨줄 dispatch를 작성 */}
      <button
        onClick={() => {
          dispatch({ type: "up", step: 2 });
        }}>
        +
      </button>{" "}
      {count}
    </div>
  );
}

export default function App() {
  return (
    // 4. store를 사용할 컴포넌트를 Provider로 묶어줌
    <Provider store={store}>
      <div>
        <Counter></Counter>
      </div>
    </Provider>
  );
}
