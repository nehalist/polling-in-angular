import {Deserializable} from "./deserializable.model";
import {User} from "./user.model";

export class Status implements Deserializable {
  id: number;
  text: string;
  user: User;

  deserialize(input: any) {
    Object.assign(<any>this, input);

    return this;
  }
}
