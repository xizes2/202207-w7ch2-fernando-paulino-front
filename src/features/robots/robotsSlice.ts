import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Robot, Robots } from "./model/Robot";

const initialRobotState: Robots = [];

const robotsSlice = createSlice({
  name: "robots",
  initialState: initialRobotState,
  reducers: {
    loadRobots: (state, action: PayloadAction<Robots>) => [...action.payload],
    createRobot: (state, action: PayloadAction<Robot>) => [
      ...state,
      action.payload,
    ],
  },
});

export const { loadRobots, createRobot } = robotsSlice.actions;
const robotReducer = robotsSlice.reducer;

export default robotReducer;
