import { renderHook } from "@testing-library/react";
import { Provider } from "react-redux";
import { RobotsRepository } from "../repository/robotRepository";
import { useApiData } from "./hooks";
import { store } from "./store";

describe("Given a hook and the handlerLoad function", () => {
  const url = "";
  interface WrapperProps {
    children: JSX.Element;
  }

  const Wrapper = ({ children }: WrapperProps): JSX.Element => {
    return <Provider store={store}>{children}</Provider>;
  };
  describe("When its called with an url", () => {
    test("Then it should return call the loadAll function", async () => {
      const testRobot = {
        robots: [
          {
            name: "sudamericanos",
            picture: "holis.com",
            skills: {
              speed: 1,
              endurance: 2,
              creationDate: "06/96",
            },
          },
        ],
      };

      jest.mock("../repository/robotRepository");
      RobotsRepository as jest.Mock;
      RobotsRepository.prototype.loadAll = jest
        .fn()
        .mockResolvedValue(testRobot);

      const mockDispatch = jest.fn();
      jest.mock("react-redux", () => ({
        ...jest.requireActual("react-redux"),
        useDispatch: () => mockDispatch,
      }));

      const {
        result: {
          current: { handlerLoadRobots },
        },
      } = renderHook(() => useApiData(url), { wrapper: Wrapper });

      await handlerLoadRobots();

      await expect(RobotsRepository.prototype.loadAll).toHaveBeenCalled();
    });
  });
});
