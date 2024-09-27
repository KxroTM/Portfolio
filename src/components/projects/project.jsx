import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink, faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { useAuth } from "../../context/AuthContext"; // Importe le contexte ici

import "./styles/project.css";

const Project = (props) => {
    const { id, logo, title, description, linkText } = props;
    const { isAuthenticated } = useAuth(); // Utilise le contexte d'authentification

    // Fonction pour supprimer le projet
    const handleDelete = (id) => {
		window.location.href = "http://localhost:8080/delete?"+id;
    };

    // Fonction pour modifier le projet
    const handleEdit = () => {
		window.location.href = "/edit";
    };

    return (
        <React.Fragment>
            <div className="project">
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
                    {isAuthenticated && ( // Remplace IsConnected par isAuthenticated
                        <div className="project-actions">
                            <button onClick={handleEdit}>
                                <FontAwesomeIcon icon={faEdit} />
                            </button>
                            <button onClick={handleDelete(id)}>
                                <FontAwesomeIcon icon={faTrash} />
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </React.Fragment>
    );
};

export default Project;
