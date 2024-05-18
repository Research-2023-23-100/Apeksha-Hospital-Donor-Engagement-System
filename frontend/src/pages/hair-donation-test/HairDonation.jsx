import React, { useState, useEffect, useContext } from "react";
import HairDonationContext from "../../contexts/HairDonationContext";

const HairDonation = () => {

    const {hairDonation} = useContext(HairDonationContext)

    console.log(hairDonation);

    return (

        <>

            <h1> Hello World</h1>



        </>
    );


};

export default HairDonation;