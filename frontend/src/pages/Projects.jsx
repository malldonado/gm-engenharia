import React, { useState, useEffect } from "react";
import Navbar from "../components/navbar/navbar";
import BannerProjects from "../components/bannerProjects/bannerProjects";
import EveryProjects from "../components/everyProjects/everyProjects";
import Pagination from "../components/pagination/pagination";
import Footer from "../components/footer/footer";
import HashLoader from "react-spinners/HashLoader";

function Projects() {
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
        <BannerProjects />
        <EveryProjects />
        <Pagination />
        <Footer />
      </div>
    </div>
  );
}

export default Projects;
