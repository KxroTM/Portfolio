import React from "react";
import { Link } from "react-router-dom";

import "./styles/footer.css";

const Footer = () => {
	return (
		<React.Fragment>
			<div className="footer">
				<div className="footer-links">
					<ul className="footer-nav-link-list">
						<li className="footer-nav-link-item">
							<Link to="/">Accueil</Link>
						</li>
						<li className="footer-nav-link-item">
							<Link to="/about">À propos</Link>
						</li>
						<li className="footer-nav-link-item">
							<Link to="/projects">Projects</Link>
						</li>
						
						<li className="footer-nav-link-item">
							<Link to="/contact">Contact</Link>
						</li>

						<li className="footer-nav-link-item">
							<Link to="/login">Connexion</Link>
						</li>
					</ul>
				</div>

				<div className="footer-credits">
					<div className="footer-credits-text">
						© 2024 OOTD
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Footer;
