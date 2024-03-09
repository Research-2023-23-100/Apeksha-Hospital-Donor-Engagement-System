import axios from "axios";
import requestConfig from "./requestConfig";
import requestConfigJson from "./requestConfigJson";

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

class OrganizationAPI {
	// Create Donor
	static register(values) {
		return axios.post(`${BASE_URL}/org/register`, values, requestConfigJson);
	}
	// Login Donor
	static login(values) {
		return axios.post(`${BASE_URL}/org/login`, values, requestConfigJson);
	}
	// get all donor details
	static getAll() {
		return axios.get(`${BASE_URL}/org`, requestConfig);
	}
	// get one donor details
	static getOne(id) {
		return axios.get(`${BASE_URL}/org/${id}`, requestConfigJson);
	}
	// update donor
	static edit(id, values) {
		return axios.put(`${BASE_URL}/org/update/${id}`, values, requestConfigJson);
	}
	// delete donor
	static delete(id) {
		return axios.delete(`${BASE_URL}/org/delete/${id}`, requestConfig);
	}
}

export default OrganizationAPI;
