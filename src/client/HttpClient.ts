import ClientResponse from './ClientResponse';

class HttpClient implements Client {

  private _interphase_fetch(verb: HttpVerbs, pathName: string, requestData: RequestData, overrideOptions: RequestOptions): ClientResponse {
    const endpoint: Endpoint = getEndpointFromPathname(pathName);
    const { uri, requestOptions } = endpoint;
    const options = parseOptions({
      ...requestOptions,
      ...overrideOptions,
    });

    const clientResponse: ClientResponse = new ClientResponse();

    clientResponse.fetch(uri, {
      ...options,
      method: verb,
    });

    return clientResponse
  }

  delete(pathName: string, requestData: RequestData, requestOptions: RequestOptions): ClientResponse<any> {
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
