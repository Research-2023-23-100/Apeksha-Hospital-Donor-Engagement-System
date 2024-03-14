import React, { useContext } from "react";
import MedicationContext from "../../contexts/MedicationContext";

const MedicationDashboard = () => {
  const { medications } = useContext(MedicationContext);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold mb-4">Predicted Medication Shortages</h1>
      <table className="w-full border-collapse">
        <thead className="bg-gray-200">
          <tr>
            <th className="px-4 py-2 text-left">Index</th>
            <th className="px-4 py-2 text-left">Name</th>
            <th className="px-4 py-2 text-left">Shortage Prediction</th>
          </tr>
        </thead>
        <tbody>
          {medications
            .filter((elem) => elem.shortaged === "shortaged")
            .map((medication, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}>
                <td className="px-4 py-2">{index + 1}</td>
                <td className="px-4 py-2">{medication.Name}</td>
                <td className="px-4 py-2">{medication.shortaged}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default MedicationDashboard;
