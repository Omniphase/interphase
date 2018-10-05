interface Client {
	delete(path: string, requestData: RequestData, requestOptions: RequestOptions): ClientResponse<any>;
	get(path: string, requestData: RequestData, requestOptions: RequestOptions): ClientResponse<any>;
	patch(path: string, requestData: RequestData, requestOptions: RequestOptions): ClientResponse<any>;
	post(path: string, requestData: RequestData, requestOptions: RequestOptions): ClientResponse<any>;
	put(path: string, requestData: RequestData, requestOptions: RequestOptions): ClientResponse<any>;
}

interface RequestData{
	data: any;
	param: any;
	path: any;
}

interface RequestOptions{
	// TODO: Need to determine the full collection of what these will be
}

interface ClientResponse<T> extends Promise<T>{
	next: () => ClientResponse<T>;
}
