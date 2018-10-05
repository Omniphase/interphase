import ClientResponse from './ClientResponse';

class HttpClient implements Client {

  delete(pathName: string, requestData: RequestData, requestOptions: RequestOptions): ClientResponse {

  }
  get(pathName: string, requestData: RequestData, requestOptions: RequestOptions): ClientResponse {
    const endpoint: Endpoint = getEndpointFromPathname(pathName);
    const path: string = endpoint.path;
    const options = parseOptions({
      ...endpoint.requestOptions,
      ...requestOptions,
    });

    const clientResponse: ClientResponse = new ClientResponse();

    clientResponse.fetch(path, {
      ...options,
      method: HttpVerbs.GET,
    });

    return clientResponse;
  }
  patch(pathName: string, requestData: RequestData, requestOptions: RequestOptions): ClientResponse {

  }

  post(pathName: string, requestData: RequestData, requestOptions: RequestOptions): ClientResponse {

  }

  put(pathName: string, requestData: RequestData, requestOptions: RequestOptions): ClientResponse {

  }
}

export default HttpClient;
