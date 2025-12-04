import { createSlice, PayloadAction } from "@reduxjs/toolkit"; 
import { act } from "react";

export interface UserState {
  value:{
    user: User | null;
    isLoading: boolean;
  }
}

interface User {
  email: string;
  username: string;
}

const initialState : UserState = {
  value: {
    user: null, isLoading: true
  }
}

export const userSlice = createSlice({
  name : "user",
  intialState,
  reducers: {
    setUset: (state, action: PayloadAction<User>) => {
      state.value.user = action.payload;
      state.value.isLoading = false;
    }
  }
})

export const { setUset } = userSlice.actions;

export default userSlice.reducer;