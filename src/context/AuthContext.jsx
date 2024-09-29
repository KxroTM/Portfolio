import React, { createContext, useState, useEffect, useContext } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(() => {
        return localStorage.getItem('isAuthenticated') === 'true';
    });

    const login = () => {
        setIsAuthenticated(true);
        localStorage.setItem('isAuthenticated', 'true');
    };

    const logout = () => {
        setIsAuthenticated(false);
        localStorage.removeItem('isAuthenticated');
    };

    useEffect(() => {
        const storedAuth = localStorage.getItem('isAuthenticated') === 'true';
        setIsAuthenticated(storedAuth);
    }, []);

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
