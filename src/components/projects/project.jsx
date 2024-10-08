import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, Navigate } from "react-router-dom";
import { faLink, faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "../../context/AuthContext";
import "./styles/project.css";
import { useNavigate } from "react-router-dom"; 

const Project = (props) => {
    const { id, logo, title, description, linkText, link } = props;
    const { isAuthenticated } = useAuth();
    const navigate = useNavigate(); 

    const handleDelete = (e) => {
        e.preventDefault(); 
        fetch(`http://localhost:8080/delete?id=` + id, {
            method: "DELETE",
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                window.location.reload();
            });
    };

    const handleEdit = (e) => {
        e.preventDefault(); 
        navigate(`/edit/${id}`);
    };

    return (
        <React.Fragment>
            <div className="project">
                <Link to={link} onClick={(e) => e.stopPropagation()}>
                    <div className="project-container" id={id}>
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
                        {isAuthenticated && (
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
