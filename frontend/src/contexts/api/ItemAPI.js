import axios from "axios";
import requestConfig from "./requestConfig";
import requestConfigJson from "./requestConfigJson";

const BASE_URL = import.meta.env.VITE_BACKEND_URL;
const MODEL_BASE_URL = import.meta.env.VITE_BACKEND_URL_MODEL;

class ItemAPI {
	static getAll() {
		return axios.get(`${MODEL_BASE_URL}/all`, requestConfig);
	}
}

export default ItemAPI;
