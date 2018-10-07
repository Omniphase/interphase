import { RequestData, RequestOptions, IClientRequest } from "./request/IClientRequest";

export enum HttpVerbs {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE",
  PATCH = "PATCH",
}

export enum BodyType {
  STRING = "STRING",
  URL_SEARCH_PARAMS = "URL_SEARCH_PARAMS",
  FORM_DATA = "FORM_DATA",
  BLOB = "BLOB",
  ARRAY_BUFFER = "ARRAY_BUFFER",
  TYPED_ARRAY = "TYPED_ARRAY",
  DATA_VIEW = "DATA_VIEW",
}

export interface Client {
  delete(pathName: string, requestData: RequestData, requestOptions: RequestOptions): IClientRequest;
  get(pathName: string, requestData: RequestData, requestOptions: RequestOptions): IClientRequest;
  patch(pathName: string, requestData: RequestData, requestOptions: RequestOptions): IClientRequest;
  post(pathName: string, requestData: RequestData, requestOptions: RequestOptions): IClientRequest;
  put(pathName: string, requestData: RequestData, requestOptions: RequestOptions): IClientRequest;
}