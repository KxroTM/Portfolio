import React, { createContext, useState, useEffect, useContext } from 'react';

// Crée le contexte d'authentification
const AuthContext = createContext();

// Utiliser le contexte pour faciliter l'utilisation dans les composants
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    // Récupérer l'état d'authentification depuis localStorage au chargement
    const [isAuthenticated, setIsAuthenticated] = useState(() => {
        return localStorage.getItem('isAuthenticated') === 'true';
    });

    // Fonction pour authentifier l'utilisateur
    const login = () => {
        setIsAuthenticated(true);
        localStorage.setItem('isAuthenticated', 'true'); // Stocker dans localStorage
    };

    // Fonction pour déconnecter l'utilisateur
    const logout = () => {
        setIsAuthenticated(false);
        localStorage.removeItem('isAuthenticated'); // Supprimer de localStorage
    };

    // Utiliser useEffect pour gérer l'initialisation et les effets secondaires
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
