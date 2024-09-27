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

    const currentSEO = SEO.find((item) => item.page === "edit");

    return (



