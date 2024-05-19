import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Home2 from '../../assets/hair/T2.png';
import axios from "axios";

const HairSampleUpload2 = () => {
    const fileInputRef = useRef(null);
    const [file, setFile] = useState(null);
    const navigate = useNavigate();

    const handleUpload = () => {
        fileInputRef.current.click();
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!file) {
            alert("Please select a file to upload.");
            return;
        }

        const formData = new FormData();
        formData.append("imagefile", file);

        try {
            const res = await axios.post("http://127.0.0.1:3000/step2_active", formData);
            const url2 = res.data.prediction;

            if (url2 === "Hair is wet" || url2 === "Bleached Hair" || url2 === "Not Black Hair") {
                navigate("/donor/donateReject", { state: { message: url2 } });
            } else if (url2 === "Black Hair And Not Bleach Hair And Dry Hair") {
                navigate("/donor/HairOutput2", { state: { message: url2 } });
            } else {
                navigate("/donor/donateReject", { state: { message: url2 } });
            }
        } catch (err) {
            console.error("Error during submission: ", err);
        }
    
    };
    return (<>
        <section>
            <div className="bg-white-100">
                {/* Table for Image and Content */}
                <table className="w-full" style={{ marginTop: '120px' }}>
                    <tbody>
                        <tr>


                            {/* Content Part */}
                            <td className="w-1/2 bg-red-100">

                                <div className="min-h-screen bg-red flex flex-col justify-center py-12 sm:px-6 lg:px-8">
                                    <section> <div className="sm:mx-auto sm:w-full sm:max-w-md">
                                        <h2 className="mt-6 text-center text-4xl font-extrabold text-gray-900">Upload Your full Hair  Images - Step II</h2>
                                    </div>

                                    </section>
                                    <section className="bg-white-100 py-16">
                                        <div className="max-w-4xl mx-auto px-4">
                                            <h2 className="text-3xl font-bold text-gray-900 mb-8">Terms and Conditions</h2>
                                            <ul className="list-disc list-inside">
                                                <li className="text-lg text-red-700 mb-4">
                                                    <span className="font-semibold">1.Upload pictures of your hair that look good (full hair/hair in parts).</span>
                                                </li>
                                                <li className="text-lg text-red-700 mb-4">
                                                    <span className="font-semibold">2.Upload pictures taken from different aspects of the hair.</span>
                                                </li>
                                                <li className="text-lg text-red-700 mb-4">
                                                    <span className="font-semibold">3.The actual condition of your hair must be present in the picture you upload.</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </section>

                                    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                                        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                                            <form className="space-y-6" action="#" method="POST">
                                                <div>
                                                    <label htmlFor="images" className="block text-sm font-medium text-gray-700">
                                                        Upload Images
                                                    </label>
                                                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                                        <div className="space-y-1 text-center">
                                                            <input id="file-upload" ref={fileInputRef} name="imagefile" type="file" className="sr-only" onChange={(e) => setFile(e.target.files[0])} />
                                                            <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                                                                <span>Upload a file</span>
                                                            </label>
                                                            <p className="pl-1">or drag and drop</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <button type="submit" onClick={handleSubmit} className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                                        Upload Images
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td className="w-1/2">
                                <img
                                    src={Home2}
                                    alt="Hair donation"
                                    className="rounded-lg  mx-auto"
                                    style={{ display: 'block' }}
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    </>
    );
};

export default HairSampleUpload2;
