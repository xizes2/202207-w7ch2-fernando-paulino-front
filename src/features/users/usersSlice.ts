import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserRegistered } from "./model/User";

const initialUsersState: UserRegistered = { id: "", userName: "", token: "" };

const usersSlice = createSlice({
  name: "users",
  initialState: initialUsersState,
  reducers: {
    loginUser: (state, action: PayloadAction<UserRegistered>) => action.payload,
    logoutUser: (state) => initialUsersState, //Al deslogar dejar todo en blanco
  },
});

export const {
  loginUser: loginUserActionCreator,
  logoutUser: logoutUserActionCreator,
} = usersSlice.actions;
const userReducer = usersSlice.reducer;

export default userReducer;
