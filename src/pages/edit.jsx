import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/edit.css";

const Edit = () => {
    useEffect(() => {
        window.location.href = "http://localhost:8080/edit";
    }, []);

    return (
        <React.Fragment>
            <Helmet>
                <title>{SEO.edit.title}</title>
                <meta name="description" content={SEO.edit.description} />
            </Helmet>
            <NavBar />
            <div className="edit-container">
                <div className="edit-logo">
                    <Logo />
                </div>
                <div className="edit-title">{INFO.edit.title}</div>
                <div className="edit-description">{INFO.edit.description}</div>
            </div>
            <Footer />
        </React.Fragment>
    );
};

export default Edit;



