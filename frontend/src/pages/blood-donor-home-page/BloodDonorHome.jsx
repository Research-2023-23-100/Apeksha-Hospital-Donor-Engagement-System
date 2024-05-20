import React, { useEffect, useState } from "react";
import axios from "axios";
import imageblood from "../../assets/bloodbag.png";
import BloodDonorCarousel from "../carousel-home";

function CampsPage() {
  const [camps, setCamps] = useState([]);
  const [donors, setDonors] = useState([]);
  const [loadingCamps, setLoadingCamps] = useState(true);
  const [loadingDonors, setLoadingDonors] = useState(true);

  useEffect(() => {
    // Fetch all camps
    axios
      .get("http://localhost:5000/campaign")
      .then((response) => {
        console.log("All camps:", response.data.data);
        setCamps(response.data.data);
        setLoadingCamps(false);
      })
      .catch((error) => {
        console.error("Error fetching camps:", error);
        setLoadingCamps(false);
      });

    // Fetch all donors
    axios
      .get("http://localhost:5000/donor")
      .then((response) => {
        console.log("Donor data:", response.data);
        const donors = response.data;
        
        if (donors && Array.isArray(donors) && donors.length > 0) {
          // Sort donors by donatedCount in descending order
          const sortedDonors = donors.sort((a, b) => b.donatedCount - a.donatedCount);

          // Slice the first three donors
          const topThreeDonors = sortedDonors.slice(0, 3);
          console.log("Top three donors:", topThreeDonors);
          setDonors(topThreeDonors);
        } else {
          console.log("No donors found or invalid data structure");
        }
        setLoadingDonors(false);
      })
      .catch((error) => {
        console.error("Error fetching donors:", error);
        setLoadingDonors(false);
      });
  }, []);

  return (
    <div>
      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row mt-[2rem] ml-[3rem]">
        {/* Left Side Column with Image */}
        <div className="md:w-1/3">
          <BloodDonorCarousel />
        </div>

        {/* Right Side Column with Who Can Donate Blood, Top Blood Donors, and Upcoming Events */}
        <div className="md:w-1/3 md:ml-4">
          {/* Who Can Donate Blood Section */}
          <section className="mb-8 w-full ml-5">
            <h2 className="text-2xl font-bold mb-4">Who Can Donate Blood</h2>
            <p>
              <strong>Donate Blood</strong>
            </p>
            <p>
              <br />
              The person must fulfill several criteria to be accepted as a blood donor. These criteria are set forth to
              ensure the safety of the donor as well as the quality of donated blood.
            </p>
            <br />
            <p>
              <strong>Donor Selection Criteria</strong>
              <br />
              <br />
              Age above 18 years and below 60 years.
              <br />
              If previously donated, at least 4 months should be elapsed since the date of previous donation.
              <br />
              Hemoglobin level should be more than 12g/dL. (this blood test is done prior to each blood donation)
              <br />
              Free from any serious disease condition or pregnancy.
              <br />
              Should have a valid identity card or any other document to prove the identity.
            </p>
          </section>
        </div>
        {/* Top Blood Donors */}
        <section className="mb-8 w-[15rem] ml-[6rem]">
          <h2 className="text-2xl font-bold mb-4">Top Blood Donors</h2>
          <div className="flex flex-col">
            {loadingDonors ? (
              <p>Loading donors...</p>
            ) : donors.length === 0 ? (
              <p>No donors available</p>
            ) : (
              donors.map((donor, index) => (
                <div key={index} className="bg-white shadow-md rounded-md p-4 mb-4">
                  <h3 className="text-xl font-semibold mb-2">{donor.name}</h3>
                  <p>Donations: {donor.donatedCount}</p>
                </div>
              ))
            )}
          </div>
        </section>
      </div>
      <div className="mt-[5rem] w-full p-10">
        {/* Upcoming Events */}
        <div className="mb-8 max-w-full">
          <h2 className="text-2xl font-bold mb-4">Upcoming Blood Camp Events</h2>
        </div>
        {loadingCamps ? (
          <p>Loading...</p>
        ) : camps.length === 0 ? (
          <p>No camps available</p>
        ) : (
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {camps
              .filter((camp) => camp.accountStatus === "Approved")
              .map((camp) => (
                <div key={camp._id} className="bg-white shadow-md rounded-md p-4">
                  <img src={imageblood} alt="Camp" />
                  <h3 className="text-xl font-semibold mb-2">Place: {camp.place}</h3>
                  <p className="text-xl font-semibold">Date: {new Date(camp.date).toLocaleDateString()}</p>
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default CampsPage;
