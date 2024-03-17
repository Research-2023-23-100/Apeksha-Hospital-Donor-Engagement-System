import axios from "axios";

const BASE_URL = "http://localhost:3000";

class OrganizerAPI {
	// Organizer login
	static login(values) {
		return axios.post(`${BASE_URL}/organizer/login`, values);
	}

	// Organizer Register
	static register(values) {
		return axios.post(`${BASE_URL}/organizer/register`, values);
	}

	// Get all Organizers
	static getOrganizers() {
		return axios.get(`${BASE_URL}/organizer/organizers`);
	}

	// Get one Organizer
	static getOneOrganizer(id) {
		return axios.get(`${BASE_URL}/organizer/organizer/${id}`);
	}

	// Edit Organizer
	static editOrganizer(id, newOrganizer) {
		return axios.put(`${BASE_URL}/organizer/organizer/update/${id}`, newOrganizer);
	}

	// Delete Organizer
	static deleteOrganizer(id) {
		return axios.delete(`${BASE_URL}/organizer/organizer/delete/${id}`);
	}
}

export default OrganizerAPI;
