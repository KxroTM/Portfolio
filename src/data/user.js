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

	projects: [
		{
			title: "Hangman",
			description:
				"Lorem ipsum dolor sit amet. Et incidunt voluptatem ex tempore repellendus qui dicta nemo sit deleniti minima.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
			linkText: "View Project",
			link: "https://github.com",
		},

		{
			title: "Hangman Web",
			description:
				"Suite à la réussite de votre jeu Hangman en console, vous avez été contacté par 'Duck games' , une société de jeux vidéo qui souhaite racheter votre jeu. Vous leur avez vendu votre jeu 1 millier de Duckies. Suite à cette vente, vous avez été embauché par cette société pour développer une version web de votre jeu..",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png",
			linkText: "View Project",
			link: "https://github.com",
		},

		{
			title: "Netpbm",
			description:
				"L'objectif de ce projet est de créer une bibliothèque permettant de travailler avec des images (*.pbm, *.pgm, *.ppm). La bibliothèque doit pouvoir lire et écrire des images, et les manipuler.Ce projet est guidé, vous recevrez donc une liste de fonctions à implémenter.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/html/html.png",
			linkText: "View Project",
			link: "https://github.com",
		},

		{
			title: "Groupie-Tracker",
			description:
				"Groupie Trackers consiste à recevoir une API donnée et à manipuler les données qu'elle contient, afin de créer une application affichant les informations.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
			linkText: "View Project",
			link: "https://github.com",
		},

		{
			title: "Challenge-JS",
			description:
				"Dans ce jeu, votre objectif est de créer un jeu de survie, vos seules contraintes sont le thème du jeu et votre imagination. Pour résumer, un jeu de survie est un jeu dans lequel vous devez survivre d'une manière ou d'une autre, cela peut être n'importe quoi en fait, mais vous devez avoir une condition qui met fin au jeu et un système de score d'arcade",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
			linkText: "View Project",
			link: "https://github.com",
		},

		{
			title: "Forum",
			description:
				"J'ai créé un forum web autour d'un thème spécifique, où les utilisateurs peuvent interagir et échanger. Le forum est structuré avec des catégories, permettant d'organiser les publications, et chaque publication peut recevoir des commentaires. J'ai également intégré une fonctionnalité d'appréciation, permettant aux utilisateurs d'aimer ou de ne pas aimer les publications. Un système de filtrage des messages permet de rechercher et trier le contenu selon différents critères. Pour la gestion des données, j'ai utilisé Sqlite comme base de données, assurant une organisation efficace et rapide des informations. Le forum inclut aussi un système d'authentification pour sécuriser l'accès, et des fonctionnalités de modération pour gérer le contenu et assurer le respect des règles de la communauté.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
			linkText: "View Project",
			link: "https://github.com",
		},
	],
};

export default INFO;

function AddProject(title, description, logo, linkText, link) {
	INFO.projects.push({
		title: title,
		description: description,
		logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos@0.0.3/src/"+logo+"/" + logo + ".png",
		linkText: linkText,
		link: link,
	});
}

function GetAllsProjects() {
	fetch("http://localhost:8080/projects")
		.then((response) => response.json())
		.then((data) => {
			console.log(data);
			data.forEach((element) => {
				AddProject(element.title, element.description, element.logo, element.linkText, element.link);
			});
		});
	console.log(INFO.projects);
}

GetAllsProjects();