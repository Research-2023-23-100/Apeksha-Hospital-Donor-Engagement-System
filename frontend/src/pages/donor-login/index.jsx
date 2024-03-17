import DonorLogin from "./DonorLogin";
import { BloodDonorProvider } from "../../contexts/BloodDonorContext";

import React from 'react'


function index() {
  return (
    <BloodDonorProvider>
        <DonorLogin/>
    </BloodDonorProvider>
  )
}

export default index