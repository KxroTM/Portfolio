import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Expériences"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./poste.png"
								alt="facebook"
								className="work-image"
							/>
							<div className="work-title">La Poste</div>
							<div className="work-subtitle">
								Agent de Tri
							</div>
							<div className="work-duration">2022</div>
						</div>

						<div className="work">
							<img
								src="./micro.jpg"
								alt="facebook"
								className="work-image"
							/>
							<div className="work-title">FC Micro</div>
							<div className="work-subtitle">
							Technicien de Maintenance
							</div>
							<div className="work-duration">2023</div>
						</div>

						<div className="work">
							<img
								src="./cap.jpg"
								alt="facebook"
								className="work-image"
							/>
							<div className="work-title">Capgemini</div>
							<div className="work-subtitle">
								Amélioration Site web
							</div>
							<div className="work-duration">2023</div>
						</div>

						<div className="work">
							<img
								src="./amazon.png"
								alt="facebook"
								className="work-image"
							/>
							<div className="work-title">Amazon</div>
							<div className="work-subtitle">
								Technicien de Maintenance
							</div>
							<div className="work-duration">2023</div>
						</div>

						<div className="work">
							<img
								src="./git.png"
								alt="facebook"
								className="work-image"
							/>
							<div className="work-title">Open Source</div>
							<div className="work-subtitle">
								Création Jeux Vidéo
							</div>
							<div className="work-duration">2023-Present</div>
						</div>

						<div className="work">
							<img
								src="./web.jpg"
								alt="facebook"
								className="work-image"
							/>
							<div className="work-title"> WebInnov-</div>
							<div className="work-subtitle">
							Développeur Web Junior
							</div>
							<div className="work-duration">2024</div>
						</div>

						<div className="work">
							<img
								src="./tech.png"
								alt="facebook"
								className="work-image"
							/>
							<div className="work-title"> TechSys Solutions</div>
							<div className="work-subtitle">
							Technicien Informatique
							</div>
							<div className="work-duration">2024</div>
						</div>

						<div className="work">
							<img
								src="./cirque.png"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">Cirque du Soleil</div>
							<div className="work-subtitle">
								Agent d'Acceuil
							</div>
							<div className="work-duration">2020</div>
						</div>
						<div className="work">
							<img
								src="./inov.jpg"
								alt="facebook"
								className="work-image"
							/>
							<div className="work-title">InnovApps</div>
							<div className="work-subtitle">
							Développeur Full Stack
							</div>
							<div className="work-duration">2024</div>
						</div>
						<div className="work">
							<img
								src="./sec.jpg"
								alt="facebook"
								className="work-image"
							/>
							<div className="work-title">SecureInfo</div>
							<div className="work-subtitle">
							Consultant en Cybersécurité 
							</div>
							<div className="work-duration">2024</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
