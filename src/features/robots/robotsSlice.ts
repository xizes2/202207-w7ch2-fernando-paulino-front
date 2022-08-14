import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Robots } from "./model/Robot";

const initialRobotState: Robots = [
  {
    name: "sudamericanos",
    picture: "holis.com",
    skills: {
      speed: 1,
      endurance: 2,
      creationDate: "06/96",
    },
  },
];

const robotsSlice = createSlice({
  name: "robots",
  initialState: initialRobotState,
  reducers: {
    loadRobots: (state, action: PayloadAction<Robots>) => action.payload,
  },
});

export const { loadRobots } = robotsSlice.actions;

export default robotsSlice.reducer;
