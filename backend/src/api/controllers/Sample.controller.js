import SampleService from "../services";

export const insert = async (request, response, next) => {
	await SampleService.insert(request.body)
		.then((data) => {
			request.handleResponse.successRespond(response)(data);
			next();
		})
		.catch((error) => {
			request.handleResponse.errorRespond(response)(error.message);
			next();
		});
};
