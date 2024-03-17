import React, { useContext, useState, useEffect, useRef } from "react";
import MedicationContext from "../../contexts/MedicationContext";
import Chart from "chart.js/auto";

const CriticalMedication = () => {
  const { criticalMedications } = useContext(MedicationContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [medicationsPerPage] = useState(5); // Change this value as per your requirement
  const [searchTerm, setSearchTerm] = useState("");
  const [filterPriority, setFilterPriority] = useState(null);
  const chartRef = useRef(null);

  const indexOfLastMedication = currentPage * medicationsPerPage;
  const indexOfFirstMedication = indexOfLastMedication - medicationsPerPage;
  const filteredMedications = criticalMedications.filter(medication => {
    if (filterPriority !== null) {
      return medication.Priority === filterPriority;
    }
    return true;
  }).filter(medication => {
    return medication.Name.toLowerCase().includes(searchTerm.toLowerCase());
  });
  const currentMedications = filteredMedications.slice(indexOfFirstMedication, indexOfLastMedication);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  useEffect(() => {
    // Chart rendering logic here
    const ctx = document.getElementById("medicationChart");
    if (ctx) {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
      const priorityCounts = {};
      filteredMedications.forEach(medication => {
        if (priorityCounts[medication.Priority]) {
          priorityCounts[medication.Priority]++;
        } else {
          priorityCounts[medication.Priority] = 1;
        }
      });
      const labels = Object.keys(priorityCounts);
      const data = Object.values(priorityCounts);
      
      chartRef.current = new Chart(ctx, {
        type: "bar",
        data: {
          labels: labels,
          datasets: [{
            label: "Priority Counts",
            data: data,
            backgroundColor: [
              "rgba(255, 99, 132, 0.5)",
              "rgba(54, 162, 235, 0.5)",
              "rgba(255, 206, 86, 0.5)",
              "rgba(75, 192, 192, 0.5)",
              "rgba(153, 102, 255, 0.5)",
              "rgba(255, 159, 64, 0.5)"
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)"
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
    }
  }, [filteredMedications]);

  return (
    <div className="container px-20 mx-auto mt-32 border-2 border-slate-300 p-8">
      
      <div className="flex justify-between mb-4">
        <div className="border-2 border-slate-300 p-8">
        <h1 className="text-3xl font-semibold mb-6">Medication Priority Level</h1>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search Medications"
          className="px-3 py-1 border rounded"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
        <select
          className="ml-2 px-3 py-1 border rounded"
          onChange={e => setFilterPriority(parseFloat(e.target.value) || null)}
        >
          <option value="">Filter by Priority</option>
          <option value="1.0">Critical</option>
          <option value="0.0">Not Critical</option>
        </select>
      </div>
          <h2 className="text-xl font-semibold mb-2">Medications</h2>
          <table className="table-auto">
            <thead>
              <tr>
                <th className="px-4 py-2">Index</th>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Priority</th>
              </tr>
            </thead>
            <tbody>
              {currentMedications.map((medication, index) => (
                <tr key={index} className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}>
                  <td className="px-4 py-2">{index + 1}</td>
                  <td className="px-4 py-2">{medication.Name}</td>
                  <td className="px-4 py-2"><div className={`text-center px-4 py-2 ${medication.Priority === 1 ? "bg-red-300 ml-5 w-32 border-2 border-red-600 text-red-900" : "bg-green-300 w-44 border-2 text-green-900 border-green-600"} py-1 rounded shadow-lg`}>
                    {medication.Priority === 1.0 ? "High" : "Low"}</div></td>
                </tr>
              ))}
            </tbody>
          </table>
          <ul className="flex justify-center mt-4">
            {Array.from({ length: Math.ceil(filteredMedications.length / medicationsPerPage) }, (_, i) => (
              <li key={i} className="mr-2">
                <button
                  className={`px-3 py-1 ${currentPage === i + 1 ? 'bg-gray-800 text-white' : 'bg-gray-200'}`}
                  onClick={() => paginate(i + 1)}
                >
                  {i + 1}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="border-2 border-slate-300 p-8">
          <h2 className="text-xl font-semibold mb-2">Priority Distribution</h2>
          <div className="mt-28 mb-6" style={{ width: "100%", height: "100%" }}>
          <canvas id="medicationChart"></canvas>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CriticalMedication;
