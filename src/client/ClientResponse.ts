import { fetch } from 'cross-fetch';

class ClientResponse implements ClientResponse {
  callbacks: Array<Function>;
  error: any;
  loading: boolean;
  promise: Promise<any>;
  response: any;

  constructor() {
    this.callbacks = [];
  }

  private fetch(url: string, options: FetchOptions) {
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
    else if (args instanceof ClientResponse) {
      // TODO: Build new ClientResponse
    }
    else {
      // TODO: Wrap whatever value in ClientResponse
    }
  }

  catch(callback: Function) {
    // Add the users `catch` call onto the promise and save the result then wrap it and return a new ClientResponse
    const retVal = this.promise.catch(callback);
    return ClientResponse.createClientResponse(retVal);
  }

  next(callback: Function) {
    this.callbacks.push(callback);

    // Call the callback immediately to provide a loading indication
    const retVal = callback({ loading: this.loading, error: this.error, response: this.response })

    return CilentResponse.createClientResponse(retVal);
  }

  then(callback: Function) {
    // Add the users `then` call onto the promise and save the result then wrap it and return a new ClientResponse
    const retVal = this.promise.then(callback);
    return ClientResponse.createClientResponse(retVal);
  }
}

export default ClientResponse;