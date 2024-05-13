import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ImageModal from "./ImageModel";
import { Pie } from 'react-chartjs-2';

function GetAllCamps() {
  const [camps, setCamps] = useState([]);
  const [img, setImg] = useState("");
  const [showModal, setShowModal] = useState("false");
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const [availableStaff, setAvailableStaff] = useState(200);

  const updateStaff = async (id, newStaff) => {
    try {
      await axios.put(`http://localhost:5000/camp/update-staff/${id}`, { staff: newStaff });
      fetchDataCamps(); // Fetch updated data after successful update
    } catch (error) {
      console.error('Error updating staff:', error);
    }
  };

  const updateRequiredItems = async (id, newRequiredItems) => {
    try {
      await axios.put(`http://localhost:5000/camp/update-required-items/${id}`, { requiredItems: newRequiredItems });
      fetchDataCamps(); // Fetch updated data after successful update
    } catch (error) {
      console.error('Error updating required items:', error);
    }
  };

  const updateAccountStatus = async (id, newAccountStatus) => {
    try {
      await axios.put(`http://localhost:5000/camp/update-account-status/${id}`, { accountStatus: newAccountStatus });
      fetchDataCamps(); // Fetch updated data after successful update
    } catch (error) {
      console.error('Error updating account status:', error);
    }
  };

  const handleOnClose = () => {
    setShowModal("false");
  };

  const setVisibility = (img) => {
    setShowModal(true);
    setImg(img);
  };

  useEffect(() => {
    fetchDataCamps();
  }, []);

  const fetchDataCamps = async () => {
    try {
      const response = await axios.get('http://localhost:5000/campaign');
      setCamps(response.data.data);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };
  const filteredCamps = camps.filter((camp) =>
  camp.organizerName.toLowerCase().includes(searchQuery.toLowerCase())
);
  
    const accountStatusCounts = {
      Approved: filteredCamps.filter(camp => camp.accountStatus === 'Approved').length,
      Rejected: filteredCamps.filter(camp => camp.accountStatus === 'Rejected').length,
      Pending: filteredCamps.filter(camp => camp.accountStatus === 'Pending').length
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
    const totalStaffCount = camps.reduce((total, camp) => total + camp.staff, 0);
    const totalRequireItem = camps.reduce((total, camp) => total + camp.requiredItems, 0);
    console.log(totalStaffCount)
  // Pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = camps.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const accountStatusOptions = ['Pending', 'Approved', 'Rejected'];

  return (
    <div className='mt-[8rem] ml-5 mr-5'>
      <h1 className='text-2xl font-bold mb-5'>All Blood Donation Camps</h1>
      <div className='overflow-x-auto'>
      {/* Pie Chart */}
      <div className='flex justify-center'>
      <div className="flex-shrink-0 w-64 ml-[6rem] mb-5">
            <h2 className="text-lg font-semibold mb-4">Account Status Distribution</h2>
            <Pie data={pieChartData} />
          </div>

           {/* Pie Chart */}
      <div className=' flex-shrink-0 w-64 ml-[6rem] mb-5'>
      <h2 className="text-lg font-semibold mb-4">Account Status Distribution</h2>
        <Pie
          data={{
            labels: ['Available Staff', 'Allocated Staff'],
            datasets: [{
              data: [availableStaff, 500 - totalStaffCount],
              backgroundColor: ['#09b5a7', '#4969de']
            }]
          }}
        />
      </div>
      <div className=' flex-shrink-0 w-64 ml-[6rem] mb-5'>
      <h2 className="text-lg font-semibold mb-4">Account Status Distribution</h2>
        <Pie
          data={{
            labels: ['Available Staff', 'Allocated Staff'],
            datasets: [{
              data: [availableStaff, 1000 - totalRequireItem],
              backgroundColor: ['#22c55e', '#FF6384']
            }]
          }}
        />
      </div>
      </div>
        <table className='min-w-full divide-y divide-gray-200'>
          <thead className='bg-gray-50'>
            <tr>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Organizer Name</th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Mobile</th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Email</th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Place</th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Date</th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>People Amount</th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Permission Letter</th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Staff</th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Required Items</th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Camp Status</th>
            </tr>
          </thead>
          <tbody className='bg-white divide-y divide-gray-200'>
            {currentItems.map((camp) => (
              <tr key={camp._id}>
                <td className='px-6 py-4 whitespace-nowrap'>{camp.organizerName}</td>
                <td className='px-6 py-4 whitespace-nowrap'>{camp.mobile}</td>
                <td className='px-6 py-4 whitespace-nowrap'>{camp.email}</td>
                <td className='px-6 py-4 whitespace-nowrap'>{camp.place}</td>
                <td className='px-6 py-4 whitespace-nowrap'>{camp.date ? new Date(camp.date).toLocaleDateString() : 'N/A'}</td>
                <td className='px-6 py-4 whitespace-nowrap'>{camp.expectedPeopleAmount}</td>
                <td className='px-6 py-4 whitespace-nowrap'>
                  <button onClick={() => setVisibility(camp.marketingSlip)}>
                    <img src={camp.marketingSlip} alt='Request Slip' className='w-12 h-12 object-cover rounded-full' />
                  </button>
                </td>
                <td className='px-6 py-4 whitespace-nowrap'>
                  <div className="flex items-center">
                    <span>{camp.staff}</span>
                    <button
                      className="ml-2 px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none"
                      onClick={() => {
                        const newStaffValue = prompt('Enter new staff value:');
                        if (newStaffValue !== null) {
                          updateStaff(camp._id, newStaffValue);
                        }
                      }}
                    >
                      Update
                    </button>
                  </div>
                </td>
                <td className='px-6 py-4 whitespace-nowrap'>
                  <div className="flex items-center">
                    <span>{camp.requiredItems}</span>
                    <button
                      className="ml-2 px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
                      onClick={() => {
                        const newRequiredItemsValue = prompt('Enter new required items:');
                        if (newRequiredItemsValue !== null) {
                          updateRequiredItems(camp._id, newRequiredItemsValue);
                        }
                      }}
                    >
                      Update
                    </button>
                  </div>
                </td>
                <td className='px-6 py-4 whitespace-nowrap'>
                  <select
                    value={camp.accountStatus}
                    onChange={(e) => updateAccountStatus(camp._id, e.target.value)}
                    className="px-2 py-1 bg-white border border-gray-400 rounded-md focus:outline-none"
                  >
                    {accountStatusOptions.map(status => (
                      <option key={status} value={status}>{status}</option>
                    ))}
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className='mt-5'>
        {camps.length > itemsPerPage && (
          <ul className='flex justify-center'>
            {[...Array(Math.ceil(camps.length / itemsPerPage))].map((_, index) => (
              <li key={index} className='mx-1'>
                <button
                  className={`px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none ${
                    currentPage === index + 1 ? 'font-bold' : ''
                  }`}
                  onClick={() => paginate(index + 1)}
                >
                  {index + 1}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
      <ImageModal visible={showModal} onClose={handleOnClose} image={img} />
    </div>
  );
}

export default GetAllCamps;
