import { Endpoint } from './endpoint/Endpoint';
import { HttpOptions, RequestOptions } from './client/request/IClientRequest'
import { BodyType, HttpVerbs } from './client/Client';

/**
 * Takes client options and parses them into cross-fetch options
 */
export const parseOptions = (options: RequestOptions): Partial<HttpOptions> => {
  return {
    method: HttpVerbs.GET,
    body: BodyType.STRING,
    headers: {},
    credentials: "omit",
  }

}

/**
 * 
 */

export const getEndpointFromPathname = (pathName: string): Endpoint => {
  return {
    uri: "https://lol",
    name: "name",
  }
}