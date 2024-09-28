import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import HardSkillCard from "../common/hardskillcard";

import "./styles/hardskill.css";

const Hardskill = () => {
    return (
        <div className="Hardskill">
            <HardSkillCard
                icon={faBriefcase}
                title="Hard Skills"
                body={
                    <div className="Hardskill-body">
                        <div className="Hardskill">
                            <img
                                src="./4etoiles.png"
                                alt="facebook"
                                className="Hardskill-image"
                            />
                            <div className="Hardskill-title">Logiciels informatique</div>
                            <div className="Hardskill-subtitle">
                                <ul>
                                    <li>Microsoft Office</li>
                                    <li>Adobe Photoshop</li>
                                    <li>Visual Studio Code</li>
                                    <li>AutoCAD</li>
                                    <li>Slack</li>
                                    <li>excel</li>
                                    <li>Powerpoint</li>
                                    <li>Word</li>
                                </ul>
                            </div>
                            <div className="Hardskill-duration">2017-2024 - Present</div>
                        </div>

                        <div className="Hardskill">
                            <img
                                src="./4etoiles.png"
                                alt="twitter"
                                className="Hardskill-image"
                            />
                            <div className="Hardskill-title">Languages informatique</div>
                            <div className="Hardskill-subtitle">
                                <ul>
                                    <li>JavaScript</li>
                                    <li>Python</li>
                                    <li>Java</li>
                                    <li>C++</li>
                                    <li>PHP</li>
                                    <li>Go</li>
                                </ul>
                            </div>
                            <div className="Hardskill-duration">2019-2024 - Present</div>
                        </div>

                        <div className="Hardskill">
                            <img
                                src="./4etoiles.png"
                                alt="twitter"
                                className="Hardskill-image"
                            />
                            <div className="Hardskill-title">Langues étrangères</div>
                            <div className="Hardskill-subtitle">
                                <ul>
                                    <li>Anglais</li>
                                    <li>Espagnol</li>
                                    <li>Arabe</li>
                                    <li>Chinois</li>
                                </ul>
                            </div>
                            <div className="Hardskill-duration">2019-2024 - Present</div>
                        </div>
                    </div>
                }
            />
        </div>
    );
};

export default Hardskill;



