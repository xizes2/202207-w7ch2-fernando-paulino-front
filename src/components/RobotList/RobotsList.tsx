import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useApiData } from "../../app/store/hooks";
import { RootState } from "../../app/store/store";
import RobotsListStyled from "./RobotListStyled";

const apiUrl = process.env.REACT_APP_APIURL as string;

const RobotsList = (): JSX.Element => {
  const { handlerLoadRobots } = useApiData(apiUrl);
  const robotList = useSelector((state: RootState) => state);
  useEffect(() => {
    handlerLoadRobots();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <RobotsListStyled className="robots-list">
      <h2 className="robots-list__title">Robots List</h2>
      {robotList.robots.map((robot) => (
        <li key={robot.name} className="robot-item">
          {robot.name}
          <img
            className="robot-item__image"
            src={robot.img}
            alt={`Robot with name ${robot.name}`}
            height={400}
            width={400}
          />
          <div className="robot__skills">
            <span className="robot__skills speed">
              Speed: {robot.skills.speed}
            </span>
            <span className="robot__skills endurance">
              Endurance: {robot.skills.endurance}
            </span>
            <span className="robot__skills creationDate">
              Creation Date: {robot.skills.creationDate}
            </span>
          </div>
        </li>
      ))}
    </RobotsListStyled>
  );
};

export default RobotsList;
