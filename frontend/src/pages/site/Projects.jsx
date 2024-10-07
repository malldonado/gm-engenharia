import React, { useState, useEffect } from "react";
import Navbar from "../../components/site/navbar/navbar";
import BannerProjects from "../../components/site/bannerProjects/bannerProjects";
import EveryProjects from "../../components/site/everyProjects/everyProjects";
import Pagination from "../../components/site/pagination/pagination";
import Footer from "../../components/site/footer/footer";
import HashLoader from "react-spinners/HashLoader";

function ProjectsPage() {
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

export default ProjectsPage;
