import Navbar from '../components/navbar/navbar';
import BannerIndex from '../components/bannerIndex/bannerIndex';
import CategoriesIndex from '../components/categoriesIndex/categoriesIndex';
import OurProjectsIndex from '../components/ourProjectsIndex/ourProjectsIndex';
import CardOneIndex from '../components/cardOneIndex/cardOneIndex';
import MessageIndex from '../components/messageIndex/messageIndex';
import Footer from '../components/footer/footer';
import ButtonWhatsApp from '../components/buttonWhatsApp/buttonWhatsApp';

function Index() {
  return (
    <>
      <Navbar/>
      <BannerIndex/>
      <CategoriesIndex/>
      <OurProjectsIndex/>
      <CardOneIndex/>
      <MessageIndex/>
      <ButtonWhatsApp/>
      <Footer/>
    </>
  )
}

export default Index
