import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/compétences.css";

const compétences = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Expériences"
				body={
					<div className="competences-body">
						<div className="competences">
							<img
								src="./poste.png"
								alt="facebook"
								className="competences-image"
							/>
							<div className="competences-title">La Poste</div>
							<div className="competences-subtitle">
								Agent de Tri
							</div>
							<div className="competences-duration">2024 - Present</div>
						</div>

						<div className="competences">
							<img
								src="./cirque.png"
								alt="twitter"
								className="competences-image"
							/>
							<div className="competences-title">Cirque du Soleil</div>
							<div className="competences-subtitle">
								Agent d'Acceuil
							</div>
							<div className="competences-duration">2023-2024 - Present</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default compétences;



