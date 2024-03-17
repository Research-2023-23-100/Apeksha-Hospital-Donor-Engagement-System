import React, { useContext, useState, useEffect } from "react";
import MedicationContext from "../../contexts/MedicationContext";
import { MdMedication } from "react-icons/md";


const DonorMedicationList = () => {
  const { shortagedMedications, criticalMedications } = useContext(MedicationContext);
  const [comMeds, setComMeds] = useState([]);

  useEffect(() => {
    const findShortagedMeds = () => {
      return shortagedMedications.filter(med => med.shortaged === 'shortaged');
    };

    const findPriorityMeds = () => {
      return criticalMedications.filter(med => med.Priority === 1 || med.Priority === 0);
    };

    const shortagedMeds = findShortagedMeds();
    const priorityMeds = findPriorityMeds();

    const shortagedMedNames = shortagedMeds.map(med => med.Name);
    const priorityMedNames = priorityMeds.map(med => med.Name);

    const commonMeds = shortagedMedNames.filter(name => priorityMedNames.includes(name));
    setComMeds(commonMeds);
  }, [shortagedMedications, criticalMedications]);

  return (
    <div className="container mx-auto mt-48">
      <div>
        <h2 className="text-3xl font-bold mb-4">Urgent Medications</h2>
        <div className="overflow-x-auto">
          <table className="table border-separate border border-gray-900 w-full font-semibold ">
            <thead>
              <tr className="bg-gray-600 text-white">
                <th className="w-10"></th>
                <th className="px-8 py-4">Medication Name</th>
                <th className="w-64 px-8 py-4">Donate</th>
              </tr>
            </thead>
            <tbody>
              {comMeds.map((medication, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-gray-200'}>
                  <td className="px-8 py-4"><div><MdMedication className="fill-red-800 h-[40px] w-[40px]" /></div></td>
                  <td className="px-8 py-4"><div className="ml-10">{medication}</div></td>
                  <td className="px-4 py-2">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                      Place a donation Request
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DonorMedicationList;
