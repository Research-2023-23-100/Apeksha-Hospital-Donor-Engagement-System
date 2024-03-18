import React, { createContext, useContext, useState } from "react";
import OrganizerAPI from "./api/OrganizationAPI";
import makeToast from "../components/toast";

const OrganizerContext = createContext();

export const useOrganizerContext = () => useContext(OrganizerContext);

export const OrganizerProvider = ({ children }) => {
  const [organizers, setOrganizers] = useState([]);
  const [organizer, setOrganizer] = useState({
    name: "",
    mobile: "",
    email: "",
    password: "",
    imageFront: "",
    imageBack: "",
  });

  const submitOrganizer = async (values) => {
    try {
      const response = await OrganizerAPI.register(values);
      setOrganizers([...organizers, response.data]);
      console.log("Registration successful:", response.data);
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

  const login = (values) => {
    OrganizerAPI.login(values)
      .then((response) => {
        const statusResponse = getOrganizerStatus(values.email);
        console.log("status", statusResponse.data); 
        if(statusResponse.accountStatus=='active'){
          localStorage.setItem("uId", response.data._id);
          localStorage.setItem("name", response.data.name);
          localStorage.setItem("email", response.data.email);
          localStorage.setItem("authToken", response.data.token);
          localStorage.setItem("permissionLevel", response.data.permissionLevel);
          makeToast({ type: "success", message: "Login Successful" });
          window.location.href = "/organizer-home";
        }else{
          window.location.href = "/under-review";
        }
        
      })
      .catch((err) => {
        makeToast({ type: "error", message: "Invalid Email or Password" });
      });
  };

  const getAllOrganizers = async () => {
    try {
      const response = await OrganizerAPI.getOrganizers();
      setOrganizers(response.data);
      console.log("Organizers fetched successfully:", response.data);
    } catch (error) {
      console.error("Error fetching organizers:", error);
    }
  };

  const getOneOrganizer = async (id) => {
    try {
      const response = await OrganizerAPI.getOne(id);
      return response.data;
    } catch (error) {
      console.error("Error fetching organizer:", error);
      return null;
    }
  };

  const deleteOrganizer = async (id) => {
    try {
      await OrganizerAPI.delete(id);
      setOrganizers(organizers.filter((organizer) => organizer._id !== id));
      console.log("Organizer deleted successfully");
    } catch (error) {
      console.error("Error deleting organizer:", error);
    }
  };

  const updateOrganizerStatus = async (id, accountStatus) => {
    try {
      const response = await OrganizerAPI.updateDonorStatus(id, accountStatus);
      console.log("Donor status updated successfully:", response.data);
    } catch (error) {
      console.error("Error updating donor status:", error);
    }
  };

  const getOrganizerStatus = async (email) => {
    try {
      console.log("email"+email)
      const response = await OrganizerAPI.getOrganizerStatus(email);
      console.log("Donor status fetched successfully:", response.data);
      return response.data.status;
    } catch (error) {
      console.error("Error fetching donor status:", error);
      return null;
    }
  };

  return (
    <OrganizerContext.Provider
      value={{
        organizers,
        submitOrganizer,
        getAllOrganizers,
        getOneOrganizer,
        login,
        deleteOrganizer,
        updateOrganizerStatus,
        getOrganizerStatus,
        organizer,
        setOrganizer,
      }}
    >
      {children}
    </OrganizerContext.Provider>
  );
};

export default OrganizerContext;
