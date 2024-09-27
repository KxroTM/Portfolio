import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faLink, faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "../../context/AuthContext"; // Importer le contexte d'authentification
import "./styles/project.css";

const Project = (props) => {
    const { logo, title, description, linkText, link } = props;
    const { isAuthenticated } = useAuth(); // Accéder à isAuthenticated depuis le contexte

    const handleDelete = () => {
        alert(`Le projet "${title}" a été supprimé.`);
    };

    const handleEdit = () => {
        alert(`Modification du projet "${title}".`);
    };

    return (
        <React.Fragment>
            <div className="project">
                <Link to={link}>
                    <div className="project-container">
                        <div className="project-logo">
                            <img src={logo} alt="logo" />
                        </div>
                        <div className="project-title">{title}</div>
                        <div className="project-description">{description}</div>
                        <div className="project-link">
                            <div className="project-link-icon">
                                <FontAwesomeIcon icon={faLink} />
                            </div>
                            <div className="project-link-text">{linkText}</div>
                        </div>
                        {isAuthenticated && ( // Vérifier si l'utilisateur est connecté
                            <div className="project-actions">
                                <button onClick={handleEdit}>
                                    <FontAwesomeIcon icon={faEdit} />
                                </button>
                                <button onClick={handleDelete}>
                                    <FontAwesomeIcon icon={faTrash} />
                                </button>
                            </div>
                        )}
                    </div>
                </Link>
            </div>
        </React.Fragment>
    );
};

export default Project;
