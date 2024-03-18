import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ImageModal from "./ImageModel";
import { Pie } from 'react-chartjs-2';

function BloodCampAdmin() {
  const [organizers, setOrganizers] = useState([]);
  const [img, setImg] = useState("");
  const [showModal, setShowModal] = useState("false");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [organizersPerPage] = useState(5);

  const handleOnClose = () => {
    setShowModal("false");
  };

  const setVisibility = (img) => {
    setShowModal(true);
    setImg(img);
  };

  useEffect(() => {
    getAllOrganizers();
  }, []);

  const getAllOrganizers = async () => {
    try {
      const response = await axios.get('http://localhost:5000/org');
      setOrganizers(response.data);
    } catch (error) {
      console.error('Error fetching organizers:', error);
    }
  };

  const handleStatusChange = async (id, newStatus) => {
    try {
      const response = await axios.put(`http://localhost:5000/org/update-status/${id}`, { accountStatus: newStatus });
      getAllOrganizers();
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };

  const filteredOrganizers = organizers.filter((organizer) =>
    organizer.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const accountStatusCounts = {
    active: filteredOrganizers.filter(org => org.accountStatus === 'active').length,
    block: filteredOrganizers.filter(org => org.accountStatus === 'block').length,
    pending: filteredOrganizers.filter(org => org.accountStatus === 'pending').length
  };

  const pieChartData = {
    labels: Object.keys(accountStatusCounts),
    datasets: [
      {
        data: Object.values(accountStatusCounts),
        backgroundColor: ['#22c55e', '#FF6384', '#FFCE56']
      }
    ]
  };

  const indexOfLastOrganizer = currentPage * organizersPerPage;
  const indexOfFirstOrganizer = indexOfLastOrganizer - organizersPerPage;
  const currentOrganizers = filteredOrganizers.slice(indexOfFirstOrganizer, indexOfLastOrganizer);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <div className="container mx-auto px-4 py-8 mt-[8rem] ml-[5rem]">
        <h1 className="text-3xl font-semibold mb-4">All Organizers</h1>
        <input
          type="text"
          placeholder="Search by name"
          className="border rounded-md px-2 py-1 mb-4"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <div className=" flex overflow-x-auto">
          <table className="table-auto w-[50rem]">
            <thead>
              <tr>
                <th className="border px-4 py-2">Name</th>
                <th className="border px-4 py-2">Email</th>
                <th className="border px-4 py-2">ID Front</th>
                <th className="border px-4 py-2">ID Back</th>
                <th className="border px-4 py-2">Change Status</th>
                <th className="border px-4 py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {currentOrganizers && currentOrganizers.length ? (
                currentOrganizers.map((organizer) => (
                  <tr key={organizer._id}>
                    <td className="border px-4 py-2">{organizer.name}</td>
                    <td className="border px-4 py-2">{organizer.email}</td>
                    <td className="border px-4 py-2">
                      <button onClick={() => setVisibility(organizer.imageFront)}>
                        <img className="w-10 h-10" src={organizer.imageFront} alt="ID Front" />
                      </button>
                    </td>
                    <td className="border px-4 py-2">
                      <button onClick={() => setVisibility(organizer.imageBack)}>
                        <img className="w-10 h-10" src={organizer.imageBack} alt="ID Back" />
                      </button>
                    </td>
                    <td className="border px-4 py-2">
                      <select
                        className="border rounded-md px-2 py-1"
                        value={organizer.accountStatus}
                        onChange={(e) => handleStatusChange(organizer._id, e.target.value)}
                      >
                        <option value="pending">Pending</option>
                        <option value="active">Active</option>
                        <option value="block">Block</option>
                      </select>
                    </td>
                    <td className="border px-4 py-2">
                      {organizer.accountStatus === 'pending' && (
                        <span className="h-2 w-2 inline-block bg-yellow-500 rounded-full"></span>
                      )}
                      {organizer.accountStatus === 'active' && (
                        <span className="h-2 w-2 inline-block bg-green-500 rounded-full"></span>
                      )}
                      {organizer.accountStatus === 'block' && (
                        <span className="h-2 w-2 inline-block bg-red-500 rounded-full"></span>
                      )}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="border px-4 py-2 text-center">No organizers found.</td>
                </tr>
              )}
            </tbody>
          </table>
          <div className="flex-shrink-0 w-64 ml-[6rem]">
            <h2 className="text-lg font-semibold mb-4">Account Status Distribution</h2>
            <Pie data={pieChartData} />
          </div>
        </div>
       
        <div className="mt-4">
          <ul className="flex justify-center">
            {Array.from({ length: Math.ceil(filteredOrganizers.length / organizersPerPage) }, (_, i) => (
              <li key={i} className="mx-1">
                <button
                  onClick={() => paginate(i + 1)}
                  className={`px-3 py-1 rounded-md ${currentPage === i + 1 ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-800'}`}
                >
                  {i + 1}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <ImageModal visible={showModal} onClose={handleOnClose} image={img} />
    </div>
  );
}

export default BloodCampAdmin;
