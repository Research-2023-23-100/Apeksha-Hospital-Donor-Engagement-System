import React from "react";
import { Link, useNavigate } from "react-router-dom";
import HairReject from '../../assets/hair_r.png';

const DonationReject =() => {
    return (
        
        <section 
   className="relative left-0 top-0 z-0 bg-cover bg-center h-80 md:h-screen flex items-center justify-center text-center text-white"
                style={{
                    backgroundImage: `url(${HairReject})`,
                    marginTop: '150px', // Add top padding
                }} >
         
        </section>
    );
   
};

export default DonationReject;
