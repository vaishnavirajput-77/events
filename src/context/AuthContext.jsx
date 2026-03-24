import { createContext, useContext, useState, useCallback } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('eventdhara_user');
    return saved ? JSON.parse(saved) : null;
  });
  const [token, setToken] = useState(() => localStorage.getItem('eventdhara_token'));

  const login = useCallback((userData, jwt) => {
    setUser(userData);
    setToken(jwt);
    localStorage.setItem('eventdhara_user', JSON.stringify(userData));
    localStorage.setItem('eventdhara_token', jwt);
  }, []);

  const signup = useCallback((userData, jwt) => {
    setUser(userData);
    setToken(jwt);
    localStorage.setItem('eventdhara_user', JSON.stringify(userData));
    localStorage.setItem('eventdhara_token', jwt);
  }, []);

  const logout = useCallback(() => {
    setUser(null);
    setToken(null);
    localStorage.removeItem('eventdhara_user');
    localStorage.removeItem('eventdhara_token');
  }, []);

  return (
    <AuthContext.Provider value={{ user, token, isAuthenticated: !!user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
