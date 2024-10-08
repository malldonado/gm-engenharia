import React, { useState, useEffect } from 'react';
import Navbar from '../../components/site/navbar/navbar';
import Banner from '../../components/site/banner/banner';
import Services from '../../components/site/services/services';
import OurProjects from '../../components/site/ourProjects/ourProjects';
import CardOne from '../../components/site/cardOneIndex/cardOne';
import Message from '../../components/site/message/message';
import Footer from '../../components/site/footer/footer';
import ButtonWhatsApp from '../../components/site/buttonWhatsApp/buttonWhatsApp';
import HashLoader from 'react-spinners/HashLoader';

function IndexPage() {
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
        <Banner />
        <Services />
        <OurProjects />
        <CardOne />
        <Message />
        <ButtonWhatsApp />
        <Footer />
      </div>
    </div>
  );
}

export default IndexPage;
