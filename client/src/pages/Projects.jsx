import Navbar from "../components/navbar/navbar";
import BannerProjects from "../components/bannerProjects/bannerProjects";
import EveryProjects from "../components/everyProjects/everyProjects";
import Pagination from "../components/pagination/pagination";
import Footer from "../components/footer/footer";

function Projects() {
  return (
    <>
      <Navbar />
      <BannerProjects />
      <EveryProjects/>
      <Pagination/>
      <Footer/>
    </>
  )
}

export default Projects
