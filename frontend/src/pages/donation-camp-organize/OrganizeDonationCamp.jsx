import React, { useState, useEffect } from "react";
import axios from "axios";
import bloodNotice from '../../assets/blood-notice2.png'


function OrganizeDonationCamp(props) {
	const [uid, setUid] = useState(""); // State to hold the UID

    useEffect(() => {
        const storedUid = localStorage.getItem('uId'); // Get UID from local storage
        console.log("Stored UID:", storedUid); // Log the retrieved UID
        if (storedUid) {
            setUid(storedUid); // Set the UID state if it exists in local storage
        }
    }, []); // Empty dependency array ensures this effect runs only once

    console.log("UID:", uid); 
    const [formData, setFormData] = useState({
        organizerName: "",
		organizerId:uid,
        mobile: "",
        email: "",
        place: "",
        date: "",
        marketingSlip: null,
        expectedPeopleAmount: "",
    });

	useEffect(() => {
        // Check if props.location exists and has a state property
        if (props.location && props.location.state && props.location.state.prediction) {
            console.log("Prediction value received:", props.location.state.prediction);
        }

        // Retrieve organizer ID from local storage
       // Retrieve the UID from local storage


        // Update the formData state with the retrieved organizerId
        setFormData(prevState => ({
            ...prevState,
            uid: uid,
        }));
    }, [props.location]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setFormData((prevState) => ({
            ...prevState,
            marketingSlip: file,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formDataWithFile = new FormData();
        formDataWithFile.append("organizerName", formData.organizerName);
        formDataWithFile.append("mobile", formData.mobile);
        formDataWithFile.append("email", formData.email);
        formDataWithFile.append("place", formData.place);
        formDataWithFile.append("date", formData.date);
        formDataWithFile.append("expectedPeopleAmount", formData.expectedPeopleAmount);
		formDataWithFile.append("organizerId", formData.organizerId);
        formDataWithFile.append("marketingSlip", formData.marketingSlip);

        try {
            const response = await axios.post("http://localhost:5000/campagin/create", formDataWithFile, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            console.log("Camp created:", response.data);
            // Reset form data after submission
            setFormData({
                organizerName: "",
                mobile: "",
                email: "",
                place: "",
                date: "",
                marketingSlip: null,
                expectedPeopleAmount: 0,
				
            });
        } catch (error) {
            console.error("Error creating camp:", error);
        }
    };
    return (
		<div className="flex">
		<div className=" mx-auto mt-[5rem] grid grid-cols-2 gap-4">
		
			
		
        <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md mt-[5rem]">
    <h1 className="text-2xl font-semibold mb-6">Create Donation Camp</h1>
    <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
        <div className="mb-4">
            <label htmlFor="organizerName" className="block text-gray-700 font-semibold">
                Organizer Name:
            </label>
            <input
                type="text"
                name="organizerName"
                id="organizerName"
                value={formData.organizerName}
                onChange={handleChange}
                className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                required
            />
        </div>
        <div className="mb-4">
            <label htmlFor="mobile" className="block text-gray-700 font-semibold">
                Mobile:
            </label>
            <input
                type="text"
                name="mobile"
                id="mobile"
                value={formData.mobile}
                onChange={handleChange}
                className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                required
            />
        </div>
        <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-semibold">
                Email:
            </label>
            <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                required
            />
        </div>
        <div className="mb-4">
            <label htmlFor="place" className="block text-gray-700 font-semibold">
                Place:
            </label>
            <input
                type="text"
                name="place"
                id="place"
                value={formData.place}
                onChange={handleChange}
                className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                required
            />
        </div>
        <div className="mb-4">
            <label htmlFor="date" className="block text-gray-700 font-semibold">
                Date:
            </label>
            <input
                type="date"
                name="date"
                id="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                required
            />
        </div>
        <div className="mb-4">
            <label htmlFor="expectedPeopleAmount" className="block text-gray-700 font-semibold">
                Expected People Amount:
            </label>
            <input
                type="number"
                name="expectedPeopleAmount"
                id="expectedPeopleAmount"
                value={formData.expectedPeopleAmount}
                onChange={handleChange}
                className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                required
            />
        </div>
        <div className="mb-4">
            <label htmlFor="slipImage" className="block text-gray-700 font-semibold">
                Marketing Slip:
            </label>
            <input
                type="file"
                name="slipImage"
                id="slipImage"
                onChange={handleFileChange}
                className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                required
            />
        </div>
        <button
            type="submit"
            className="col-span-2 bg-red-500 text-white font-semibold py-2 px-4 rounded hover:bg-red-600 transition duration-300"
        >
            Create Camp
        </button>
    </form>
</div>


<div className="w-full px-4 mt-[1rem]">
<div className="hidden md:block md:w-1/3 md:pl-8 ml-[13rem]">
          <img src={bloodNotice} alt="Login Image" className="w-48 h-48 rounded-lg" />
        </div>
				{/* Notice */}
				<div className="bg-gray-200 p-4 rounded-lg shadow-md">
				<h2 className="text-xl font-semibold mb-2 text-red-500">Blood Donation Camp Organizer Notice</h2>
    <p className="text-lg text-gray-700">
        If you need to organize a blood donation camp, you may contribute some amount for the campaign marketing purposes.
        <br/><br/>
        <strong>The amount required is Rs. 20,000.</strong> Please deposit this amount to the following bank account:
        <br/><br/>
        <strong>Bank: Bank of Ceylon</strong><br/>
        <strong>Account No: 8888888</strong><br/>
        <br/>
        After depositing, please upload the slip. Thank you for your contribution!
    </p>
				</div>
			</div>
</div>

</div>


    );
}

export default OrganizeDonationCamp;
