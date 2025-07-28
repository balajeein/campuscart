import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

const USERS_KEY = 'users';
const USER_KEY = 'user';

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem(USER_KEY);
    return storedUser ? JSON.parse(storedUser) : null;
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem(USER_KEY, JSON.stringify(user));
    } else {
      localStorage.removeItem(USER_KEY);
    }
  }, [user]);

  const login = (username, password, college) => {
    const users = JSON.parse(localStorage.getItem(USERS_KEY)) || [];
    const found = users.find(u => u.username === username && u.password === password);
    if (found) {
      setUser({ username, college });
      return true;
    }
    return false;
  };

  const signup = (username, password, college) => {
    let users = JSON.parse(localStorage.getItem(USERS_KEY)) || [];
    if (users.find(u => u.username === username)) {
      return false; // Username already exists
    }
    users.push({ username, password, college });
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
    setUser({ username, college });
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem(USER_KEY);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, signup }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext); 