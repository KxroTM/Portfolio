import React, { useState, createContext, useContext, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const isLoggedIn = localStorage.getItem("isAuthenticated") === "true";
        setIsAuthenticated(isLoggedIn);
    }, []);

    const login = () => {
        setIsAuthenticated(true);
        localStorage.setItem("isAuthenticated", "true");
    };

    const logout = () => {
        setIsAuthenticated(false);
        localStorage.setItem("isAuthenticated", "false");
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

// Hook personnalisé pour utiliser le contexte
export const useAuth = () => {
    return useContext(AuthContext);
};
