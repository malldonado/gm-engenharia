import { FaWhatsappSquare } from "react-icons/fa";

function ButtonWhatsApp() {
  return (
    <div className="fixed bottom-5 right-5 z-50 text-[50px] text-[#42ea60] rounded-md bg-white cursor-pointer">
      <a href="https://wa.me/5519993639960?text=Ol%C3%A1%21+%F0%9F%91%8B+Somos+a+GM+Engenharia%2C+sua+parceira+em+projetos+que+transformam+sonhos+em+realidade.+%F0%9F%8F%97%EF%B8%8F%E2%9C%A8+Precisa+de+uma+solu%C3%A7%C3%A3o+em+engenharia+civil%3F+Estamos+aqui+para+ajudar%21+"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsappSquare />
      </a>
    </div>
  );
}

export default ButtonWhatsApp;
