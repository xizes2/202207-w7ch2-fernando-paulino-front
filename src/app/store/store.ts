import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import robotReducer from "../../features/robots/robotsSlice";
import userReducer from "../../features/users/usersSlice";

export const store = configureStore({
  reducer: {
    robots: robotReducer,
    user: userReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
