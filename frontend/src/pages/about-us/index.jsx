import React from "react";
import { Link, useNavigate } from "react-router-dom";
import HairBGimage from '../../assets/about.jpg';
import Home1 from '../../assets/National Cancer Institute.jpg';
import Home2 from '../../assets/home2.jpg';
import guide1 from '../../assets/img1.jpg';
import guide2 from '../../assets/guid2.jpg';
import guide3 from '../../assets/im3.jpeg';
import guide4 from '../../assets/hair/2.jpg';


const AboutUs = () => {
    return (
        <div className="bg-white-100"> 
            {/* Hero Banner */}
            <section
                className="relative left-0 top-0 z-0 bg-cover bg-center h-150 md:h-screen flex items-center justify-center text-center text-white"
                style={{
                    backgroundImage: `url(${HairBGimage})`,
                    marginTop: '120px',
                    marginBottom: '20px',
                    marginLeft: '100px',
                    marginRight: '100px'
                }}
            >

            </section>

            {/* Introduction Section */}
            <section className="bg-white py-16 md:flex md:items-center">
                <div className="md:w-1/2 md:pl-8">
                    <h2 className="text-xl text-red-700 md:text-4xl font-bold mb-4">Maharagama Apeksha Hospital</h2>
                    <p className="text-xl  mb-4">
                        Apeksha Hospital stands as a beacon of hope and advanced medical care, dedicated to providing exemplary services to our cancer patients. Our commitment to enhancing cancer patient outcomes and delivering compassionate care drives our constant pursuit of excellence. As a leading healthcare institution, Apeksha Hospital continually seeks innovative solutions to meet the evolving needs of our cancer patients and the community.   </p>

                </div>
                <div className="md:w-1/2 md:pr-8">
                    <img
                        src={Home1}
                        alt="Introduction Image"
                        className="rounded-lg shadow-lg w-full h-auto"
                    />

                </div>

            </section>
            
            {/* Introduction Section */}
            <section className="bg-white py-16 md:flex md:items-center">
                <div className="md:w-1/2 md:pr-8">
                    <img
                        src={Home2}
                        alt="Introduction Image"
                        className="rounded-lg shadow-lg"
                    />
                </div>
                <div className="md:w-1/2 md:pl-8">
                    <h2 className="text-xl text-red-700 md:text-4xl font-bold mb-4">Apeksha Hospital - Donor Engagement System</h2>

                    <p className="text-xl  mb-4">
                        Recognizing the challenges in the current donation process, Apeksha Hospital is proud to introduce a comprehensive and reliable donation platform. This cutting-edge system is designed to streamline donations, ensure transparency, and elevate the quality of donated items, particularly for essential supplies and hair donations for cancer patients. By leveraging advanced technologies such as machine learning and deep learning, our platform addresses inefficiencies, combats fraudulent activities, and enhances the overall donation experience.
                    </p>
                </div>
            </section>
            <section className="container mx-auto py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <img src={guide1} alt="Guide Image" className="w-full h-auto mb-4" />
                        <h3 className="text-xl font-semibold mb-4">1: Intelligent Donor-Driven Inventory System for Essential Items</h3>
                        <p className="text-gray-600">
                            The existing inventory management system at Apeksha Hospital faces challenges in predicting the specific needs for essential items, leading to inefficiencies and resource wastage. To address this, we have implemented an intelligent donor-driven inventory management system. Utilizing machine learning algorithms, this system analyzes historical inventory data and usage patterns to recommend essential items required by the hospital. An interactive interface allows donors to select and track their contributions, enhancing engagement and ensuring that donations are effectively utilized.
                        </p>
                    </div>

                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <img src={guide2} alt="Guide Image" className="w-full h-auto mb-4" />
                        <h3 className="text-xl font-semibold mb-4">2: Critical Medication Priority Recommender System</h3>
                        <p className="text-gray-600">
                            Medication supply challenges, including shortages and the lack of prioritization for critical medications, impact patient care quality. To mitigate these issues, we have developed a Critical Medication Priority Recommender System. This system employs machine learning and optimization techniques to predict medication shortages, identify crucial medications, and optimize procurement processes. The integrated Shortage Prediction Model and Critical Medication Identification Model work together to ensure a reliable supply of essential medications, improving overall patient care.
                        </p>
                    </div>

                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <img src={guide3} alt="Guide Image" className="w-full h-auto mb-4" />
                        <h3 className="text-xl font-semibold mb-4">3: Predictive Analytics for Donation Campaign Success</h3>
                        <p className="text-gray-600">
                            Blood donation campaigns at Apeksha Hospital struggle with low donor participation and resource inefficiencies, reducing their effectiveness. To counter these challenges, we use predictive analytics and machine learning to analyze factors contributing to successful donation campaigns. This approach provides actionable insights to optimize resource allocation and boost donor participation, enhancing the effectiveness of blood donation drives and ensuring a steady supply of blood for patients in need.
                        </p>
                    </div>

                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <img src={guide4} alt="Guide Image" className="w-full h-auto mb-4" />
                        <h3 className="text-xl font-semibold mb-4">4: Promoting Quality Hair Donation for Cancer Patients</h3>
                        <p className="text-gray-600">
                            The current hair donation process lacks a standardized method to ensure that donated hair meets the hospital’s quality standards, causing potential issues in suitability for patients. To address this, we have implemented a Deep Learning Algorithm (CNN) on an online platform to evaluate the quality of hair donations based on key factors recommended by Apeksha Hospital. This ensures that only hair meeting the highest standards is accepted, thereby improving the quality of wigs and hairpieces provided to cancer patients.
                        </p>
                    </div>
                </div>
            </section>


        </div>
    );
};

export default AboutUs;
