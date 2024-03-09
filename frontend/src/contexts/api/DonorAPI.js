import axios from "axios";
import requestConfig from "./requestConfig";
import requestConfigJson from "./requestConfigJson";

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

class DonorAPI {

    	// Create Donor
	static register(values) {
		return axios.post(`${BASE_URL}/donor/register`, values, requestConfigJson);
	}
    // Login Donor
	static login(values) {
		return axios.post(`${BASE_URL}/donor/login`, values, requestConfigJson);
	}
    // get all donor details
	static getAll() {
		return axios.get(`${BASE_URL}/donor`, requestConfig);
	}
    // get one donor details
	static getOne(id) {
		return axios.get(`${BASE_URL}/donor/${id}`, requestConfigJson);
	}
    // update donor
	static edit(id, values) {
		return axios.put(`${BASE_URL}/donor/update/${id}`, values, requestConfigJson);
	}
    // delete donor
	static delete(id) {
		return axios.delete(`${BASE_URL}/donor/delete/${id}`, requestConfig);
	}

}

export default DonorAPI;
