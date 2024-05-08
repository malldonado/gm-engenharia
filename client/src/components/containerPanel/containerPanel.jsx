import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import TableServices from "../tableServices/tableServices";
import ProjectsPanel from "../projectsPanel/projectsPanel";
import AboutPanel from "../aboutPanel/aboutPanel";
import SettingsPanel from "../settingsPanel/settingsPanel";
import PostPanel from "../postPanel/postPanel";

function ContainerPanel() {
  const [content, setContent] = useState("");
  const location = useLocation();

  const handleEditorChange = (content, editor) => {
    setContent(content);
  };

  return (
    <div className="w-[80%]">
      <div className="flex mt-[13px]">
        {location.pathname.indexOf("panel") === 1 ? (
          <PostPanel />
        ) : location.pathname.indexOf("services-panel") === 1 ? (
          <TableServices/>
        ) : location.pathname.indexOf("projects-panel") === 1 ? (
          <ProjectsPanel />
        ) : location.pathname.indexOf("about-panel") === 1 ? (
          <AboutPanel />
        ) : location.pathname.indexOf("settings-panel") === 1 ? (
          <SettingsPanel />
        ) : null}
      </div>
    </div>
  );
}

export default ContainerPanel;
