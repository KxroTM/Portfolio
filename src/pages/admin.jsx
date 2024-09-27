import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/admin.css";  

const Admin = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const currentSEO = SEO.find((item) => item.page === "admin") || {};

    // État pour gérer les valeurs du formulaire
    const [title, setTitle] = useState("");
    const [language, setLanguage] = useState("javascript"); // Valeur par défaut
    const [summary, setSummary] = useState("");
    const [link, setLink] = useState(""); // Nouvel état pour le lien

    // Fonction pour gérer l'envoi du formulaire
    const handleSubmit = async (event) => {
        event.preventDefault(); // Empêche le rechargement de la page

        // Construire l'URL avec les paramètres de requête
        const url = `http://localhost:8080/add?title=${encodeURIComponent(title)}&langage=${encodeURIComponent(language)}&description=${encodeURIComponent(summary)}&link=${encodeURIComponent(link)}`;

        try {
            const response = await fetch(url, {
                method: "GET", // Méthode GET
            });

            if (!response.ok) {
                throw new Error("Erreur lors de l'ajout du projet");
            }

            // Optionnel: Réinitialiser les champs du formulaire après l'envoi
            setTitle("");
            setLanguage("javascript");
            setSummary("");
            setLink(""); // Réinitialiser le champ lien
            alert("Projet ajouté avec succès !"); // Message de succès
        } catch (error) {
            console.error("Erreur:", error);
            alert("Échec de l'ajout du projet. Veuillez réessayer."); // Message d'erreur
        }
    };

    return (
        <React.Fragment>
            <Helmet>
                <title>{`Admin | ${INFO.main.title}`}</title>
                <meta name="description" content={currentSEO.description || ""} />
                <meta
                    name="keywords"
                    content={currentSEO.keywords ? currentSEO.keywords.join(", ") : ""}
                />
            </Helmet>

            <div className="page-content">
                <NavBar active="contact" />
                <div className="content-wrapper">
                    <div className="contact-logo-container">
                        <div className="contact-logo">
                            <Logo width={46} />
                        </div>
                    </div>

                    <div className="contact-container">
                        <div className="title contact-title">
                            Admin
                        </div>

                        <div className="subtitle contact-subtitle">
                            Pour ajouter un projet, veuillez remplir le formulaire ci-dessous
                        </div>

                        <form onSubmit={handleSubmit}> {/* Ajouter un formulaire ici */}
                            <div className="Titre1">
                                <div className="input-container">
                                    <input
                                        type="text"
                                        id="input"
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)} // Mettre à jour l'état
                                        required
                                    />
                                    <label htmlFor="input" className="label">Titre : </label>
                                    <div className="underline"></div>
                                </div>
                            </div>
                            <div className="Text1">
                                <p>Selectionner le language de programmation</p>
                            </div>
                            <div className="Selector">
                                <select 
                                    name="listeDeroulante" 
                                    value={language} 
                                    onChange={(e) => setLanguage(e.target.value)} // Mettre à jour l'état
                                >
                                    <optgroup label="Sélectionner le langage de programmation">
                                        <option value="c">C</option>
                                        <option value="cpp">C++</option>
                                        <option value="csharp">C#</option>
                                        <option value="css">CSS</option>
                                        <option value="golang">Go</option>
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
                                        onChange={(e) => setSummary(e.target.value)} // Mettre à jour l'état
                                        required
                                    />
                                    <span>Résumé</span>
                                </div>

                                <div className="input-container">
                                    <input
                                        type="text"
                                        id="link"
                                        value={link}
                                        onChange={(e) => setLink(e.target.value)} // Mettre à jour l'état du lien
                                        required
                                    />
                                    <label htmlFor="link" className="label">Lien : </label>
                                    <div className="underline"></div>
                                </div>

                                <div className="buttonValider">
                                    <button type="submit"> {/* Ajouter type="submit" */}
                                        <span className="button_top"> Validé </span>
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

export default Admin;
