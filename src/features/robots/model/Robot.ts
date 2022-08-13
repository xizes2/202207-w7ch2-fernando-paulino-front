export interface Robot {
  name: string;
  picture: string;
  skills: {
    speed: number;
    endurance: number;
    creationDate: string;
  };
}

export type Robots = Robot[];
