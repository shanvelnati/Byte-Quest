import React, { useEffect, createContext, useContext } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { app } from '../Config/firebase';

const auth = getAuth(app);
const AuthContext = createContext({ user: null });

export const AuthProvider = ({ children }) => {
  const [user, setUser] = React.useState(null);

  useEffect(() => {
    const unsubscribeFromAuthStateChanged = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return unsubscribeFromAuthStateChanged;
  }, []);

  return <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>;
};

export function useAuth() {
  return useContext(AuthContext);
}