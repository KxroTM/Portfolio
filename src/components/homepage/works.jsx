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
							<div className="work-duration">2024 - Present</div>
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
							<div className="work-duration">2023-2024 - Present</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
