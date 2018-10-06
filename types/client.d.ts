interface Client {
	delete(pathName: string, requestData: RequestData, requestOptions: RequestOptions): IClientResponse<any>;
	get(pathName: string, requestData: RequestData, requestOptions: RequestOptions): IClientResponse<any>;
	patch(pathName: string, requestData: RequestData, requestOptions: RequestOptions): IClientResponse<any>;
	post(pathName: string, requestData: RequestData, requestOptions: RequestOptions): IClientResponse<any>;
	put(pathName: string, requestData: RequestData, requestOptions: RequestOptions): IClientResponse<any>;
}

interface RequestData {
	data: any;
	param: any;
	path: any;
}

interface RequestOptions {
	// TODO: Need to determine the full collection of what these will be
}

interface IClientResponse<T> extends Promise<T> {
	fetch: (url: string, options: RequestOptions) => void;
	then: (callback: Function) => any;
	catch: (callback: Function) => any;
}
