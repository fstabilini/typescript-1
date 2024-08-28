import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  name: string;
  address: string;
}

const initialState: UserState = {
  name: "Flor",
  address: "7943 NW 111 Ct",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUser: (state, action: PayloadAction<Partial<UserState>>) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { updateUser } = userSlice.actions;
export default userSlice.reducer;
