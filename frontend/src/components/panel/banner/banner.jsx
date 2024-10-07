import useBanner from "../../../hooks/panel/useBanner";

function Banner() {
  const { aboutData, renderParagraphs } = useBanner();
  return (
    <div className="max-w-7xl md:flex md:justify-center mx-auto md:mt-20 mt-10 items-start px-4 md:px-0">
      {aboutData &&
        aboutData.file && (
          <img
            className="md:h-[400px] md:w-[400px] object-cover md:mr-10 w-full h-full"
            src={`http://localhost:8000/uploads/${aboutData.file}`}
            alt=""
          />
        )}
      <div className="md:w-[50%] mt-10 md:mt-0">
        <div className="text-white">
          {aboutData ? (
            <>
              <h1 className="text-4xl overflow-hidden">
                {aboutData.title}
              </h1>
              <br />
              {renderParagraphs(aboutData.text)}
            </>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Banner;
