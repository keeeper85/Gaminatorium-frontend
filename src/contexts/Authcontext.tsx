import { createContext, useState } from "react";

type AuthStateType = {
  isLogged: boolean
  toggleLogin: () => void
}

export const AuthContext = createContext<AuthStateType | undefined>(undefined);

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