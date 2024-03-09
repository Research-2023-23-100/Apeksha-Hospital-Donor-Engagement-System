import React from "react";
import StaffDashboard from "./StaffDashboard";
import { StaffProvider } from "../../contexts/StaffContext";

const index = () => {

    return (
        <StaffProvider>
            <StaffDashboard />
        </StaffProvider>
    )

}
export default index;