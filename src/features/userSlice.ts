import { createSlice } from "@reduxjs/toolkit";

interface UserState {
  firstName: string;
  lastName: string;
  age: number;
}

const initialState: UserState = {
  firstName: "John",
  lastName: "Doe",
  age: 20,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    increment: (state) => {
      state.age += 1;
    },
    decrement: (state) => {
      state.age -= 1;
    },
  },
});

export const { increment, decrement } = userSlice.actions;
export default userSlice.reducer;
