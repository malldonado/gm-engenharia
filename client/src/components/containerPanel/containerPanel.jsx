import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import ProjectsPanel from "../projectsPanel/projectsPanel";
import ProjectPanel from "../projectPanel/projectPanel";
import AboutPanel from "../aboutPanel/aboutPanel";
import SettingsPanel from "../settingsPanel/settingsPanel";
import PostPanel from "../postPanel/postPanel";
import MessagePanel from "../messagePanel/messagePanel";

function ContainerPanel() {
  const [content, setContent] = useState("");
  const location = useLocation();

  const handleEditorChange = (content, editor) => {
    setContent(content);
  };

  return (
    <div className="md:w-[80%] w-full">
      <div className="flex mt-[13px]">
        {location.pathname.indexOf("panel") === 1 ? (
          <PostPanel />
        ) : location.pathname.indexOf("projects-panel") === 1 ? (
          <ProjectsPanel />
        ) : location.pathname.indexOf("project-panel") === 1 ? (
          <ProjectPanel />
        ) : location.pathname.indexOf("about-panel") === 1 ? (
          <AboutPanel />
        ) : location.pathname.indexOf("message-panel") === 1 ? (
          <MessagePanel />
        ) : location.pathname.indexOf("settings-panel") === 1 ? (
          <SettingsPanel />
        ) : null}
      </div>
    </div>
  );
}

export default ContainerPanel;
