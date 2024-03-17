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
	// get all organization details
	static getAllOrganizations() {
		return axios.get(`${BASE_URL}/org`, requestConfig);
	}
	// get one organization details
	static getOneOrganization(id) {
		return axios.get(`${BASE_URL}/org/${id}`, requestConfigJson);
	}
	// update organization
	static editOrganization(id, values) {
		return axios.put(`${BASE_URL}/org/update/${id}`, values, requestConfigJson);
	}
	// delete organization
	static deleteOrganization(id) {
		return axios.delete(`${BASE_URL}/org/delete/${id}`, requestConfig);
	}
	// Update donor status
	static updateDonorStatus(id, values) {
		return axios.put(`${BASE_URL}/org/donor/update/${id}`, values, requestConfigJson);
	}
	// Get donor status
	static getDonorStatus(email) {
		return axios.get(`${BASE_URL}/org/donor/status`, { params: { email }, ...requestConfig });
	}
}

export default OrganizationAPI;
