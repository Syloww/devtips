// data.js
export const dataCategorie = {
    html: [
        {
            numero: 1, title: "<h1>Les bases du HTML</h1><hr>", content: "HTML est le langage de balisage standard pour les pages Web. Avec HTML, vous pouvez créer votre propre site Web. Le HTML est facile à apprendre - Vous l'apprécierez !" +
                "<br><h2>Chapitre 1 :  Introduction à HTML</h2>" +
                "<br><p><b><span>Qu'est-ce que HTML ?</span></b></p>" +

                "<br><div>HTML (HyperText Markup Language) est un langage de balisage utilisé pour structurer et présenter le contenu sur le web. Il permet de définir l'agencement et l'apparence des éléments sur une page, comme des titres, des paragraphes, des images, des liens, des formulaires, etc. HTML est à la base de toute page web et travaille en tandem avec d'autres langages comme CSS (pour la mise en forme) et JavaScript (pour l'interactivité).</div>" +
                "<br><div>HTML se compose de balises qui sont interprétées par les navigateurs web pour afficher le contenu de manière cohérente. Chaque balise a une fonction spécifique pour structurer différents types d'informations (texte, images, multimédias, etc.).</div>" +

                "<br><p><b><span>Historique de HTML</span></b></p>" +
                "<br><div>HTML a été créé par Tim Berners-Lee en 1991 pour permettre aux scientifiques de partager des documents et informations via Internet.</div>" +
                "<br><div>Voici quelques dates clés dans l’évolution de HTML :</div>" +
                "<ul><li><span><b>1991 : </b></span> Première version de HTML (HTML 1.0), conçue pour structurer des documents simples avec des liens hypertextes.</li>" +
                "<li><span><b>1995 : </b></span> HTML 2.0, normalisé par le W3C (World Wide Web Consortium), ajoutant des éléments comme les formulaires et améliorant les fonctionnalités de base.</li>" +
                "<li><span><b>1997 : </b></span> HTML 3.2, introduisant les tableaux et le support de styles basiques.</li>" +
                "<li><span><b>1999 : </b></span> HTML 4.0, avec une structure plus rigoureuse, l’introduction des CSS pour la mise en page et une meilleure accessibilité.</li>" +
                "<li><span><b>2014 : </b></span> HTML5, une version majeure avec des fonctionnalités multimédias avancées (audio, vidéo), de nouveaux éléments sémantiques et des APIs pour des interactions dynamiques sans plugins supplémentaires comme Flash.</li></ul>" +


                "<br><p><b><span>Structure d'une page HTML<span></b></p>" +
                "<br><p>Une page HTML est organisée en une structure hiérarchique avec des <b>balises qui sont ouvertes et fermées</b>. Voici un exemple de structure minimale d’une page HTML :</p>" +
                '<br><img src="images/cours/html/structure.png" alt="">' +
                "<ul><li><span><b>!DOCTYPE html</b></span> :  Indique au navigateur que le document est en HTML5.</li>" +
                "<li><span><b>html</b></span> : La balise racine qui contient tout le code HTML.</li>" +
                "<li><span><b>head</b></span> : Contient des métadonnées (comme le titre de la page, les encodages de caractères, les liens vers les styles, etc.).</li>" +
                `<li><span><b>meta charset="UTF-8"</b></span> : Définit l'encodage des caractères (UTF-8 est recommandé).</li>` +
                "<li><span><b>title</b></span> : Le titre affiché dans l'onglet du navigateur.</li>" +
                "<li><span><b>body</b></span> : Contient le contenu visible par l'utilisateur (textes, images, vidéos, etc.).</li></ul>" +


                "<br><p><b><span>Les balises et leurs rôles<span></b></p>" +
                "<br><p><b><span>Le rôle des navigateurs web<span></b></p>" +


                "<br><h2>Chapitre 2 : Structure de base d'une page HTML</h2>" +
                "<br><p><b>La balise <span>!DOCTYPE html<span></b></p>" +
                "<br> <iframe width='90%' height='720' src='https://www.youtube.com/embed/hIEZ8xpdBts' title='Comprendre TOUTES les balises HTML en 13 minutes' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' referrerpolicy='strict-origin-when-cross-origin' allowfullscreen></iframe>" +
                "<br><b>Resumé :</b>" +

                "<br><h2>Chapitre 3 : Textes et Titres</h2>" +
                "<br><p><b> Sous titres du chapitre 1</b></p>" +


                "<br><h2>Chapitre 4 : Listes</h2>" +
                "<br><p><b><span>Structure d'une page HTML<span></b></p>" +

                "<br><h2>Chapitre 5 : Liens hypertextes</h2>" +
                "<br><p><b><span>Structure d'une page HTML<span></b></p>" +


                "<br><h2>Chapitre 6 : Images</h2>" +
                "<br><p><b><span>Structure d'une page HTML<span></b></p>" +


                "<br><h2>Chapitre 7 : Tableaux</h2>" +
                "<br><p><b><span>Structure d'une page HTML<span></b></p>" +


                "<br><h2>Chapitre 8 : Formulaires</h2>" +
                "<br><p><b><span>Structure d'une page HTML<span></b></p>" +


                "<br><h2>Chapitre 9 : Conteneurs et Sections</h2>" +
                "<br><p><b><span>Structure d'une page HTML<span></b></p>" +


                "<br><h2>Chapitre 10 : Multimédia</h2>" +
                "<br><p><b><span>Structure d'une page HTML<span></b></p>" +


                "<br><h2>Chapitre 11 : Iframes</h2>" +
                "<br><p><b><span>Structure d'une page HTML<span></b></p>" +


                "<br><h2>Chapitre 12 : Attributs globaux</h2>" +
                "<br><p><b><span>Structure d'une page HTML<span></b></p>" +


                "<br><h2>Chapitre 13 : Les métadonnées et SEO</h2>" +
                "<br><p><b><span>Structure d'une page HTML<span></b></p>" +


                "<br><h2>Chapitre 14 : Accessibilité en HTML</h2>" +
                "<br><p><b><span>Structure d'une page HTML<span></b></p>"
        },
        { numero: 2, title: "Les HTML avancés", content: "Contenu des HTML avancés" },
        { numero: 3, title: "<h1>[HTML] Aller plus loin</h1>", content: "<h2>test</h2>" }
    ],
    css: [
        {
            numero: 1, title: "<h1>Les bases du CSS</h1><hr>", content: "CSS est le langage que nous utilisons pour styliser un document HTML. Le CSS décrit comment les éléments HTML doivent être affichés. Ce tutoriel vous apprendra le CSS du basique au avancé." +
                "<br><h2>Chapitre 1 : Introduction à CSS</h2>" +
                "<br><p><b> Sous titres du chapitre 1</b></p>"
        },
        { numero: 2, title: "Les CSS avancés", content: "Contenu des CSS avancés" },
        { numero: 3, title: "CSS3", content: "Contenu CSS3" }
    ],
    js: [
        { numero: 1, title: "Les bases JS", content: "Contenu des bases JS" },
        { numero: 2, title: "Le JS avancé", content: "Contenu du JS avancé" },
        { numero: 3, title: "JS ES6+", content: "Contenu JS ES6+" }
    ],
    php: [
        { numero: 1, title: "<h1>Les bases du PHP</h1><hr>", content: "PHP est un langage de script côté serveur utilisé principalement pour le développement web, permettant de créer des pages web dynamiques et interactives. Malgré ses apparences, il n'est pas vilain... Promis !" }
    ]
};
