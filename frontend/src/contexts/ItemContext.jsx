import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import makeToast from "../components/toast";
import ItemAPI from "./api/ItemAPI";

const ItemContext = createContext();

export function ItemProvider({ children }) {
	const [items, setItems] = useState([]);
	const [itemError, setItemError] = useState();

	//Get all Prediction Values
	useEffect(() => {
		ItemAPI.getAll().then((response) => {
			setItems(response.data.predictions);
		});
	}, []);

	// Create New Item Staff users
	const createItem = async (values) => {
		try {
			const response = await ItemAPI.createItem(values);
			setItems([...items, response.data]);
			makeToast({ type: "success", message: "Item Created successful" });
		} catch (error) {
			if (error.response.data.details == "Item name already exists") {
				makeToast({ type: "error", message: "Item name already exists" });
				setItemError(error.response.data.details);
			} else if (error.response.data.details == "Item code already exist") {
				makeToast({ type: "error", message: "Item code already exists" });
				setItemError(error.response.data.details);
			} else {
				makeToast({ type: "error", message: "Item not created" });
			}
		}
	};

	// View all items
	useEffect(() => {
		ItemAPI.getAllItems().then((response) => {
			setItems(response.data.predictions);
		});
	}, []);

	return (
		<ItemContext.Provider
			value={{
				items,
				setItems,
				itemError,
				setItemError,
				createItem,
			}}
		>
			{children}
		</ItemContext.Provider>
	);
}

export default ItemContext;
