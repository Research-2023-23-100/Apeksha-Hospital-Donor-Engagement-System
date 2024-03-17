import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Chart from 'chart.js/auto';

const BASE_URL = "http://localhost:3000";

function BloodCampAdmin() {
  const [organizers, setOrganizers] = useState([]);

  useEffect(() => {
    getAllOrganizers();
  }, []);

  const getAllOrganizers = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/organizer/organizers`);
      setOrganizers(response.data.organizers);
      console.log("All Organizers:", response.data.organizers);
      renderPieChart();
    } catch (error) {
      console.error("Error fetching organizers:", error);
    }
  };

  const renderPieChart = () => {
    console.log("Organizers for chart:", organizers);
    // Your chart rendering logic here
  };

  return (
    <div>
      <h1>BloodCampAdmin</h1>
      <div>
        <canvas id="organizerStatusChart" width="400" height="400"></canvas>
      </div>
      <div>
        <h2>All Organizers</h2>
        <ul>
          {organizers.map((organizer, index) => (
            <li key={index}>
              {organizer.name} - {organizer.accountStatus}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default BloodCampAdmin;
