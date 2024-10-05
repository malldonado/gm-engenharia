import React, { useState, useEffect } from 'react';
import Navbar from '../../components/site/navbar/navbar';
import BannerIndex from '../../components/site/banner/banner';
import CategoriesIndex from '../../components/servicos/servicos';
import OurProjectsIndex from '../../components/ourProjectsIndex/ourProjectsIndex';
import CardOneIndex from '../../components/site/cardOneIndex/cardOneIndex';
import MessageIndex from '../../components/site/message/message';
import Footer from '../../components/site/footer/footer';
import ButtonWhatsApp from '../../components/site/buttonWhatsApp/buttonWhatsApp';
import HashLoader from 'react-spinners/HashLoader';

function Index() {
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
        <BannerIndex />
        <CategoriesIndex />
        <OurProjectsIndex />
        <CardOneIndex />
        <MessageIndex />
        <ButtonWhatsApp />
        <Footer />
      </div>
    </div>
  );
}

export default Index;
