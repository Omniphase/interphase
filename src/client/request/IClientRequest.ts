import { HttpVerbs, BodyType } from './../Client';
export interface RequestData {
  data: any;
  param: any;
  path: any;
}

export interface HttpOptions {
  method: HttpVerbs,
  body: BodyType,
  headers: Object,
  credentials: string,
}

export interface RequestOptions {
  // TODO: Need to determine the full collection of what these will be
}


export interface IClientRequest<T> extends Promise<T> {
  fetch: (url: string, options: RequestOptions) => void;
  then: (callback: Function) => any;
  catch: (callback: Function) => any;
}
