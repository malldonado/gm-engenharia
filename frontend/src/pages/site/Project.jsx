import React, { useState, useEffect } from 'react';
import Navbar from "../../components/site/navbar/navbar";
import Footer from "../../components/site/footer/footer";
import Project from "../../components/panel/project/project";
import HashLoader from 'react-spinners/HashLoader';

function ProjectPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative">
      <div className={`flex justify-center items-center w-full h-screen overflow-y-hidden ${loading ? '' : 'hidden'}`}>
        <HashLoader color="#ffffff" size={100} />
      </div>
      
      <div className={`${loading ? 'hidden' : ''}`}>
        <Navbar />
        <Project />
        <Footer />
      </div>
    </div>
  );
}

export default ProjectPage;
