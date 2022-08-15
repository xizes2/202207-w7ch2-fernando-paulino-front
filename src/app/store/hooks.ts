import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { Robot } from "../../features/robots/model/Robot";
import { createRobot, loadRobots } from "../../features/robots/robotsSlice";
import { IRobot } from "../../interfaces/interfaces";
import { RobotsRepository } from "../repository/robotRepository";

export const useApiData = (url: string) => {
  let dispatch = useDispatch();
  const repoRobots = useMemo(() => new RobotsRepository<IRobot>(url), [url]);

  const handlerLoadRobots = async () => {
    const robots = await repoRobots.loadAll();
    await dispatch(loadRobots(robots.robots));
  };

  const handlerCreateRobot = async (robot: Robot) => {
    const newRobot = await repoRobots.add(robot);
    await dispatch(createRobot(newRobot.robot));
  };

  return { handlerLoadRobots, handlerCreateRobot };
};
