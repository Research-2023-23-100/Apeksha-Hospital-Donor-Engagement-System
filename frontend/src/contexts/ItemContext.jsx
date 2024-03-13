import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import makeToast from "../components/toast";
import ItemAPI from "./api/ItemAPI";
import DbItemAPI from "./api/DbItemsAPI";

const ItemContext = createContext();

export function ItemProvider({ children }) {
	const [items, setItems] = useState([]);
	const [itemError, setItemError] = useState();
	const [dbItems, setDbItems] = useState([]);
	const [dbItem, setDbItem] = useState({
		ItemName: "",
		ItemID: "",
		QuantityInStock: "",
		image: "",
	});

	//Get all Prediction Values
	useEffect(() => {
		ItemAPI.getAll().then((response) => {
			setItems(response.data.predictions);
		});
	}, []);

	// Create New Item Staff users
	const createItem = async (values) => {
		try {
			const response = await DbItemAPI.itemCreate(values);
			setDbItems([...dbItems, response]);
			makeToast({ type: "success", message: "Item Created successful" });
		} catch (error) {
			makeToast({ type: "error", message: "Item not created" });
		}
	};

	// View all items
	useEffect(() => {
		DbItemAPI.getAllItems().then((response) => {
			setDbItems(response.data);
		});
	}, []);

	// Increment Stock Quantity
	const addStock = (id, values) => {
		// const newQuantity = {
		// 	QuantityInStock: values.QuantityInStock,
		// };
		// console.log(newQuantity)

		DbItemAPI.adding(id, { QuantityInStock: values })

			.then((response) => {
				makeToast({ type: "success", message: "Quantity Increment" });
			})
			.catch((error) => {
				console.log(error);
			});
	};

	// Increment Stock Quantity
	const removeStock = (id, values) => {
		// const newQuantity = {
		// 	QuantityInStock: values.QuantityInStock,
		// };
		// console.log(newQuantity)

		DbItemAPI.removeStock(id, { QuantityInStock: values })

			.then((response) => {
				makeToast({ type: "success", message: "Quantity Decrement" });
			})
			.catch((error) => {
				console.log(error);
			});
	};

	// get one item
	const getOneDbItem = (id) => {
		useEffect(() => {
			DbItemAPI.getOneItem(id).then((res) => {
				setDbItem(res.data);
			});
		}, []);
	};

	return (
		<ItemContext.Provider
			value={{
				items,
				setItems,
				itemError,
				setItemError,
				createItem,
				dbItems,
				setDbItems,
				dbItem,
				setDbItem,
				getOneDbItem,
				addStock,
				removeStock,
			}}
		>
			{children}
		</ItemContext.Provider>
	);
}

export default ItemContext;
