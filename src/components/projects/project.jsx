import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink, faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";

import "./styles/project.css";

const Project = (props) => {
	const { logo, title, description, linkText, link } = props;
	const [isLoggedIn, setIsLoggedIn] = useState(false); // État de connexion

	// Fonction pour supprimer le projet
	const handleDelete = () => {
		// Logique pour supprimer le projet (par exemple, appel à une API)
		alert(`Le projet "${title}" a été supprimé.`);
	};

	// Fonction pour modifier le projet
	const handleEdit = () => {
		// Logique pour modifier le projet (par exemple, redirection vers un formulaire de modification)
		alert(`Modification du projet "${title}".`);
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
					{isLoggedIn && ( // Afficher les boutons uniquement si connecté
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
			</div>

			{/* Bouton pour simuler la connexion/déconnexion */}
			<div className="project-login">
			<button onClick={() => setIsLoggedIn(!isLoggedIn)}>
				{isLoggedIn ? "Se déconnecter" : "Se connecter"}
			</button>
		</div>
		</React.Fragment>
	);
};

export default Project;
