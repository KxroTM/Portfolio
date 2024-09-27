let INFO = {
	main: {
		title: "Portfolio Abdellah",
		name: "Abdellah Elmir.",
		email: "adbellah.elmir@ynov.com",
		logo: "../logo.png",
	},

	socials: {
		twitter: "https://x.com/i/flow/login?redirect_after_login=%2Fabdellah_elmir",
		github: "https://github.com/KxroTM",
		linkedin: "https://ma.linkedin.com/in/abdallah-elmir-480bb324?trk=people-guest_people_search-card",
		instagram: "https://www.instagram.com/abdullah__elmir/?hl=en",
		stackoverflow: "https://stackoverflow.com/",
		facebook: "https://facebook.com/",
	},

	homepage: {
		title: "Etudiant Paris Ynov Campus",
		description:
			"Je m'appelle Abdellah, j'ai 20 ans et je suis actuellement en deuxième année d'informatique. Passionné par les nouvelles technologies, j'ai déjà acquis une bonne maîtrise des langages comme Python, C, Golang, Java, ainsi que des notions en développement web avec HTML/CSS et JavaScript. Durant mes études, j'ai eu l'occasion de travailler sur plusieurs projets, comme la création d'une application de gestion de bibliothèque en Python et d'un site web personnel pour présenter mes compétences. Je m'intéresse particulièrement à la cybersécurité et à l'intelligence artificielle, domaines dans lesquels j'aimerais me spécialiser à l'avenir. Mon objectif est de devenir développeur logiciel et de continuer à apprendre et à évoluer dans ce secteur passionnant.",

	},

	about: {
		title: "Je m'appelle Abdellah, je vis à Paris dans le 92 et j'étudie l'informatique.",
		description:
			"Passionné par l'informatique depuis plusieurs années, je suis actuellement en deuxième année d'études dans ce domaine. Curieux et motivé, j'aime explorer de nouvelles technologies et relever des défis techniques. Je suis à l'aise avec plusieurs langages de programmation comme Python, Java, Golang,  et C, et je développe régulièrement des projets personnels pour améliorer mes compétences. Mon intérêt se porte particulièrement sur la cybersécurité et l'intelligence artificielle, deux domaines que je souhaite approfondir dans le futur. En parallèle de mes études, je cherche à élargir mes connaissances et à rester à la pointe des innovations technologiques.",
	},

	projects: [],
};

export default INFO;

function AddProject(id,title, description, logo, linkText, link) {
	INFO.projects.push({
		id : id,
		title: title,
		description: description,
		logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos@0.0.3/src/"+logo+"/" + logo + ".png",
		linkText: linkText,
		link: link,
	});
}

function GetAllsProjects() {
    return fetch("http://localhost:8080/projects")
        .then((response) => response.json())
        .then((data) => {
            const projects = [];
            data.forEach((element) => {
                projects.push({
                    id: element.id,
                    title: element.title,
                    description: element.description,
                    logo: element.logo,
                    linkText: element.linkText,
                    link: element.link,
                });
            });
            return projects; // Retourner les projets récupérés
        });
}


export { GetAllsProjects };
