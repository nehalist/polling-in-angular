import {Deserializable} from "./deserializable.model";
import {Status} from "./status.model";

interface SearchMetadata {
  completed_in: number;
  max_id: number;
  max_id_str: string;
  next_results: string;
  query: string;
  refresh_url: string;
  count: number;
  since_id: number;
  since_id_str: string;
}

export class TwitterResponse implements Deserializable {
  statuses: Status[];
  searchMetadata: SearchMetadata;

  deserialize(input: any) {
    Object.assign(<any>this, input);

    input.statuses && (this.statuses = input.statuses.map((status: Status) => new Status().deserialize(status)));

    return this;
  }
}
