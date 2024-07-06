import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ProjectsPanel from "../projectsPanel/projectsPanel";
import ProjectPanel from "../projectPanel/projectPanel";
import AboutPanel from "../aboutPanel/aboutPanel";
import SettingsPanel from "../settingsPanel/settingsPanel";
import PostPanel from "../postPanel/postPanel";
import MessagePanel from "../messagePanel/messagePanel";
import HashLoader from 'react-spinners/HashLoader';

function ContainerPanel() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [location]);

  const renderPanel = () => {
    if (location.pathname.indexOf("panel") === 1) {
      return <PostPanel />;
    } else if (location.pathname.indexOf("projects-panel") === 1) {
      return <ProjectsPanel />;
    } else if (location.pathname.indexOf("project-panel") === 1) {
      return <ProjectPanel />;
    } else if (location.pathname.indexOf("about-panel") === 1) {
      return <AboutPanel />;
    } else if (location.pathname.indexOf("message-panel") === 1) {
      return <MessagePanel />;
    } else if (location.pathname.indexOf("settings-panel") === 1) {
      return <SettingsPanel />;
    } else {
      return null;
    }
  };

  return (
    <div className="md:w-[80%] w-full">
      <div className="flex mt-[13px] w-full">
        <div className="w-full h-full">
            <div className={`flex justify-center items-center h-[350px] w-full overflow-hidden ${loading ? '' : 'hidden'}`}>
              <HashLoader color="#000000" size={100} />
            </div>
          <div className={`${loading ? 'hidden' : ''}`}>
            {renderPanel()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContainerPanel;
