import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import robotsSlice from "../../features/robots/robotsSlice";

export const store = configureStore({
  reducer: {
    robots: robotsSlice,
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
