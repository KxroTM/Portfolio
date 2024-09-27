import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faLink, faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "../../context/AuthContext"; // Importer le contexte d'authentification
import "./styles/project.css";

const Project = (props) => {
<<<<<<< HEAD
    const { id, logo, title, description, linkText } = props;
    const { isAuthenticated } = useAuth(); // Utilise le contexte d'authentification

    // Fonction pour supprimer le projet
    const handleDelete = (id) => {
		window.location.href = "http://localhost:8080/delete?"+id;
=======
    const { logo, title, description, linkText, link } = props;
    const { isAuthenticated } = useAuth(); // Accéder à isAuthenticated depuis le contexte

    const handleDelete = () => {
        alert(`Le projet "${title}" a été supprimé.`);
>>>>>>> 3f87399be75fa9173f62d3ffff6f7ab5adafb581
    };

    const handleEdit = () => {
		window.location.href = "/edit";
    };

    return (
        <React.Fragment>
            <div className="project">
                <Link to={link}>
                    <div className="project-container">
                        <div className="project-logo">
                            <img src={logo} alt="logo" />
                        </div>
<<<<<<< HEAD
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
=======
                        <div className="project-title">{title}</div>
                        <div className="project-description">{description}</div>
                        <div className="project-link">
                            <div className="project-link-icon">
                                <FontAwesomeIcon icon={faLink} />
                            </div>
                            <div className="project-link-text">{linkText}</div>
>>>>>>> 3f87399be75fa9173f62d3ffff6f7ab5adafb581
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
