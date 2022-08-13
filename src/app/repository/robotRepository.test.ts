import { RobotsRepository } from "./robotRepository";

describe("Given the repoRobots load function", () => {
  describe("When its invoked with an url", () => {
    test("Then it should call the fetch method", () => {
      const url = "";
      const repoRobot = new RobotsRepository(url);
      repoRobot.loadAll = jest.fn();

      repoRobot.loadAll();

      expect(repoRobot.loadAll).toHaveBeenCalled();
    });
  });
});
