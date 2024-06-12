import { createContext, useContext, useState } from "react";

type AuthStateType = {
  isLogged: boolean
  toggleLogin: () => void
}

const AuthContext = createContext<AuthStateType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isLogged, setIsLogged] = useState<boolean>(false)

  const toggleLogin = () => {
    setIsLogged((prevIsLogged) => !prevIsLogged);
  };

  return (
    <AuthContext.Provider
      value={{
        isLogged,
        toggleLogin,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

