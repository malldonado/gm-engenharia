import Banner from "../../../images/banner.svg";

function Left() {
  return (
    <div className="md:w-[60%] hidden md:block">
      <div className="w-[100%] h-full bg-black flex justify-center items-center">
        <div className="flex flex-col items-center justify-center">
          <img src={Banner} className="h-auto my-auto mr-20 w-[60%]" alt="" />
          <h2 className="text-white font-bold text-[24px] nunito-font mt-10">
            GM ENGENHARIA
          </h2>
          <p className="mt-2 text-white nunito-font text-[20px] text-center">
             GM Engenharia Civil é especializada em soluções inovadoras <br /> e eficientes para projetos de construção e infraestrutura
          </p>
        </div>
      </div>
    </div>
  );
}

export default Left;
