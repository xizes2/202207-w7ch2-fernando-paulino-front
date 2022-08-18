import robotReducer, { loadRobots } from "./robotsSlice";
import { Robot } from "../robots/model/Robot";

describe("Given a robotsSlice function", () => {
  describe("When instantiated with loadRobots reducer and a new state", () => {
    test("Then it should return its payload the same as the new state", () => {
      const initialState: Robot[] = [];
      const robot: Robot[] = [
        {
          name: "",
          img: "",
          skills: {
            speed: 0,
            endurance: 0,
            creationDate: "",
          },
          owner: "",
        },
      ];
      const newState = robotReducer(initialState, loadRobots(robot));

      expect(newState).toStrictEqual(robot);
    });
  });
});
