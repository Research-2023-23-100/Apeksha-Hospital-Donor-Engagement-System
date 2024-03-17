import axios from "axios";
import requestConfig from "./requestConfig";
import requestConfigJson from "./requestConfigJson";

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

class DonationRequestAPI {
	// create donation
	static create(values) {
		return axios.post(`${BASE_URL}/donation/request`, values, requestConfigJson);
	}

	// get all donation
	static getAll() {
		return axios.get(`${BASE_URL}/donation/request/`, requestConfig);
	}

	// get one donation
	static getOne(id) {
		return axios.get(`${BASE_URL}/donation/request/${id}`, requestConfigJson);
	}
	// Delete donation
	static deleteDonation(id) {
		return axios.delete(`${BASE_URL}/donation/request/delete/${id}`, requestConfig);
	}
	// Change Donation Status
	static changeStatus(id, values) {
		return axios.put(`${BASE_URL}/donation/request/status/${id}`, values, requestConfigJson);
	}
}

export default DonationRequestAPI;
