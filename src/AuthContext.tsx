import { createContext, useEffect, useState } from "react";
import { auth, signIn, signOut } from "./firebase";

const AuthContext = createContext<any>({});

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    auth.authStateReady().then(() => {
      setUser(auth.currentUser);
      setLoading(false);
    });
  }, []);

  const login = async () => {
    setLoading(true);
    const creds = await signIn();
    setUser(creds);
    setLoading(false);
    return creds;
  }

  const logout = async () => {
    setLoading(true);
    await signOut();
    setUser(null);
    setLoading(false);
  }

  const authValue = {
    user,
    loading,
    login,
    logout,
  };

  return <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>;
};

export { AuthProvider, AuthContext };