import { createSlice } from "@reduxjs/toolkit";

const userSlices = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    addUser(state, action) {
      state.push(action.payload);
      // console.log(action.payload);
      //when we write state.push or something it means we talk about only this userSlices state
    },
    removeUser(state, action) {
      let userIndexNum = state.indexOf(action.payload);
      state.splice(userIndexNum, 1);
      // state.pop(action.payload);
      // console.log("hey:::::" + action.payload);
    },
    clearAllUsers(state, action) {
      console.log("delete user");
      return [];
    },
  },
});

console.log(userSlices.actions);

export default userSlices.reducer;
export const { addUser, removeUser, clearAllUsers } = userSlices.actions;
