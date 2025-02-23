import React, { createContext, useState, useEffect } from 'react';
import { login, register, logout } from '../services/authService';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('authToken');
        if (token) {
          setUser(token); // ✅ Store only token
        }
      }, []);

    const loginUser = async (userData) => {
        const data = await login(userData);
        setUser(data.user);
        localStorage.setItem('authToken', data.token); // ✅ Store token
      };

    const registerUser = async (userData) => {
        const data = await register(userData);
        setUser(data.user);
        localStorage.setItem('authToken', data.token);
      };

    const logoutUser = () => {
        logout();
        setUser(null);
        localStorage.removeItem('authToken');
      };

    return (
        <AuthContext.Provider value={{ user, loginUser, registerUser, logoutUser }}>
          {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
