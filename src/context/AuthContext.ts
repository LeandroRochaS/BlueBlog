// AuthContext.js
import { createContext, useContext } from "react";
import { UserProfileType } from "../utils/types";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type AuthContextValue = {
  userDataAuthContext: UserProfileType | null;
  isLoggedUser: boolean;
  logoutAuthContext: () => void;
  loginAuthContext: (userData: UserProfileType) => void;
};

export const AuthContext = createContext<AuthContextValue | undefined>(
  undefined
);

export function useAuthContext() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("Fora do AuthProvider");
  }
  return context;
}
