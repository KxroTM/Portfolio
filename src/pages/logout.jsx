import React, { useEffect } from "react";
import { useAuth } from "../context/AuthContext"; // Importer le contexte

const Logout = () => {
    const { logout } = useAuth(); // Utiliser la fonction logout du contexte

    useEffect(() => {
        logout(); // Déconnecter l'utilisateur
        window.location.href = "/login";
    }, [logout]);

    return <div>Logging out...</div>;
};

export default Logout;
