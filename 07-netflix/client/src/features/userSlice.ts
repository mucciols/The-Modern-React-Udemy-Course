import { createSlice} from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

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
  initialState,
  reducers: {
    setUset: (state, action: PayloadAction<User>) => {
      state.value.user = action.payload;
      state.value.isLoading = false;
    }
  }
})

export const { setUser } = userSlice.actions;

export default userSlice.reducer;