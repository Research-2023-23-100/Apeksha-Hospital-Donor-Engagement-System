import React from "react";
import StaffLogin from "./StaffLogin";

import { StaffProvider } from "../../contexts/StaffContext";

const index = () => {

    return (
        <StaffProvider>
            <StaffLogin />
        </StaffProvider>
    )

}

export default index;