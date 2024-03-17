import axios from "axios";
import requestConfig from "./requestConfig";
import requestConfigJson from "./requestConfigJson";

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

class MedicationAPI {
	// get all donor details
	static getAllShortages() {
		return axios.get("http://127.0.0.1:8000/predict_all_shortages");
	}
	// get one donor details
	static getAllCritical(id) {
		return axios.get("http://127.0.0.1:8000/critical_pred");
	}
}

export default MedicationAPI;
