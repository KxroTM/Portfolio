import React from "react";
import Project from "./project";
import "./styles/allProjects.css";

const AllProjects = ({ projects }) => {
    return (
        <div className="all-projects-container">
            {projects.map((project, index) => (
                <div className="all-projects-project" key={project.id || index}>
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

