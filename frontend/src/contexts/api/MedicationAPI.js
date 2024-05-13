import axios from "axios";
import requestConfig from "./requestConfig";
import requestConfigJson from "./requestConfigJson";

const BASE_URL = import.meta.env.VITE_BACKEND_URL_MEDICATION;

class MedicationAPI {
	// get all donor details
	static getAllShortages() {
		return axios.get(`${BASE_URL}/predict_all_shortages`);
	}
	// get one donor details
	static getAllCritical() {
		return axios.get(`${BASE_URL}/critical_pred`);
	}
}

export default MedicationAPI;
