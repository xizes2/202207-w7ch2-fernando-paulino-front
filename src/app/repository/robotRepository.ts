import { Robot } from "../../features/robots/model/Robot";
import { IRobotsRepository, Item } from "../../interfaces/interfaces";

export class RobotsRepository<T extends Item> implements IRobotsRepository<T> {
  constructor(public url: string) {}

  loadAll() {
    return fetch(this.url, { mode: "cors" }).then((response) =>
      response.json()
    );
  }

  add(robot: Robot) {
    return fetch(this.url, {
      mode: "cors",
      method: "POST",
      body: JSON.stringify(robot),
      headers: { "content-type": "application/json" },
    }).then((response) => response.json());
  }
}
