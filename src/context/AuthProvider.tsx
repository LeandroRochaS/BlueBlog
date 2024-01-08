import React, { useEffect, useState } from "react";
import { AuthContextValue, AuthContext } from "./AuthContext";
import { UserProfileType } from "../utils/types";

// Recupere as informações do localStorage ao iniciar o aplicativo
const initialUserData = JSON.parse(localStorage.getItem("userData") || "null");

// Componente AuthProvider que utiliza o contexto
export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [userData, setUserData] = useState<UserProfileType | null>(
    initialUserData
  );
  const [isLoggedUser, setIsLoggedUser] = useState<boolean>(
    initialUserData !== null
  );

  useEffect(() => {
    if (userData) {
      console.log("Usuário logado");
      setIsLoggedUser(true);
      // Atualize o localStorage ao efetuar login
      localStorage.setItem("userData", JSON.stringify(userData));
    } else {
      console.log("Usuário não logado");
      // Limpe o localStorage ao efetuar logout
      localStorage.removeItem("userData");
    }
  }, [userData]);

  const login = (userDataResponse: UserProfileType) => {
    setUserData(userDataResponse);
    console.log(userDataResponse);
  };

  // Função para efetuar logout
  const logout = () => {
    setUserData(null);
  };

  // Valor do contexto que será fornecido
  const authContextValue: AuthContextValue = {
    userDataAuthContext: userData,
    isLoggedUser,
    logoutAuthContext: logout,
    loginAuthContext: login,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
}
