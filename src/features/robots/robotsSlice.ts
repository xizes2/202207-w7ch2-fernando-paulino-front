import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Robots } from "./model/Robot";

const initialRobotState: Robots = [];

export const robotsSlice = createSlice({
  name: "robots",
  initialState: initialRobotState,
  reducers: {
    loadRobots: (state, action: PayloadAction<Robots>) => action.payload,
  },
});

export const { loadRobots } = robotsSlice.actions;
const robotReducer = robotsSlice.reducer;

export default robotReducer;
