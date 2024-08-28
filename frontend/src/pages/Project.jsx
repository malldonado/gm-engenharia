import React, { useState, useEffect } from 'react';
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import ProjectOpen from "../components/projectOpen/projectOpen";
import HashLoader from 'react-spinners/HashLoader';

function Project() {
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
        <ProjectOpen />
        <Footer />
      </div>
    </div>
  );
}

export default Project;
