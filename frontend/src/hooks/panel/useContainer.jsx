import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ProjectsPanel from "../../components/projectsPanel/projectsPanel";
import ProjectPanel from "../../components/projectPanel/projectPanel";
import AboutPanel from "../../components/panel/about/about";
import SettingsPanel from "../../components/settingsPanel/settingsPanel";
import PostPanel from "../../components/postPanel/postPanel";
import MessagePanel from "../../components/messagePanel/messagePanel";

function useContainer() {
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
  return {
    loading,
    renderPanel,
  };
}

export default useContainer;