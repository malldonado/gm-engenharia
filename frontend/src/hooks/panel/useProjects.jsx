import React, { useState } from "react";
import Image1 from "../../images/banner.jpg";
import Image2 from "../../images/banner.jpg";

function useProjects() {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const projectsData = [
    {
      projectName: "Architecture Plan",
      clientName: "Mercado Bom Dia",
      status: "Active",
      image: Image1,
    },
    {
      projectName: "Interior Design",
      clientName: "Café da Manhã",
      status: "Inactive",
      image: Image2,
    },
  ];

  return {
    showDropdown,
    toggleDropdown,
    projectsData,
  };
}

export default useProjects;
