import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/contact.css";

const Contact = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "contact");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Contact | ${INFO.main.title}`}</title>
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
							Contactez-moi

						</div>

						<div className="subtitle contact-subtitle">
						Vous avez une question ou souhaitez discuter d’un projet ? N’hésitez pas 
						à me contacter via le formulaire ci-dessous ou en utilisant les coordonnées
						 suivantes. Je suis toujours à l’écoute pour de nouvelles opportunités et 
						 collaborations.
						Je suis facilement joignable via plusieurs canaux, alors choisissez celui qui vous convient le mieux.
						Je m’efforce de répondre rapidement et avec attention.{" "}
						Je travaille principalement à distance, mais je suis disponible pour des rendez-vous en personne si vous êtes dans la région.
						Je suis impatient de découvrir vos idées et de collaborer avec vous !
						Mon mail pro : 
						&nbsp;{""}
						<a href={`elias.elmir@ynov.com:${INFO.main.email}`}>
								{INFO.main.email}
							</a>
							
						</div>
					</div>

					<div className="socials-container">
						<div className="contact-socials">
							<Socials />
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

export default Contact;
