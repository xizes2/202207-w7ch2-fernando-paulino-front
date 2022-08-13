import { IRobotsRepository, Item } from "../../interfaces/interfaces";

export class RobotsRepository<T extends Item> implements IRobotsRepository<T> {
  constructor(public url: string) {}

  loadAll() {
    return fetch(this.url).then((response) => response.json());
  }
}
