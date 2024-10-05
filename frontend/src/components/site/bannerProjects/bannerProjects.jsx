import "react-slideshow-image/dist/styles.css";
import useBanner from "../../../hooks/site/useBannerProjects";

function BannerProjects() {

  const { data, isLoading, error } = useBanner();

  return (
    <div className="bg-black/50 auto flex">
      <div className="w-full relative">
        {data.map((item, index) => (
          <div key={index} className="bg-black/50 w-full z-100 relative">
            {item.image && (
              <img
                className="z-[-1] relative object-cover h-[300px] w-full"
                src={`http://localhost:8000/uploads/${item.image}`}
                alt="Banner Image"
              />
            )}
            <div className="mx-auto absolute bottom-[70px] h-auto md:left-[10%] px-4 md:px-0">
              <div className="w-full h-full">
                <div className="md:text-[70px] text-[50px] font-medium text-white tracking-[5px] leading-[6rem] overflow-hidden">
                  PROJECTS
                </div>
                <p className="text-[20px] text-white opacity-90 mt-5 w-full">
                  Explore our project gallery and discover how we turn visions
                  into reality.
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BannerProjects;
