import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Projects from "../../components/site/projects/projects";
import Project from "../../components/panel/project/project";
import About from "../../components/panel/about/about";
import Settings from "../../components/panel/settings/settings";
import Post from "../../components/panel/post/post";
import Message from "../../components/panel/message/message";

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
      return <Post />;
    } else if (location.pathname.indexOf("projects-panel") === 1) {
      return <Projects />;
    } else if (location.pathname.indexOf("project-panel") === 1) {
      return <Project />;
    } else if (location.pathname.indexOf("about-panel") === 1) {
      return <About />;
    } else if (location.pathname.indexOf("message-panel") === 1) {
      return <Message />;
    } else if (location.pathname.indexOf("settings-panel") === 1) {
      return <Settings />;
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