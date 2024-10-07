import React, { useState, useEffect } from "react";
import axios from "axios";

function useMessage() {
  const [projectsData, setProjectsData] = useState([]);
  const [selectedContact, setSelectedContact] = useState(null);
  const [popupOpen, setPopupOpen] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:8000/contact");
      setProjectsData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const deleteProject = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/contact/${id}`);
      setProjectsData(projectsData.filter((project) => project._id !== id));
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

  const openPopup = (contact) => {
    setSelectedContact(contact);
    setPopupOpen(true);
  };

  const closePopup = () => {
    setSelectedContact(null);
    setPopupOpen(false);
  };

  return {
    projectsData,
    selectedContact,
    popupOpen,
    openPopup,
    closePopup,
    deleteProject,
  };
}

export default useMessage;