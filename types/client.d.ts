interface Client {
	delete(pathName: string, requestData: RequestData, requestOptions: RequestOptions): ClientResponse<any>;
	get(pathName: string, requestData: RequestData, requestOptions: RequestOptions): ClientResponse<any>;
	patch(pathName: string, requestData: RequestData, requestOptions: RequestOptions): ClientResponse<any>;
	post(pathName: string, requestData: RequestData, requestOptions: RequestOptions): ClientResponse<any>;
	put(pathName: string, requestData: RequestData, requestOptions: RequestOptions): ClientResponse<any>;
}

interface RequestData {
	data: any;
	param: any;
	path: any;
}

interface RequestOptions {
	// TODO: Need to determine the full collection of what these will be
}

interface ClientResponse<T> extends Promise<T> {
	fetch: (url: string, options: RequestOptions) => void;
	next: () => ClientResponse<T>;
}
