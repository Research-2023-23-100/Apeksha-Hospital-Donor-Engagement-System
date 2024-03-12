import axios from "axios";
import requestConfig from "./requestConfig";
import requestConfigJson from "./requestConfigJson";

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

class DbItemAPI {
	static itemCreate(values) {
		return axios.post(`${BASE_URL}/item/create`, values, requestConfigJson);
	}

	static getAllItems() {
		return axios.get(`${BASE_URL}/item`, requestConfig);
	}
	static getOneItem(id) {
		return axios.get(`${BASE_URL}/item/${id}`, requestConfigJson);
	}

	static adding(id, values) {
		return axios.put(`${BASE_URL}/item/increment/${id}`, values, requestConfigJson);
	}

	static removeStock(id, values) {
		return axios.put(`${BASE_URL}/item/decrement/${id}`, values, requestConfigJson);
	}

	static deleteItem(id) {
		return axios.delete(`${BASE_URL}/item/delete/${id}`, requestConfig);
	}
}

export default DbItemAPI;
