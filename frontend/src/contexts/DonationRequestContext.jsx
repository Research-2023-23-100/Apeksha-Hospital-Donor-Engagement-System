import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import makeToast from "../components/toast";
import DonationRequestAPI from "./api/DonationRequestAPI";

const DonationRequestContext = createContext();

export function DonationRequestProvider({ children }) {
	const [donations, setDonations] = useState([]);
	const [donation, setDonation] = useState({
		ItemName: "",
		quantity: "",
		userId: "",
		name: "",
		email: "",
		date: "",
		donationType: "",
		status: "",
	});

	// create donation

	const addDonation = async (values) => {
		try {
			const response = await DonationRequestAPI.create(values);
			setDonations([...donations, response.data]);
			makeToast({ type: "success", message: "Donation Request successful" });
			window.location.reload();
		} catch (error) {
			console.log(error);
		}
	};

	// Get all donation
	useEffect(() => {
		DonationRequestAPI.getAll().then((response) => {
			setDonations(response.data);
		});
	}, []);

	// Get one Donation
	const getOneDonation = (id) => {
		useEffect(() => {
			DonationRequestAPI.getOne(id).then((res) => {
				setDonation(res.data);
			});
		}, []);
	};

	// Delete Donation
	const deleteDonation = (id) => {
		DonationRequestAPI.deleteDonation(id).then(() => {
			setDonations(donations.filter((donation) => donation._id !== id));
			makeToast({ type: "success", message: "Donatation deleted" });
		});
	};

	// Active Course
	const changeStatus = (values) => {
		const newStatus = {
			status: values.status,
		};
		DonationRequestAPI.changeStatus(values.id, newStatus)
			.then((response) => {
				console.log(" Status updated successfully...");
			})
			.catch((err) => {
				// eslint-disable-next-line no-console
				console.log(err);
			});
	};

	return (
		<DonationRequestContext.Provider
			value={{
				donations,
				setDonations,
				donation,
				setDonation,
				addDonation,
				getOneDonation,
				deleteDonation,
				changeStatus,
			}}
		>
			{children}
		</DonationRequestContext.Provider>
	);
}

export default DonationRequestContext;
