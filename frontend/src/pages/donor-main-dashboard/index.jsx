import React, { useState } from "react";
import CampsPage from "../blood-donor-home-page/BloodDonorHome";



const DonorMainDashboard = () => {
  const [view, setView] = useState("bloodCampAdmin");

  return (
    <div className="container mx-auto mt-[7rem]">
      <div className="flex justify-center space-x-4 mt-8">
        <button
          onClick={() => setView("bloodCampAdmin")}
          className={`px-4 py-2 rounded-md ${
            view === "bloodCampAdmin" ? "bg-red-700 text-white" : "bg-gray-200"
          }`}
        >
          Blood Campaigns
        </button>
        <button
          onClick={() => setView("getAllCamps")}
          className={`px-4 py-2 rounded-md ${
            view === "getAllCamps" ? "bg-red-700 text-white" : "bg-gray-200"
          }`}
        >
          Medication Donation
        </button>
        <button
          onClick={() => setView("allDonors")}
          className={`px-4 py-2 rounded-md ${
            view === "allDonors" ? "bg-red-700 text-white" : "bg-gray-200"
          }`}
        >
          Essential Donation
        </button>
      </div>
      <div className="mt-8">
        {view === "bloodCampAdmin" && <CampsPage />}
        {view === "getAllCamps" && <GetAllCamps />}
        {view === "allDonors" && <AllDonors />}
      </div>
    </div>
  );
};

export default DonorMainDashboard;
