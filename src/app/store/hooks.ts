import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IRobot } from "../../interfaces/interfaces";
import { RobotsRepository } from "../repository/robotRepository";
import { RootState } from "./store";

export const useApiData = (url: string) => {
  const dispatch = useDispatch();
  const state = useSelector((state: RootState) => state);
  const repoRobots = useMemo(() => new RobotsRepository<IRobot>(url), [url]);

  return { dispatch, state, repoRobots };
};
