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
        },
        maintainAspectRatio: false // Ensure chart doesn't take too much space
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
    <div className="container mx-auto mt-48">
      <h1 className="text-3xl font-semibold mb-6">Predicted Medication Shortages</h1>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <label htmlFor="shortageFilter" className="mr-2 font-semibold">Filter by Shortage:</label>
          <select
            id="shortageFilter"
            onChange={e => setShortageFilter(e.target.value)}
            value={shortageFilter}
            className="border border-gray-600 bg-gray-200 text-stone-900 rounded-md p-2"
          >
            <option value="">All</option>
            <option value="shortaged">Shortaged</option>
            <option value="not shortaged">Not Shortaged</option>
          </select>
        </div>
        <input
          type="text"
          placeholder="Search by Medication Name"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className="border border-gray-600 rounded-md p-2 w-72"
        />
      </div>
      <table className="w-full border-collapse mb-6">
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
              <td className="px-4 py-2">
                <div className={`text-center px-4 py-2 ${medication.shortaged==="shortaged"? "bg-red-200 ml-5 w-32 border-2 border-red-600 text-red-700  border-white":"bg-green-200 w-44 border-2 border-green-600 text-green-700"} py-1 rounded text-white shadow-lg`}>{medication.shortaged}</div></td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-6 flex justify-center">
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 mr-2 bg-primary text-white rounded"
        >
          Previous
        </button>
        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={currentMedications.length < medicationsPerPage}
          className="px-4 py-2 bg-primary text-white rounded"
        >
          Next
        </button>
      </div>
      <div className="mt-32">
      <h1 className="text-3xl font-semibold mb-6">Medication Counts </h1> 
      <div className="mb-6 mt-24">
        <canvas id="shortageChart" width="400" height="200"></canvas>
      </div>
      </div>
      <div>
        {/* Additional meaningful chart can be added here */}
      </div>
    </div>
  );
};

export default MedicationDashboard;
