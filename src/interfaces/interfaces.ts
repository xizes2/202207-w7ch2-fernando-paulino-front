export interface IRobot extends Item {
  name: string;
  img: string;
  skills: {
    speed: number;
    endurance: number;
    creationDate: string;
  };
}
export interface Item {
  id?: string;
}

export interface IRobotsRepository<T extends Item> {
  loadAll: () => Promise<T[]>;
}
