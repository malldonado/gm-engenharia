import Navbar from '../components/navbar/navbar';
import BannerIndex from '../components/bannerIndex/bannerIndex';
import CategoriesIndex from '../components/categoriesIndex/categoriesIndex';
import OurProjectsIndex from '../components/ourProjectsIndex/ourProjectsIndex';
import CardOneIndex from '../components/cardOneIndex/cardOneIndex';
import MessageIndex from '../components/messageIndex/messageIndex';
import Footer from '../components/footer/footer';


function Index() {
  return (
    <>
      <Navbar/>
      <BannerIndex/>
      <CategoriesIndex/>
      <OurProjectsIndex/>
      <CardOneIndex/>
      <MessageIndex/>
      <Footer/>
    </>
  )
}

export default Index
