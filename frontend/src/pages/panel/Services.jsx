import Sidebar from "../../components/site/sidebar/sidebar";
import ContainerPanel from "../../components/panel/container/container";
import NavbarPanel from "../../components/panel/navbar/navbar";
import React from "react";

function Services() {
  return (
    <div className="bg-[#f9fafb] h-[100vh]">
      <NavbarPanel />
      <div className="max-w-[80%] h-[90vh] m-auto flex overflow-hidden">
        <Sidebar />
        <ContainerPanel />
      </div>
    </div>
  )
}

export default Services
