export interface Robot {
  name: string;
  img: string;
  skills: {
    speed: number;
    endurance: number;
    creationDate: string;
  };
  owner: string;
}

export type Robots = Robot[];
