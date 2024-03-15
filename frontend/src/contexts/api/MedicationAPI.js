import axios from "axios";
import requestConfig from "./requestConfig";
import requestConfigJson from "./requestConfigJson";

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

class MedicationAPI {
	// get all donor details
	static getAll() {
		return axios.get("http://127.0.0.1:8000/predict_all_shortages");
	}
	// get one donor details
	static getOne(id) {
		return axios.get(`${BASE_URL}/org/${id}`, requestConfigJson);
	}
}

export default MedicationAPI;
