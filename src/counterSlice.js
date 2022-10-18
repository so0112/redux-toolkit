import { createSlice } from "@reduxjs/toolkit";

/* 6. store를 쪼개서 관리할 수 있는 저장소 slice 생성
slice에 필요한 것 : 변수, 초기값, 리듀서s (reducer랑 다른 거임)
*/

const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    up: (state, action) => {
      console.log(action);
      state.value = state.value + action.payload;
    },
  },
});

export default counterSlice;
export const { up } = counterSlice.actions;
