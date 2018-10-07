import { RequestOptions } from "../client/request/IClientRequest";
import { HttpVerbs } from "../client/Client";

export interface Endpoint {
  uri: string;
  name: string;
  methods?: Array<HttpVerbs>;
  retry?: (func: Function) => boolean;
  options?: Partial<RequestOptions>;
}
