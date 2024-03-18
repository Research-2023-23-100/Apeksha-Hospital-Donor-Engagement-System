import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import CheckLoginStatus from "./CheckLoginStatus";

import Header from "../components/Header";
import Footer from "../components/Footer";

import {
	Home,
	StaffLogin,
	StaffDashboard,
	StaffEssentialItems,
	StaffCreateItem,
	StaffViewAllItems,
	MedicationDashboard,
	CampPrediction,
	DonorHome,
	OrganizerSignup,
	UnderReview,
	ViewAllOrganizer,
	OrganizerLogin,
	OrganizeDonationCamp,
	StaffDonationStatus,
	DonorEssentialsList,
	BloodDonorHome,
	DonorEssentialDonate,
	DonorMedicationList,
	DonorDonationCreate,
	DonorMedicationCreate,
	HospitalStaffDashboard,
	BloodCampAdmin,
	OrganizerHome,
	GetAllBloodCamps,
	StaffDonationView,
	DonorRegister,
	DonorLogin,
	DonorDashboard,

} from "../pages";
const AppRoutes = () => {
	return (
		<>
			<Router>
				<Header />

				<Routes>
					{/* Public Routes */}
					<Route path="/" element={<Home />} />
					<Route path="/donor/essentials/list" element={<DonorEssentialsList />} />
					<Route path="/donor/register" element={<DonorRegister />} />

					{/* Staff Section */}
					{/* Staff Check Login Status */}
					<Route path="/staff/login" element={<CheckLoginStatus />}>
						<Route path="/staff/login" element={<StaffLogin />} />
					</Route>

					{/* Staff Private Routes */}
					<Route path="/staff" element={<PrivateRoute permissionLevel="STAFF" />}>
						<Route path="/staff" element={<StaffDashboard />} />
						<Route path="/staff/essentials" element={<StaffEssentialItems />} />
						<Route path="/staff/item/create" element={<StaffCreateItem />} />
						<Route path="/staff/item/" element={<StaffViewAllItems />} />
						<Route path="/staff/donation/" element={<StaffDonationStatus />} />
						<Route path="/staff/medication" element={<MedicationDashboard />} />
						<Route path="/staff/donation/list" element={<StaffDonationView />} />
						<Route path="/staff/dashboard" element={<HospitalStaffDashboard />} />


						{/* Need to change file route as donor */}


					</Route>

					{/* Donor Section */}
					{/* Donor Check Login Status */}
					<Route path="/donor/login" element={<CheckLoginStatus />}>
						<Route path="/donor/login" element={<DonorLogin />} />
					</Route>

					{/* Donor Private Routes */}
					<Route path="/donor" element={<PrivateRoute permissionLevel="DONOR" />}>
						<Route path="/donor" element={<DonorDashboard />} />
						{/* Donor Medication Donation */}
						<Route path="/donor/medication/donate/" element={<DonorMedicationList />} />
						<Route exact path="/donor/medication/donatation/create/:medication" element={<DonorMedicationCreate />} />

						{/* Donor Essential Donation */}
						<Route path="/donor/essential/donate/" element={<DonorEssentialDonate />} />
						<Route exact path="/donor/donatation/create/:itemName" element={<DonorDonationCreate />} />

					</Route>

					{/* Organization Section */}
					<Route path="/org/login" element={<CheckLoginStatus />}>
						{/* <Route path="/org/login" element={<orgLogin />} /> */}
					</Route>

					{/* Organization Private Routes */}
					<Route path="/org" element={<PrivateRoute permissionLevel="ORGANIZATION" />}>
						{/* <Route path="/org" element={<orgDashboard />} /> */}
					</Route>

					{/* <Route path="/donor_med_list" element={<DonorMedicationList />} /> */}
					<Route path="/camp-prediction" element={<CampPrediction />} />

					<Route path="/under-review" element={<UnderReview />} />

					<Route path="/organizer-login" element={<OrganizerLogin />} />
					<Route path="/organizer-signup" element={<OrganizerSignup />} />
					<Route path="/organizer-home" element={<OrganizerHome />} />

					<Route path="/blood-organizers" element={<ViewAllOrganizer />} />
					<Route path="/organize-camp" element={<OrganizeDonationCamp />} />
					<Route path="/blood-donor-home" element={<BloodDonorHome />} />

					<Route path="/donor-ask" element={<DonorHome />} />
					<Route path="/blood-camp-admin" element={<BloodCampAdmin />} />
					<Route path="/get-all-blood-camps" element={<GetAllBloodCamps />} />
				</Routes>

				<Footer />
			</Router>
		</>
	);
};

export default AppRoutes;
