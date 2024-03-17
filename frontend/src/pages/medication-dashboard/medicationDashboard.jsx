import React, { useContext, useState, useEffect, useRef } from "react";
import MedicationContext from "../../contexts/MedicationContext";
import Chart from "chart.js/auto";
import CriticalMedication from "./criticalMedication";

const MedicationDashboard = () => {
  const { shortagedMedications,criticalMedications } = useContext(MedicationContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [medicationsPerPage] = useState(5);
  const [shortageFilter, setShortageFilter] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [shortageData, setShortageData] = useState({});
  const chartRef = useRef(null);
  const chartContainerRef = useRef(null);

  useEffect(() => {
    // Calculate shortage data
    const shortageCounts = {
      shortaged: 0,
      "not shortaged": 0
    };

    shortagedMedications.forEach(medication => {
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
  }, [shortagedMedications,criticalMedications]);

  // Filtering medications based on shortage value and search term
  const filteredMedications = shortagedMedications.filter(medication => {
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

  // Calculate table height
  useEffect(() => {
    const tableHeight = chartContainerRef.current.offsetHeight;
    chartRef.current.canvas.parentNode.style.height = `${tableHeight}px`;
  }, [filteredMedications]);

  return (
    <div className="container mx-auto mt-48">
       <div>
       <div className="container mx-auto mt-36 grid grid-cols-2 gap-16 bg-gray-50 px-16 py-16 border-2 border-slate-300 ">
      <div className="border-2 border-slate-300 p-8">
        <h1 className="text-3xl font-semibold mb-6">Predicted Medication Shortages</h1>
        <div className="flex items-center gap-x-32 justify-between mb-6">
          <div className="flex items-center">
            <label htmlFor="shortageFilter" className="mr-2 font-semibold">Filter by Shortage:</label>
            <select
              id="shortageFilter"
              onChange={e => setShortageFilter(e.target.value)}
              value={shortageFilter}
              className="border  bg-slate-100 text-stone-900 rounded-md p-2"
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
            className="border border-gray-200 rounded-md p-2 w-72"
          />
        </div>
        <table className="w-full border-collapse mb-6" ref={chartContainerRef}>
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
                  <div className={`text-center px-4 py-2 ${medication.shortaged === "shortaged" ? "bg-red-300 ml-5 w-32 border-2 border-red-600 text-red-900" : "bg-green-300 w-44 border-2 text-green-900 border-green-600"} py-1 rounded shadow-lg`}>{medication.shortaged}</div>
                </td>
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
      </div>
      <div className="border-2 border-slate-300 p-5 mt-">
        <h1 className="text-3xl font-semibold mb-6">Medication Counts</h1>
        <div className="mt-28 mb-6" style={{ width: "100%", height: "100%" }}>
          <canvas id="shortageChart"></canvas>
        </div>
      </div>
    </div>
      </div>
      
      <div>
        <CriticalMedication/>
      </div>
    </div>
  );
};

export default MedicationDashboard;
