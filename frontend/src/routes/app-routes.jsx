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
	HairDonationHome,
	HairSampleUpload1,
	HairSampleUpload2,
	HairSampleUpload3,
	DonationReject,
	Thankyou,
	HairOutput1,
	HairOutput2,
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
					</Route>

					{/* Donor Section */}
					{/* Donor Check Login Status */}
					<Route path="/donor/login" element={<CheckLoginStatus />}>
						{/* <Route path="/donor/login" element={<donroLogin />} /> */}
					</Route>

					{/* Donor Private Routes */}
					<Route path="/donor" element={<PrivateRoute permissionLevel="DONOR" />}>
						<Route path="/donor" element={<StaffDashboard />} />
					</Route>

					{/* Organization Section */}
					<Route path="/org/login" element={<CheckLoginStatus />}>
						{/* <Route path="/org/login" element={<orgLogin />} /> */}
					</Route>
					{/* Hair donation Routes */}
					<Route path="/Hair_Donation" element={<HairDonationHome />}>
						{/* <Route path="/donor/login" element={<donroLogin />} /> */}
					</Route>
					<Route path="/donateReject" element={<DonationReject />}>
						{/* <Route path="/donor/login" element={<donroLogin />} /> */}
					</Route>
					<Route path="/Thankyou" element={<Thankyou />}>
						{/* <Route path="/donor/login" element={<donroLogin />} /> */}
					</Route>
					<Route path="/hair_sample" element={<HairSampleUpload1 />}>
						{/* <Route path="/donor/login" element={<donroLogin />} /> */}
					</Route>
					<Route path="/hair_sample2" element={<HairSampleUpload2 />}>
						{/* <Route path="/donor/login" element={<donroLogin />} /> */}
					</Route>
					<Route path="/HairOutput1" element={<HairOutput1 />}>
						{/* <Route path="/donor/login" element={<donroLogin />} /> */}
					</Route>
					<Route path="/HairOutput2" element={<HairOutput2 />}>
						{/* <Route path="/donor/login" element={<donroLogin />} /> */}
					</Route>
					<Route path="/hair_sample3" element={<HairSampleUpload3/>}>
						{/* <Route path="/donor/login" element={<donroLogin />} /> */}
					</Route>
					{/* Organization Private Routes */}
					<Route path="/org" element={<PrivateRoute permissionLevel="ORGANIZATION" />}>
						{/* <Route path="/org" element={<orgDashboard />} /> */}
					</Route>
					<Route path="/medication" element={<MedicationDashboard />} />
					<Route path="/camp-prediction" element={<CampPrediction />} />

					<Route path="/under-review" element={<UnderReview />} />

					<Route path="/organizer-login" element={<OrganizerLogin />} />
					<Route path="/organizer-signup" element={<OrganizerSignup />} />

					<Route path="/blood-organizers" element={<ViewAllOrganizer />} />
					<Route path="/organize-camp" element={<OrganizeDonationCamp />} />
					<Route path="/donor-home" element={<DonorHome />} />
				</Routes>

				<Footer />
			</Router>
		</>
	);
};

export default AppRoutes;
