import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadRobots } from "../../features/robots/robotsSlice";
import { IRobot } from "../../interfaces/interfaces";
import { RobotsRepository } from "../repository/robotRepository";
import { RootState } from "./store";

export const useApiData = (url: string) => {
  const dispatch = useDispatch();
  const state = useSelector((state: RootState) => state);
  const repoRobots = useMemo(() => new RobotsRepository<IRobot>(url), [url]);

  const handlerLoadRobots = async () => {
    const robots = await repoRobots.loadAll();
    await dispatch(loadRobots(robots));
  };

  return { dispatch, state, handlerLoadRobots };
};
