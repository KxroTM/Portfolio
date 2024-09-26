import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/admin.css";  // =============================================>

const Admin = () => {
    const [isPopupVisible, setPopupVisible] = useState(false); // État pour contrôler le pop-up

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const currentSEO = SEO.find((item) => item.page === "admin");

    // Fonction pour afficher le pop-up
    const handleAddPostClick = () => {
        setPopupVisible(true);
    };

    // Fonction pour cacher le pop-up
    const handleClosePopup = () => {
        setPopupVisible(false);
    };

    return (
        <React.Fragment>
            <Helmet>
                <title>{`Admin | ${INFO.main.title}`}</title>
                <meta name="description" content={currentSEO.description} />
                <meta
                    name="keywords"
                    content={currentSEO.keywords.join(", ")}
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
                            Pour ajouter un projet, veuillez cliquer sur le bouton
                        </div>
                        <button onClick={handleAddPostClick}>
                            Ajouter un post
                        </button>
                    </div>  
                    <div className="page-footer">
                        <Footer />
                    </div>
                </div>
            </div>

            {/* Pop-up */}
            {isPopupVisible && (
                <div className="popup-overlay">
                    <div className="popup">
                        <h2>Ajouter un Post</h2>
                        <div className="wave-group">
                            <input required type="text" className="input" />
                            <span className="bar"></span>
                            <label className="label">
                                <span className="label-char" style={{ "--index": 0 }}>L</span>
                                <span className="label-char" style={{ "--index": 1 }}>a</span>
                                <span className="label-char" style={{ "--index": 2 }}>n</span>
                                <span className="label-char" style={{ "--index": 3 }}>g</span>
                                <span className="label-char" style={{ "--index": 4 }}>u</span>
                                <span className="label-char" style={{ "--index": 5 }}>a</span>
                                <span className="label-char" style={{ "--index": 6 }}>g</span>
                                <span className="label-char" style={{ "--index": 7 }}>e</span>
                                <span className="label-char" style={{ "--index": 8 }}> </span>
                                <span className="label-char" style={{ "--index": 9 }}>d</span>
                                <span className="label-char" style={{ "--index": 10 }}>e</span>
                                <span className="label-char" style={{ "--index": 11 }}> </span>
                                <span className="label-char" style={{ "--index": 12 }}>p</span>
                                <span className="label-char" style={{ "--index": 13 }}>r</span>
                                <span className="label-char" style={{ "--index": 14 }}>o</span>
                                <span className="label-char" style={{ "--index": 15 }}>g</span>
                                <span className="label-char" style={{ "--index": 16 }}>r</span>
                                <span className="label-char" style={{ "--index": 17 }}>a</span>
                                <span className="label-char" style={{ "--index": 18 }}>m</span>
                                <span className="label-char" style={{ "--index": 19 }}>m</span>
                                <span className="label-char" style={{ "--index": 20 }}>a</span>
                                <span className="label-char" style={{ "--index": 21 }}>t</span>
                                <span className="label-char" style={{ "--index": 22 }}>i</span>
                                <span className="label-char" style={{ "--index": 23 }}>o</span>
                                <span className="label-char" style={{ "--index": 24 }}>n</span>
                            </label>
                        </div>
                        <button onClick={handleClosePopup}>Valider</button>
                    </div>
                </div>
            )}
        </React.Fragment>
    );
};

export default Admin;
