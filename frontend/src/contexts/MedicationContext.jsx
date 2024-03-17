import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import makeToast from "../components/toast";
import MedicationAPI from "./api/MedicationAPI";

const MedicationContext = createContext();

export function MedicationProvider({ children }) {

    const [shortagedMedications, setShortagedMedications] = useState([]);
    const [criticalMedications, setCriticalMedications] = useState([]);



    //Get all Medications
    useEffect(() => {
        MedicationAPI.getAllShortages().then((response) => {

            console.log('Medicationssss'+response.data);
            setShortagedMedications(response.data);
        });

        MedicationAPI.getAllCritical().then((response) => {

            console.log('Medicationssss'+response.data);
            setCriticalMedications(response.data);
        });


    }, []);

    return (
        <MedicationContext.Provider
            value={{
                shortagedMedications,
                criticalMedications,
                setShortagedMedications,
                setCriticalMedications,
            }}

        >

            {children}
        </MedicationContext.Provider>
    )

}

export default MedicationContext;
