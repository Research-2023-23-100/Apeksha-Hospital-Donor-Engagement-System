import axios from "axios";
import requestConfig from "./requestConfig";
import requestConfigJson from "./requestConfigJson";

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

class StaffAPI {
	// Create Staff
	static register(values) {
		return axios.post(`${BASE_URL}/staff/register`, values, requestConfigJson);
	}
    // Login Staff
	static login(values) {
		return axios.post(`${BASE_URL}/staff/login`, values, requestConfigJson);
	}
    // get all staff details
	static getAll() {
		return axios.get(`${BASE_URL}/staff`, requestConfig);
	}
    // get one staff details
	static getOne(id) {
		return axios.get(`${BASE_URL}/staff/${id}`, requestConfigJson);
	}
    // update staff
	static edit(id, values) {
		return axios.put(`${BASE_URL}/staff/update/${id}`, values, requestConfigJson);
	}
    // delete staff
	static delete(id) {
		return axios.delete(`${BASE_URL}/staff/delete/${id}`, requestConfig);
	}
}

export default StaffAPI;
