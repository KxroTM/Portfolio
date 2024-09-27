import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import AllProjects from "../components/projects/allProjects";
import INFO from "../data/user";
import SEO from "../data/seo";
import "./styles/projects.css";
import { GetAllsProjects } from "../data/user";

const Projects = () => {
    const [projects, setProjects] = useState([]); // Utiliser useState pour stocker les projets récupérés

    useEffect(() => {
        window.scrollTo(0, 0);

        // Charger les projets via l'API et mettre à jour l'état
        GetAllsProjects().then((fetchedProjects) => {
            setProjects(fetchedProjects); // Mettre à jour l'état avec les projets récupérés
        });
    }, []);

    const currentSEO = SEO.find((item) => item.page === "projects");

    return (
        <React.Fragment>
            <Helmet>
                <title>{`Projects | ${INFO.main.title}`}</title>
                <meta name="description" content={currentSEO.description} />
                <meta name="keywords" content={currentSEO.keywords.join(", ")} />
            </Helmet>

            <div className="page-content">
                <NavBar active="projects" />
                <div className="content-wrapper">
                    <div className="projects-logo-container">
                        <div className="projects-logo">
                            <Logo width={46} />
                        </div>
                    </div>
                    <div className="projects-container">
                        <div className="title projects-title">
                            Des choses que j'ai faites pour essayer de laisser ma trace dans l'univers.
                        </div>

                        <div className="subtitle projects-subtitle">
                            J'ai travaillé sur une variété de projets au fil des ans et je suis fier des progrès que j'ai réalisés. Beaucoup de ces projets sont open source et disponibles pour que d'autres puissent les explorer et y contribuer. Si vous êtes intéressé par l'un des projets sur lesquels j'ai travaillé, n'hésitez pas à consulter le code et à suggérer les améliorations ou les perfectionnements que vous pourriez avoir en tête. Collaborer avec d'autres est un excellent moyen d'apprendre et de grandir, et je suis toujours ouvert aux nouvelles idées et aux commentaires.
                        </div>

                        <div className="projects-list">
                            <AllProjects projects={projects} /> {/* Passer les projets récupérés ici */}
                        </div>
                    </div>
                    <div className="page-footer">
                        <Footer />
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Projects;
