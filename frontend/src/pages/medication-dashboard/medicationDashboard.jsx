import React, { useContext, useState, useEffect, useRef } from "react";
import MedicationContext from "../../contexts/MedicationContext";
import Chart from "chart.js/auto";

const MedicationDashboard = () => {
  const { medications } = useContext(MedicationContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [medicationsPerPage] = useState(5);
  const [shortageFilter, setShortageFilter] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [shortageData, setShortageData] = useState({});
  const chartRef = useRef(null);

  useEffect(() => {
    // Calculate shortage data
    const shortageCounts = {
      shortaged: 0,
      "not shortaged": 0
    };

    medications.forEach(medication => {
      shortageCounts[medication.shortaged]++;
    });

    setShortageData(shortageCounts);

    // Destroy previous chart instance
    if (chartRef.current !== null) {
      chartRef.current.destroy();
    }

    // Create chart
    const ctx = document.getElementById("shortageChart");
    chartRef.current = new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["Shortaged", "Not Shortaged"],
        datasets: [{
          label: "Medication Shortage",
          data: [shortageCounts.shortaged, shortageCounts["not shortaged"]],
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)"
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)"
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }, [medications]);

  // Filtering medications based on shortage value and search term
  const filteredMedications = medications.filter(medication => {
    return (
      (shortageFilter === "" || medication.shortaged.toLowerCase() === shortageFilter.toLowerCase()) &&
      (searchTerm === "" || medication.Name.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  });

  // Pagination
  const indexOfLastMedication = currentPage * medicationsPerPage;
  const indexOfFirstMedication = indexOfLastMedication - medicationsPerPage;
  const currentMedications = filteredMedications.slice(indexOfFirstMedication, indexOfLastMedication);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className="max-w-4xl mt-24 mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold mb-4">Predicted Medication Shortages</h1>
      {/* Shortage filter */}
      <div className="mb-4">
        <label htmlFor="shortageFilter" className="mr-2">Filter by Shortage:</label>
        <select
          id="shortageFilter"
          onChange={e => setShortageFilter(e.target.value)}
          value={shortageFilter}
        >
          <option value="">All</option>
          <option value="shortaged">Shortaged</option>
          <option value="not shortaged">Not Shortaged</option>
        </select>
      </div>
      {/* Search bar */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by Medication Name"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className="p-2 border border-gray-300 rounded"
        />
      </div>
      {/* Bar chart */}
      <div className="mb-4">
        <canvas id="shortageChart" width="400" height="200"></canvas>
      </div>
      <table className="w-full border-collapse">
        <thead className="bg-gray-200">
          <tr>
            <th className="px-4 py-2 text-left">Index</th>
            <th className="px-4 py-2 text-left">Name</th>
            <th className="px-4 py-2 text-left">Shortage Prediction</th>
          </tr>
        </thead>
        <tbody>
          {currentMedications.map((medication, index) => (
            <tr key={index} className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}>
              <td className="px-4 py-2">{indexOfFirstMedication + index + 1}</td>
              <td className="px-4 py-2">{medication.Name}</td>
              <td className="px-4 py-2">{medication.shortaged}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Pagination */}
      <div className="mt-4">
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 mr-2 bg-blue-500 text-white rounded"
        >
          Previous
        </button>
        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={currentMedications.length < medicationsPerPage}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default MedicationDashboard;
