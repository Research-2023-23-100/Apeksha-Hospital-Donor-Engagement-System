import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AllDonors = () => {
  const [donors, setDonors] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [updatedCount, setUpdatedCount] = useState({});

  useEffect(() => {
    fetchDonors();
  }, []);

  const fetchDonors = async () => {
    try {
      const response = await axios.get('http://localhost:5000/donor/');
      setDonors(response.data);
    } catch (error) {
      console.error('Error fetching donors:', error);
    }
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleCountChange = (event, donorId) => {
    setUpdatedCount({ ...updatedCount, [donorId]: event.target.value });
  };

  const updateDonatedCount = async (id, newDonatedCount) => {
    try {
      await axios.put(`http://localhost:5000/donor/update-donated-count/${id}`, { donatedCount: newDonatedCount });
      fetchDonors(); // Fetch updated data after successful update
    } catch (error) {
      console.error('Error updating donated count:', error);
    }
  };

  const filteredDonors = donors.filter(donor =>
    donor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    donor.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    donor.nic.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto mt-28">
      <h2 className="mb-8 text-center text-3xl font-bold text-gray-800">All Donors</h2>
      <input
        type="text"
        placeholder="Search donors..."
        value={searchTerm}
        onChange={handleSearch}
        className="mb-4 p-2 border rounded"
      />
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">NIC</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Donated Count</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Update</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {filteredDonors.map(donor => (
            <tr key={donor._id}>
              <td className="px-6 py-4 whitespace-nowrap">{donor.name}</td>
              <td className="px-6 py-4 whitespace-nowrap">{donor.email}</td>
              <td className="px-6 py-4 whitespace-nowrap">{donor.contact}</td>
              <td className="px-6 py-4 whitespace-nowrap">{donor.nic}</td>
              <td className="px-6 py-4 whitespace-nowrap">{donor.donatedCount}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <input
                  type="number"
                  placeholder="Update donated count"
                  value={updatedCount[donor._id] || donor.donatedCount}
                  onChange={(e) => handleCountChange(e, donor._id)}
                  className="mr-2 p-2 border rounded"
                />
                <button
                  onClick={() => {
                    const newDonatedCount = updatedCount[donor._id] || donor.donatedCount;
                    updateDonatedCount(donor._id, newDonatedCount);
                  }}
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
                >
                  Update
                </button>
              </td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllDonors;
