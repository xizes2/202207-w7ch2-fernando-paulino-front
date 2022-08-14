import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Robots } from "./model/Robot";

const initialRobotState: Robots = [
  {
    name: "sudamericanos",
    picture: "https://freesvg.org/img/Blue-Robot.png",
    skills: {
      speed: 1,
      endurance: 2,
      creationDate: "06/96",
    },
  },
  {
    name: "umbanda",
    picture: "https://freesvg.org/img/robot-color.png",
    skills: {
      speed: 5,
      endurance: 7,
      creationDate: "06/22",
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
const robotReducer = robotsSlice.reducer;

export default robotReducer;
