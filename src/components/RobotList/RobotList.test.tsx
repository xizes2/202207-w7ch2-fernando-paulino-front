import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../app/store/store";
import RobotsList from "./RobotsList";

describe("Given a RobotList component", () => {
  describe("When instantiated", () => {
    test("Then it should show a robots list", () => {
      render(
        <Provider store={store}>
          <RobotsList />
        </Provider>
      );

      const robots = screen.getAllByRole("list");

      robots.forEach((robot) => {
        expect(robot).toBeInTheDocument();
      });
    });
  });
});
