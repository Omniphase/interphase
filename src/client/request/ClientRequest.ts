import { fetch } from 'cross-fetch';
import { IClientRequest, RequestOptions } from './IClientRequest';

class ClientRequest implements IClientRequest {
  error: any;
  loading: boolean;
  promise: Promise<any>;
  response: any;

  constructor(promise?: Promise<any>) {
    this.loading = false;
    this.error = null;
    this.response = null;
    // FIXME: This should be probably be initialized to an empty promise
    this.promise = null;
    if (promise) {
      this.promise = promise;
      this.loading = true;
      this.promise.then((response: any) => {
        this.loading = false;
        this.response = response;
        this.error = null;
      }).catch((error: any) => {
        this.loading = false;
        this.response = null;
        this.error = error;
      })
    }
  }

  fetch(url: string, options: RequestOptions) {
    this.promise = fetch(url, options).then((response: any) => {
      this.loading = false;
      this.response = response;
      this.error = null;
    }).catch((error: any) => {
      this.loading = false;
      this.response = null;
      this.error = error;
    })
  }

  catch(callback: ((reason: any) => Promise<any>)) {
    // Add the users `catch` call onto the promise and then wrap the result into a new ClientResponse
    const retVal = this.promise.catch(callback);
    return new ClientRequest(retVal);
  }

  then(callback: ((value: any) => Promise<any>)) {
    // Add the users `then` call onto the promise and then wrap the result into a new ClientResponse
    const retVal = this.promise.then(callback);
    return new ClientRequest(retVal);
  }
}

export default ClientRequest;