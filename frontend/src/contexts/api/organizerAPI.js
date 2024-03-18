import axios from "axios";
import requestConfig from "./requestConfig";
import requestConfigJson from "./requestConfigJson";

const BASE_URL = import.meta.env.VITE_BACKEND_URL;

class OrganizerAPI {
	// Organizer login
	static login(values) {
		return axios.post(`${BASE_URL}/org/login`, values, requestConfigJson);
	}

	// Organizer Register
	static register(values) {
		return axios.post(`${BASE_URL}/org/register`, values, requestConfigJson);
	}

	// Get all Organizers
	static getOrganizers() {
		return axios.get(`${BASE_URL}/org/organizers`, requestConfig);
	}

	// Get one Organizer
	static getOneOrganizer(id) {
		return axios.get(`${BASE_URL}/org/organizer/${id}`, requestConfigJson);
	}

	// Edit Organizer
	static editOrganizer(id, newOrganizer) {
		return axios.put(`${BASE_URL}/org/organizer/update/${id}`, newOrganizer, requestConfig);
	}

	// Delete Organizer
	static deleteOrganizer(id) {
		return axios.delete(`${BASE_URL}/org/organizer/delete/${id}`, values, requestConfigJson);
	}
}

export default OrganizerAPI;
