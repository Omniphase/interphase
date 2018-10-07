import { fetch } from 'cross-fetch';
import { IClientRequest, RequestOptions } from './IClientRequest';

class ClientRequest implements IClientRequest<any> {
  callbacks: Array<Function>;
  error: any;
  loading: boolean;
  promise: Promise<any>;
  response: any;

  constructor() {
    this.callbacks = [];
  }

  fetch(url: string, options: RequestOptions) {
    this.promise = fetch(url, options).then((response: any) => {
      this.loading = false;
      this.response = response;
      this.error = null;

      // Call all of the callbacks created by `next` calls
      if (this.callbacks.length > 0) {
        this.callbacks.forEach(callback => {
          callback({ loading: this.loading, error: this.error, response: this.response })
        })
      }
    }).catch((error: any) => {
      this.loading = false;
      this.response = null;
      this.error = error;

      // Call all of the callbacks created by `next` calls
      if (this.callbacks.length > 0) {
        this.callbacks.forEach(callback => {
          callback({ loading: this.loading, error: this.error, response: this.response })
        })
      }
    })
  }

  private static createClientResponse(args: any) {
    if (args instanceof Promise) {
      // TODO: Wrap promise in ClientResponse 
    }
    else if (args instanceof ClientRequest) {
      // TODO: Build new ClientResponse
    }
    else {
      // TODO: Wrap whatever value in ClientResponse
    }
  }

  catch(callback: Function) {
    // Add the users `catch` call onto the promise and save the result then wrap it and return a new ClientResponse
    const retVal = this.promise.catch(callback);
    return ClientRequest.createClientResponse(retVal);
  }

  then(callback: Function) {
    // Add the users `then` call onto the promise and save the result then wrap it and return a new ClientResponse
    const retVal = this.promise.then(callback);
    return ClientRequest.createClientResponse(retVal);
  }
}

export default ClientRequest;