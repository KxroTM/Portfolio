import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/admin.css";  

const Edit = () => {
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
                    
                    <div>

// ICI


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
