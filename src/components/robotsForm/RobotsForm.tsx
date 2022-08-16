import { SyntheticEvent, useState } from "react";
import { useApiData } from "../../app/store/hooks";
import { Robot } from "../../features/robots/model/Robot";
import RobotFormStyled from "./RobotFormStyled";

const apiUrl = `${process.env.REACT_APP_APIURL}/create`;

const RobotsForm = (): JSX.Element => {
  const { handlerCreateRobot } = useApiData(apiUrl);

  const initialRobot: Robot = {
    name: "",
    img: "",
    skills: {
      speed: 0,
      endurance: 0,
      creationDate: "",
    },
  };

  const [newRobot, setNewRobot] = useState(initialRobot);

  const hasEmptyFields =
    newRobot.img === "" ||
    newRobot.name === "" ||
    newRobot.skills.speed === 0 ||
    newRobot.skills.endurance === 0;

  const createRobotOnSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();

    handlerCreateRobot(newRobot);
    setNewRobot(initialRobot);
  };

  return (
    <RobotFormStyled className="robots-form" onSubmit={createRobotOnSubmit}>
      <div className="form-container">
        <label htmlFor="name" className="label-name">
          Robot Name:
        </label>
        <input
          id="name"
          type="text"
          className="input-name"
          onChange={(event) =>
            setNewRobot({ ...newRobot, name: event.target.value })
          }
          defaultValue={initialRobot.name}
          autoComplete="off"
        />

        <label htmlFor="img" className="label-img">
          Robot Image:
        </label>
        <input
          id="img"
          type="url"
          className="input-img"
          onChange={(event) =>
            setNewRobot({ ...newRobot, img: event.target.value })
          }
          autoComplete="off"
          defaultValue={initialRobot.img}
        />

        <label htmlFor="speed" className="label-speed">
          Speed:
        </label>
        <input
          id="speed"
          type="number"
          className="input-speed"
          onChange={(event) =>
            setNewRobot({
              ...newRobot,
              skills: { ...newRobot.skills, speed: +event.target.value },
            })
          }
          defaultValue={initialRobot.skills.speed}
          min="0"
          max="10"
        />

        <label htmlFor="Endurance" className="label-endurance">
          Endurance:
        </label>
        <input
          id="endurance"
          type="number"
          className="input-endurance"
          defaultValue={initialRobot.skills.endurance}
          onChange={(event) =>
            setNewRobot({
              ...newRobot,
              skills: { ...newRobot.skills, endurance: +event.target.value },
            })
          }
          min="0"
          max="10"
        />
        <label htmlFor="creationDate" className="label-creationDate">
          Creation Date:
        </label>
        <input
          id="creationDate"
          type="text"
          defaultValue={initialRobot.skills.creationDate}
          className="input-creationDate"
          autoComplete="off"
          onChange={(event) =>
            setNewRobot({
              ...newRobot,
              skills: { ...newRobot.skills, creationDate: event.target.value },
            })
          }
        />
      </div>
      <button type="submit" disabled={hasEmptyFields}>
        Create Robot!
      </button>
    </RobotFormStyled>
  );
};

export default RobotsForm;
