import {Deserializable} from "./deserializable.model";

export class User implements Deserializable {
  id: number;
  name: string;
  screen_name: string;

  deserialize(input: any) {
    Object.assign(<any>this, input);

    return this;
  }
}
