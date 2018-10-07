import { parseOptions, getEndpointFromPathname } from './../utils';
import { HttpVerbs, Client } from './Client';
import { Endpoint } from './../endpoint/Endpoint';
import ClientResponse from './request/ClientRequest';
import { RequestData } from './request/IClientRequest';
import { RequestOptions } from 'https';

class HttpClient implements Client {

  private _interphase_fetch(verb: HttpVerbs, pathName: string, requestData: RequestData, overrideOptions: RequestOptions): ClientResponse {
    const endpoint: Endpoint = getEndpointFromPathname(pathName);
    const { uri, options } = endpoint;
    const requestOptions = parseOptions({
      ...options,
      ...overrideOptions,
    });

    const clientResponse: ClientResponse = new ClientResponse();

    clientResponse.fetch(uri, {
      ...requestOptions,
      method: verb,
    });

    return clientResponse
  }

  delete(pathName: string, requestData: RequestData, requestOptions: RequestOptions): ClientResponse {
    return this._interphase_fetch(HttpVerbs.DELETE, pathName, requestData, requestOptions);
  }
  get(pathName: string, requestData: RequestData, requestOptions: RequestOptions): ClientResponse {
    return this._interphase_fetch(HttpVerbs.GET, pathName, requestData, requestOptions);
  }
  patch(pathName: string, requestData: RequestData, requestOptions: RequestOptions): ClientResponse {
    return this._interphase_fetch(HttpVerbs.PATCH, pathName, requestData, requestOptions);
  }

  post(pathName: string, requestData: RequestData, requestOptions: RequestOptions): ClientResponse {
    return this._interphase_fetch(HttpVerbs.POST, pathName, requestData, requestOptions);
  }

  put(pathName: string, requestData: RequestData, requestOptions: RequestOptions): ClientResponse {
    return this._interphase_fetch(HttpVerbs.PUT, pathName, requestData, requestOptions);
  }
}

export default HttpClient;
