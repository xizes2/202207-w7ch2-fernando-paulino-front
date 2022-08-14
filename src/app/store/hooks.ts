import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { loadRobots } from "../../features/robots/robotsSlice";
import { IRobot } from "../../interfaces/interfaces";
import { RobotsRepository } from "../repository/robotRepository";

export const useApiData = (url: string) => {
  let dispatch = useDispatch();
  const repoRobots = useMemo(() => new RobotsRepository<IRobot>(url), [url]);

  const handlerLoadRobots = async () => {
    const robots = await repoRobots.loadAll();
    await dispatch(loadRobots(robots.robots));
  };

  return { handlerLoadRobots };
};
