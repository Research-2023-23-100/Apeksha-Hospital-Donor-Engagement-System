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
	BloodDonorHome,
	DonorEssentialDonate,
	DonorMedicationList,
	DonorDonationCreate,
	DonorMedicationCreate,
	HospitalStaffDashboard,
	BloodCampAdmin,
	OrganizerHome,
	GetAllCamps,
	StaffDonationView,
	DonorRegister,
	DonorLogin,
	DonorDashboard,
	HairDonation,
	BloodCampStaffDashboard,
	AllDonors,
	AboutUs,
	FAQ,
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
					<Route path="/donor/medication/donate/" element={<DonorMedicationList />} />
					<Route path="/hair" element={<HairDonation />} />
					<Route path="/about-us" element={<AboutUs />} />
					<Route path="/faq" element={<FAQ />} />

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
						<Route path="/staff/camp-dashboard" element={<BloodCampStaffDashboard />} />
						<Route path="/staff/all-donors" element={<AllDonors />} />
						<Route path="/staff/blood-donor-home" element={<BloodDonorHome />} />
						<Route path="/staff/blood-organizers" element={<ViewAllOrganizer />} />

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

						<Route exact path="/donor/medication/donatation/create/:medication" element={<DonorMedicationCreate />} />

						{/* Donor Essential Donation */}
						<Route path="/donor/essential/donate/" element={<DonorEssentialDonate />} />
						<Route exact path="/donor/donatation/create/:itemName" element={<DonorDonationCreate />} />

						{/* Hair donation Routes */}
						<Route path="/donor/Hair_Donation" element={<HairDonationHome />}/>

						{/* Hair sample upload 1 Routes */}
						<Route path="/donor/hair_sample" element={<HairSampleUpload1 />}/>

						{/* Hair sample upload 2 Routes */}
						<Route path="/donor/hair_sample2" element={<HairSampleUpload2 />}/>

						{/* Hair sample upload 3 Routes */}
						<Route path="/donor/hair_sample3" element={<HairSampleUpload3 />}/>

						{/* Hair Output 1 Routes */}
						<Route path="/donor/HairOutput1" element={<HairOutput1 />}/>
						
						{/* Hair Output 2 Routes */}
						<Route path="/donor/HairOutput2" element={<HairOutput2 />}/>
					
					    {/* Hair reject Routes */}
						<Route path="/donor/donateReject" element={<DonationReject />}/>

						{/* Hair donation successful Routes */}
						<Route path="/donor/Thankyou" element={<Thankyou />}/>

					</Route>




					{/* Organization Section */}
					<Route path="/org/login" element={<CheckLoginStatus />}>
						{/* <Route path="/org/login" element={<orgLogin />} /> */}
					</Route>
					
				
					
					{/* Organization Private Routes */}
					<Route path="/org" element={<PrivateRoute permissionLevel="ORGANIZATION" />}>
						{/* <Route path="/org" element={<orgDashboard />} /> */}
						<Route path="/org/camp-prediction" element={<CampPrediction />} />
						<Route path="/org/organizer-home" element={<OrganizerHome />} />
						<Route path="/org/organize-camp" element={<OrganizeDonationCamp />} />
					</Route>

					{/* <Route path="/donor_med_list" element={<DonorMedicationList />} /> */}
					

					<Route path="/under-review" element={<UnderReview />} />
					<Route path="/organizer-login" element={<OrganizerLogin />} />
					<Route path="/organizer-signup" element={<OrganizerSignup />} />
					<Route path="/donor-ask" element={<DonorHome />} />
					<Route path="/blood-camp-admin" element={<BloodCampAdmin />} />
					<Route path="/get-all-camps" element={<GetAllCamps />} />
				</Routes>

				<Footer />
			</Router>
		</>
	);
};

export default AppRoutes;
