import React, { useState, useEffect } from "react";
import Navbar from "../components/navbar/navbar";
import BannerAbout from "../components/bannerAbout/bannerAbout";
import Footer from "../components/footer/footer";
import HashLoader from "react-spinners/HashLoader";

function About() {
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
        <BannerAbout />
        <Footer />
      </div>
    </div>
  );
}

export default About;
