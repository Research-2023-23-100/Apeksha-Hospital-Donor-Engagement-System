import ItemModel from "../models/Item.model";
import ItemService from "../services";

// Insert one Item
export const insertItem = async (request, response, next) => {
	if (await ItemModel.findOne({ ItemName: request.body.ItemName })) {
		request.handleResponse.errorRespond(response)("Item Name already exists");
		next();
	} else if (await ItemModel.findOne({ ItemID: request.body.ItemID })) {
		request.handleResponse.errorRespond(response)("Item ID already exists");
		next();
	} else {
		await ItemService.insertItem(request.body)
			.then((data) => {
				request.handleResponse.successRespond(response)(data);
				next();
			})
			.catch((error) => {
				request.handleResponse.errorRespond(response)(error.message);
				next();
			});
	}
};

// get all items details
export const getAllItems = async (request, response, next) => {
	await ItemService.getAllItems("users")
		.then(async (data) => {
			request.handleResponse.successRespond(response)(data);
			next();
		})
		.catch((error) => {
			request.handleResponse.errorRespond(response)(error.message);
			next();
		});
};

export const getItemDetails = async (req, res, next) => {
	await ItemService.getItemDetails(req.params.id)
		.then((data) => {
			req.handleResponse.successRespond(res)(data);
			next();
		})
		.catch((error) => {
			req.handleResponse.errorRespond(res)(error.message);
			next();
		});
};

export const deleteItem = async (request, response, next) => {
	await ItemService.deleteItem(request.params.id)
		.then((data) => {
			request.handleResponse.successRespond(response)(data);
			next();
		})
		.catch((error) => {
			request.handleResponse.errorRespond(response)(error.message);
			next();
		});
};

export const incrementQuantity = async (request, response, next) => {
	await ItemService.incrementQuantity(request.params.id, request.body.QuantityInStock)
		.then(async (data) => {
			request.handleResponse.successRespond(response)(data);
			next();
		})
		.catch((error) => {
			request.handleResponse.errorRespond(response)(error.message);
			next();
		});
};

export const decrementQuantity = async (request, response, next) => {
	await ItemService.decrementQuantity(request.params.id, request.body.QuantityInStock)
		.then(async (data) => {
			request.handleResponse.successRespond(response)(data);
			next();
		})
		.catch((error) => {
			request.handleResponse.errorRespond(response)(error.message);
			next();
		});
};
