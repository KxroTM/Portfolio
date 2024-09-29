import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom"; // Pour récupérer l'id de l'URL
import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import { useNavigate } from "react-router-dom"; // Importer useNavigate

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/admin.css";

const Edit = () => {
    const { id } = useParams(); 
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
        fetchProjectData(); 
    }, []);

    const currentSEO = SEO.find((item) => item.page === "admin") || {};

    const [title, setTitle] = useState("");
    const [language, setLanguage] = useState("javascript");
    const [summary, setSummary] = useState("");
    const [link, setLink] = useState("");

    const fetchProjectData = async () => {
        try {
            const response = await fetch(`http://localhost:8080/projet?id=${id}`);
            const projectData = await response.json();

            setTitle(projectData.title);

            if (projectData.langage) {
                setLanguage(projectData.langage);
            } else {
                setLanguage("javascript");
            }
            setSummary(projectData.description);
            setLink(projectData.link);
        } catch (error) {
            console.error("Erreur lors de la récupération des données du projet:", error);
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault(); 

        const url = `http://localhost:8080/edit?id=${id}&title=${encodeURIComponent(title)}&langage=https://cdn.jsdelivr.net/npm/programming-languages-logos/src/${language}/${language}.png&description=${encodeURIComponent(summary)}&link=${encodeURIComponent(link)}`;

        try {
            const response = await fetch(url, {
                method: "PUT",
            });

            if (!response.ok) {
                throw new Error("Erreur lors de la mise à jour du projet");
            }

            navigate("/projects"); 
        } catch (error) {
            console.error("Erreur:", error);
            alert("Échec de la mise à jour du projet. Veuillez réessayer.");
        }
    };

    return (
        <React.Fragment>
            <Helmet>
                <title>{`Éditer un projet | ${INFO.main.title}`}</title>
                <meta name="description" content={currentSEO.description || ""} />
                <meta
                    name="keywords"
                    content={currentSEO.keywords ? currentSEO.keywords.join(", ") : ""}
                />
            </Helmet>
            <div className="page-content">
                <NavBar />
                <div className="content-wrapper">
                    <div className="contact-logo-container">
                        <div className="contact-logo">
                            <Logo width={46} />
                        </div>
                    </div>

                    <div className="contact-container">
                        <div className="title contact-title">Éditer</div>

                        <div className="subtitle contact-subtitle">
                            Pour éditer le projet, veuillez remplir le formulaire ci-dessous
                        </div>

                        <form onSubmit={handleSubmit}>
                            <div className="Titre1">
                                <div className="input-container">
                                    <input
                                        type="text"
                                        id="input"
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)} 
                                        required
                                    />
                                    <label htmlFor="input" className="label">Titre : </label>
                                    <div className="underline"></div>
                                </div>
                            </div>
                            <div className="Text1">
                                <p>Selectionner le langage de programmation</p>
                            </div>
                            <div className="Selector">
                                <select 
                                    name="listeDeroulante" 
                                    value={language} 
                                    onChange={(e) => setLanguage(e.target.value)} 
                                >
                                    <optgroup label="Sélectionner le langage de programmation">
                                        <option value="c">C</option>
                                        <option value="cpp">C++</option>
                                        <option value="csharp">C#</option>
                                        <option value="css">CSS</option>
                                        <option value="go">Go</option>
                                        <option value="haskell">Haskell</option>
                                        <option value="html">HTML</option>
                                        <option value="java">Java</option>
                                        <option value="javascript">JavaScript</option>
                                        <option value="kotlin">Kotlin</option>
                                        <option value="lua">Lua</option>
                                        <option value="php">PHP</option>
                                        <option value="python">Python</option>
                                        <option value="r">R</option>
                                        <option value="ruby">Ruby</option>
                                        <option value="swift">Swift</option>
                                        <option value="typescript">TypeScript</option>
                                    </optgroup>
                                </select>
                            </div>
                            <div className="Text2">
                                <div className="inputBox">
                                    <textarea
                                        placeholder="Taper ici..."
                                        value={summary}
                                        onChange={(e) => setSummary(e.target.value)} 
                                        required
                                    />
                                    <span>Résumé</span>
                                </div>

                                <div className="input-container">
                                    <input
                                        type="text"
                                        id="link"
                                        value={link}
                                        onChange={(e) => setLink(e.target.value)}
                                        required
                                    />
                                    <label htmlFor="link" className="label">Lien : </label>
                                    <div className="underline"></div>
                                </div>

                                <div className="buttonValider">
                                    <button type="submit">
                                        <span className="button_top"> Valider </span>
                                    </button>
                                </div>
                            </div>  
                        </form>

                        <div className="page-footer">
                            <Footer />
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Edit;
