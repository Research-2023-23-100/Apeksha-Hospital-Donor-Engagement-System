import React, { useState } from "react";
import CampsPage from "../blood-donor-home-page/BloodDonorHome";
import DonorEssentialView from "../donar-essential-view";
import DonorMedicationView from "../donor-medicaion-view";


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
          onClick={() => setView("donEssentials")}
          className={`px-4 py-2 rounded-md ${
            view === "donEssentials" ? "bg-red-700 text-white" : "bg-gray-200"
          }`}
        >
          Essential Donation
        </button>
        <button
          onClick={() => setView("donMed")}
          className={`px-4 py-2 rounded-md ${
            view === "donMed" ? "bg-red-700 text-white" : "bg-gray-200"
          }`}
        >
          Medication Donation
        </button>
      </div>
      <div className="mt-8">
        {view === "bloodCampAdmin" && <CampsPage />}
        {view === "donEssentials" && <DonorEssentialView />}
        {view === "donMed" && <DonorMedicationView />}
      </div>
    </div>
  );
};

export default DonorMainDashboard;
