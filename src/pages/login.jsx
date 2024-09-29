import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom"; 
import { useAuth } from "../context/AuthContext"; 
import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import INFO from "../data/user";
import SEO from "../data/seo";
import "./styles/login.css";

const Login = () => {
    const { login, isAuthenticated } = useAuth(); 
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
        if (isAuthenticated) {
            navigate("/");
        }
    }, [isAuthenticated, navigate]); 

    const currentSEO = SEO.find((item) => item.page === "login");

    const handleLogin = async (e) => {
        e.preventDefault();

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        try {
            const response = await fetch(`http://localhost:8080/login?username=${email}&password=${password}`, {
                method: "POST",
            });

            if (response.ok) {
                const data = await response.json();
                console.log("Login successful:", data);
                login();
                navigate("/admin"); 
            } else {
                console.error("Login failed:", response.status);
            }
        } catch (error) {
            console.error("An error occurred during login:", error);
        }
    };

    return (
        <React.Fragment>
            <Helmet>
                <title>{`Login | ${INFO.main.title}`}</title>
                <meta name="description" content={currentSEO.description} />
                <meta name="keywords" content={currentSEO.keywords.join(", ")} />
            </Helmet>

            <div className="page-content">
                <NavBar active={"login"}/>
                <div className="content-wrapper">
                    <div className="contact-logo-container">
                        <div className="contact-logo">
                            <Logo width={46} />
                        </div>
                    </div>

                    <form className="form">
                        <p className="form-title">Sign in to your account</p>
                        <div className="input-container">
                            <input type="email" placeholder="Enter email" id="email" />
                            <span></span>
                        </div>
                        <div className="input-container">
                            <input type="password" placeholder="Enter password" id="password" />
                        </div>
                        <div className="button-login">
                            <button type="submit" className="submit" onClick={handleLogin}>
                                Sign in
                            </button>
                        </div>
                    </form>

                    <div className="page-footer">
                        <Footer />
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Login;
