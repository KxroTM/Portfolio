import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext"; // Utilise le hook useAuth

const ProtectedRoute = ({ children }) => {
    const { isAuthenticated } = useAuth(); // Utilise le hook pour obtenir l'état d'authentification

    if (!isAuthenticated) {
        return <Navigate to="/login" />;
    }

    return children;
};

export default ProtectedRoute;
