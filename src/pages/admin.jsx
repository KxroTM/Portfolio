import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/admin.css";  

const Admin = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const currentSEO = SEO.find((item) => item.page === "admin") || {};

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

                        <div className="Titre1">
                            <div className="input-container">
                                <input type="text" id="input" required />
                                <label htmlFor="input" className="label">Titre : </label>
                                <div className="underline"></div>
                            </div>
                        </div>
                        <div className="Text1">
                            <p>Selectionner le language de programmation</p>
                        </div>
                        <div className="Selector">
                            <select name="listeDeroulante">
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
                                <div class="inputBox">
                                    <textarea placeholder="Taper ici..." required=""></textarea>
                                    <span>Résumé</span>
                                </div>
                                <div class="buttonValider">
                                    <button>
                                        <span class="button_top"> Validé </span>
                                    </button>
                                </div>
                        </div>  
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
