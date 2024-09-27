import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext"; // Importer le contexte
import "./styles/navBar.css";

const NavBar = ({ active }) => {
    const { isAuthenticated } = useAuth(); // Utiliser l'état isAuthenticated du contexte

    return (
        <React.Fragment>
            <div className="nav-container">
                <nav className="navbar">
                    <div className="nav-background">
                        <ul className="nav-list">
                            <li className={active === "home" ? "nav-item active" : "nav-item"}>
                                <Link to="/">Accueil</Link>
                            </li>
                            <li className={active === "about" ? "nav-item active" : "nav-item"}>
                                <Link to="/about">À Propos</Link>
                            </li>
                            <li className={active === "projects" ? "nav-item active" : "nav-item"}>
                                <Link to="/projects">Projects</Link>
                            </li>
                            <li className={active === "contact" ? "nav-item active" : "nav-item"}>
                                <Link to="/contact">Contact</Link>
                            </li>
                            <li className={active === "login" ? "nav-item active" : "nav-item"}>
                                {isAuthenticated ? (
                                    <Link to="/logout">Déconnexion</Link>
                                ) : (
                                    <Link to="/login">Connexion</Link>
                                )}
                            </li>
                            {isAuthenticated ? (
                            <li className={active === "admin" ? "nav-item active" : "nav-item"}>
                                <Link to="/admin">Admin</Link>
                            </li>                                
                            ):() => null}

                        </ul>
                    </div>
                </nav>
            </div>
        </React.Fragment>
    );
};

export default NavBar;
