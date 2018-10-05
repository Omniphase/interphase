
interface Endpoint{
	uri: string;
	name: string;
	methods?: Array<HttpVerbs>;
	retry?: (func: Function) => boolean;
	options?: Partial<EndpointOptions>;
}

interface EndpointOptions extends Partial<Options>{	
	test: string;
	// TODO: Need to determine the full collection of what these will be
}

enum HttpVerbs{
	GET = "GET",
	POST = "POST",
	PUT = "PUT",
	DELETE = "DELETE",
	PATCH = "PATCH",
}

// TODO: Define the shape of these
interface Part{
	
}

