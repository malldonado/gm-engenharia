import { useState, useEffect, useCallback } from "react";
import axios from "axios";

function useNavbar() {
  const [isSubnavOpen, setIsSubnavOpen] = useState(false);
  const [userFirstName, setUserFirstName] = useState("");

  // Função para buscar informações do usuário, memoizada com useCallback
  const fetchUserInfo = useCallback(async () => {
    try {
      const { data } = await axios.get("http://localhost:8000/user-update");
      setUserFirstName(data.firstName);
    } catch (error) {
      console.error("Erro ao buscar informações do usuário:", error);
    }
  }, []);

  useEffect(() => {
    fetchUserInfo();
  }, [fetchUserInfo]);

  const handleSubnavToggle = () => setIsSubnavOpen(prevState => !prevState);

  const handleLogout = () => {
    // Implemente sua lógica de logout aqui
  };

  return { isSubnavOpen, userFirstName, handleSubnavToggle, handleLogout };
}

export default useNavbar;
