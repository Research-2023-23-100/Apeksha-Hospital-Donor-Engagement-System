import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import makeToast from "../components/toast";
import MedicationAPI from "./api/MedicationAPI";

const MedicationContext = createContext();

export function MedicationProvider({ children }) {
    const [medications, setMedications] = useState([]);

    

    // Get one Medication
    const getOne = (id) => {
        useEffect(() => {
            MedicationAPI.getOne(id).then((res) => {
                setStaff(res.data);
            });
        }, []);
    };

    //Get all Medications
    useEffect(() => {
        MedicationAPI.getAll().then((response) => {

            console.log('Medicationssss'+response.data);
            setMedications(response.data);
        });
    }, []);

    return (
        <MedicationContext.Provider
            value={{
                medications,
                setMedications,
                getOne,
            }}

        >

            {children}
        </MedicationContext.Provider>
    )
}

export default MedicationContext;