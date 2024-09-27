import React from "react";
import Project from "./project"; // Assurez-vous que le chemin est correct
import INFO from "../../data/user"; // Ajout de l'import INFO
import "./styles/allProjects.css";

const AllProjects = () => {
    return (
        <div className="all-projects-container">
            {INFO.projects.map((project, index) => (
                <div className="all-projects-project" id={index}>
                    <Project
                        id={project.id}
                        logo={project.logo}
                        title={project.title}
                        description={project.description}
                        linkText={project.linkText}
                        link={project.link}
                    />
                </div>
            ))}
        </div>
    );
};

export default AllProjects;
