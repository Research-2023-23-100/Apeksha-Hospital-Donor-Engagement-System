import ItemModel from "../models/Item.model";

// Create a Item
export const insertItem = async (item) => {
	return await ItemModel.create(item)
		.then(async (item_data) => {
			await item_data.save();
			return item_data;
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

// get all Items
export const getAllItems = async () => {
	return await ItemModel.find({})
		.then((data) => {
			return data;
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

// get one Item Details
export const getItemDetails = async (itemId) => {
	return await ItemModel.findById(itemId)
		.then((item) => {
			return item;
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

// delete item
export const deleteItem = async (itemId) => {
	return await ItemModel.findByIdAndDelete(itemId)
		.then((item) => {
			if (item) {
				return item;
			} else {
				throw new Error("Item Not Found");
			}
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

export const incrementQuantity = async (itemId, incrementQuantity) => {
	try {
		const item = await ItemModel.findById(itemId);
		if (item) {
			// Perform addition to increment the quantity
			const updatedQuantity = item.QuantityInStock + incrementQuantity;

			// Update the quantity in the database
			await ItemModel.findByIdAndUpdate(itemId, { QuantityInStock: updatedQuantity });

			return {
				message: `Quantity incremented by ${incrementQuantity}`,
				newQuantity: updatedQuantity,
			};
		} else {
			throw new Error("Item Not Found");
		}
	} catch (error) {
		throw new Error(error.message);
	}
};
