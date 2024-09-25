import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/login.css";  // =============================================>

const Login = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "login");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Login | ${INFO.main.title}`}</title>
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

    <form class="form">
       <p class="form-title">Sign in to your account</p>
        <div class="input-container">
          <input type="email" placeholder="Enter email"/>
          <span>
          </span>
      </div>
      <div class="input-container">
          <input type="password" placeholder="Enter password"/>
        </div>
         <button type="submit" class="submit">
        Sign in
      </button>
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
