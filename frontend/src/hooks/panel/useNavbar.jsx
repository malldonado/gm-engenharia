import { useState, useEffect } from "react";
import axios from "axios";

function useNavbar() {
  const [isSubnavOpen, setIsSubnavOpen] = useState(false);
  const [userFirstName, setUserFirstName] = useState("");

  useEffect(() => {
    // Função para buscar informações do usuário
    const fetchUserInfo = async () => {
      try {
        const response = await axios.get("http://localhost:8000/user-update");
        setUserFirstName(response.data.firstName);
      } catch (error) {
        console.error("Erro ao buscar informações do usuário:", error);
        // Trate o erro conforme necessário
      }
    };

    fetchUserInfo();
  }, []);

  const handleSubnavToggle = () => {
    setIsSubnavOpen(!isSubnavOpen);
  };

  const handleLogout = () => {
    // Implemente sua lógica de logout aqui
  };
  return {isSubnavOpen, userFirstName, fetchUserInfo, handleSubnavToggle, handleLogout}
}

export default useNavbar