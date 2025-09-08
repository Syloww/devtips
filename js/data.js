// data.js
const dataCategorie = {
    html: [
        {
            numero: 1, title: "<h1>Chapitre 1 :  Introduction à HTML</h1><hr>", content: "HTML est le langage de balisage standard pour les pages Web. Amusez vous !" +
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

                '<br><img src="images/cours/html/structure.png" alt="" loading="lazy" width="872" height="383">' +

                "<ul><li><span><b>!DOCTYPE html</b></span> :  Indique au navigateur que le document est en HTML5.</li>" +
                "<li><span><b>html</b></span> : La balise racine qui contient tout le code HTML.</li>" +
                "<li><span><b>head</b></span> : Contient des métadonnées (comme le titre de la page, les encodages de caractères, les liens vers les styles, etc.).</li>" +
                `<li><span><b>meta charset="UTF-8"</b></span> : Définit l'encodage des caractères (UTF-8 est recommandé).</li>` +
                "<li><span><b>title</b></span> : Le titre affiché dans l'onglet du navigateur.</li>" +
                "<li><span><b>body</b></span> : Contient le contenu visible par l'utilisateur (textes, images, vidéos, etc.).</li></ul>"
        },
        {
            numero: 2,
            title: "<h1>Chapitre 2 : Structure de base d'une page HTML</h1><hr>",
            content:
                "<br><p><b>La balise <span>!DOCTYPE html<span></b></p>" +
                "<br> <iframe width='90%' height='720' src='https://www.youtube.com/embed/hIEZ8xpdBts' title='Comprendre TOUTES les balises HTML en 13 minutes' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' referrerpolicy='strict-origin-when-cross-origin' allowfullscreen></iframe>" +
                "<br><b>Resumé :</b>"
        },
        {
            numero: 3,
            title: "<h1>Chapitre 3 : Textes et Titres</h1><hr>",
            content:
                "<br><p><b>Les titres HTML</b></p>" +
                "<br><div>Les balises de titre (<code>&lt;h1&gt;</code> à <code>&lt;h6&gt;</code>) permettent de structurer le contenu en différentes sections de titres, chaque niveau représentant un ordre hiérarchique. <code>&lt;h1&gt;</code> est le titre le plus important, tandis que <code>&lt;h6&gt;</code> est le moins important. Voici un exemple :</div>" +
                "<br><pre><code>&lt;h1&gt;Titre Principal&lt;/h1&gt; \n&lt;h2&gt;Sous-titre&lt;/h2&gt; \n&lt;h3&gt;Sous-sous-titre&lt;/h3&gt;</code></pre>" +
                "<br><div>Utiliser correctement ces balises est crucial pour la lisibilité, l'optimisation SEO et l'accessibilité, car elles permettent aux utilisateurs et aux moteurs de recherche de comprendre la structure d'une page. Assurez-vous de ne pas sauter de niveaux pour maintenir une hiérarchie logique.</div>" +
                "<br><p><b>Les paragraphes</b></p>" +
                "<br><div>Les paragraphes (<code>&lt;p&gt;</code>) sont essentiels pour présenter du texte sous forme de blocs lisibles. Le navigateur applique automatiquement des marges autour des paragraphes pour améliorer l'espacement :</div>" +
                "<br><pre><code>&lt;p&gt;Ceci est un paragraphe.&lt;/p&gt;</code></pre>" +
                "<br><div>Les paragraphes permettent de structurer le contenu textuel de manière claire et organisée, améliorant ainsi l'expérience utilisateur.</div>"
        },
        {
            numero: 4,
            title: "<h1>Chapitre 4 : Listes</h1><hr>",
            content:
                "<br><p><b>Les listes non ordonnées</b></p>" +
                "<br><div>Les listes non ordonnées (<code>&lt;ul&gt;</code>) sont utilisées pour afficher des éléments sans ordre particulier. Chaque élément est marqué par un point ou une puce :</div>" +
                "<br><pre><code>&lt;ul&gt;\n  &lt;li&gt;Premier élément&lt;/li&gt;\n  &lt;li&gt;Deuxième élément&lt;/li&gt;\n&lt;/ul&gt;</code></pre>" +
                "<br><p><b>Les listes ordonnées</b></p>" +
                "<br><div>Contrairement aux listes non ordonnées, les listes ordonnées (<code>&lt;ol&gt;</code>) sont numérotées, indiquant une séquence ou une hiérarchie :</div>" +
                "<br><pre><code>&lt;ol&gt;\n  &lt;li&gt;Premier élément&lt;/li&gt;\n  &lt;li&gt;Deuxième élément&lt;/li&gt;\n&lt;/ol&gt;</code></pre>" +
                "<br><div>Les listes sont très utiles pour organiser des informations de manière concise, comme des instructions ou des éléments à énumérer. Vous pouvez également personnaliser l'apparence des listes avec CSS.</div>"
        },
        {
            numero: 5,
            title: "<h1>Chapitre 5 : Liens hypertextes</h1><hr>",
            content:
                "<br><p><b>Les liens HTML</b></p>" +
                "<br><div>Les liens (<code>&lt;a&gt;</code>) sont un élément fondamental du web, permettant de naviguer d'une page à une autre. Ils sont définis par l'attribut <code>href</code>, qui spécifie l'URL de la page de destination :</div>" +
                "<br><pre><code>&lt;a href='https://example.com'&gt;Visiter Example&lt;/a&gt;</code></pre>" +
                "<br><div>Vous pouvez également utiliser des attributs comme <code>target='_blank'</code> pour ouvrir un lien dans un nouvel onglet. Les liens internes (<code>#</code>) permettent de naviguer au sein d'une même page, facilitant la création de menus ou de sections interactives.</div>"
        },
        {
            numero: 6,
            title: "<h1>Chapitre 6 : Images</h1><hr>",
            content:
                "<br><p><b>Insertion d'images</b></p>" +
                "<br><div>Les images sont insérées avec la balise <code>&lt;img&gt;</code>. Cette balise est auto-fermante et nécessite l'attribut <code>src</code>, qui indique l'emplacement de l'image, ainsi que <code>alt</code>, qui fournit une description textuelle de l'image pour les utilisateurs malvoyants et pour le référencement :</div>" +
                "<br><pre><code>&lt;img src='image.jpg' alt='Description de l'image'&gt;</code></pre>" +
                "<br><div>Il est essentiel d'utiliser l'attribut <code>alt</code> pour décrire l'image de manière concise mais précise, car cela améliore l'accessibilité et aide les moteurs de recherche à comprendre le contenu visuel de votre page. Vous pouvez également ajuster la taille des images avec les attributs <code>width</code> et <code>height</code>.</div>"
        },
        {
            numero: 7,
            title: "<h1>Chapitre 7 : Les Tableaux en HTML</h1><hr>",
            content:
                "<br><p><b>Introduction aux tableaux HTML</b></p>" +
                "<br><div>Les tableaux sont couramment utilisés pour organiser et afficher des données sous forme de grille. En HTML, chaque tableau est constitué d'un ensemble de lignes (<code>&lt;tr&gt;</code>), et chaque ligne contient des cellules de données (<code>&lt;td&gt;</code> pour 'table data'). Voici un exemple de tableau simple :</div>" +
                "<br><pre><code>&lt;table&gt;\n  &lt;tr&gt;\n    &lt;td&gt;Cellule 1&lt;/td&gt;\n    &lt;td&gt;Cellule 2&lt;/td&gt;\n  &lt;/tr&gt;\n&lt;/table&gt;</code></pre>" +
                "<div><b>Résultat :</b></div>" +
                "<br><table border='1'><tr><td>Cellule 1</td><td>Cellule 2</td></tr></table>" +

                "<br><p><b>Ajout d'en-têtes de tableau</b></p>" +
                "<br><div>Les en-têtes de tableau (<code>&lt;th&gt;</code>) permettent d'ajouter des titres à vos colonnes ou lignes. Cela aide à rendre votre tableau plus lisible et améliore également l'accessibilité pour les lecteurs d'écran.</div>" +
                "<br><pre><code>&lt;table&gt;\n  &lt;tr&gt;\n    &lt;th&gt;Nom&lt;/th&gt;\n    &lt;th&gt;Âge&lt;/th&gt;\n  &lt;/tr&gt;\n  &lt;tr&gt;\n    &lt;td&gt;Alice&lt;/td&gt;\n    &lt;td&gt;25&lt;/td&gt;\n  &lt;/tr&gt;\n&lt;/table&gt;</code></pre>" +
                "<div><b>Résultat :</b></div>" +
                "<br><table border='1'><tr><th>Nom</th><th>Âge</th></tr><tr><td>Alice</td><td>25</td></tr></table>" +

                "<br><p><b>Attributs des tableaux</b></p>" +
                "<br><div>Les tableaux peuvent être personnalisés avec divers attributs pour améliorer leur présentation. Par exemple, vous pouvez ajouter une <span><b>bordure</b></span> (<code>border</code>), ajuster la <span><b>largeur</b></span> des colonnes, ou aligner le texte dans les cellules. Voici un exemple :</div>" +
                "<br><pre><code>&lt;table border='1' width='100%'&gt;\n  &lt;tr&gt;\n    &lt;th&gt;Produit&lt;/th&gt;\n    &lt;th&gt;Prix&lt;/th&gt;\n  &lt;/tr&gt;\n  &lt;tr&gt;\n    &lt;td&gt;Pomme&lt;/td&gt;\n    &lt;td&gt;1.50€&lt;/td&gt;\n  &lt;/tr&gt;\n&lt;/table&gt;</code></pre>" +
                "<div><b>Résultat :</b></div>" +
                "<br><table border='1' width='100%'><tr><th>Produit</th><th>Prix</th></tr><tr><td>Pomme</td><td>1.50€</td></tr></table>" +

                "<br><p><b>Accessibilité des tableaux</b></p>" +
                "<br><div>Pour améliorer l'accessibilité de vos tableaux, vous pouvez utiliser des attributs comme <code>scope</code> sur les en-têtes pour indiquer si l'en-tête correspond à une <span><b>colonne</b></span> ou à une <span><b>ligne</b></span>. Par exemple :</div>" +
                "<br><pre><code>&lt;table&gt;\n  &lt;tr&gt;\n    &lt;th scope='col'&gt;Nom&lt;/th&gt;\n    &lt;th scope='col'&gt;Âge&lt;/th&gt;\n  &lt;/tr&gt;\n  &lt;tr&gt;\n    &lt;td&gt;Bob&lt;/td&gt;\n    &lt;td&gt;30&lt;/td&gt;\n  &lt;/tr&gt;\n&lt;/table&gt;</code></pre>" +
                "<div><b>Résultat :</b></div>" +
                "<br><table border='1'><tr><th scope='col'>Nom</th><th scope='col'>Âge</th></tr><tr><td>Bob</td><td>30</td></tr></table>" +

                "<br><p><b>Fusion de cellules</b></p>" +
                "<br><div>Il est possible de fusionner des cellules horizontalement ou verticalement grâce aux attributs <span><b>colspan</b></span> et <span><b>rowspan</b></span>. Par exemple, pour fusionner deux colonnes :</div>" +
                "<br><pre><code>&lt;table&gt;\n  &lt;tr&gt;\n    &lt;th colspan='2'&gt;Détails&lt;/th&gt;\n  &lt;/tr&gt;\n  &lt;tr&gt;\n    &lt;td&gt;Nom&lt;/td&gt;\n    &lt;td&gt;Alice&lt;/td&gt;\n  &lt;/tr&gt;\n&lt;/table&gt;</code></pre>" +
                "<div><b>Résultat :</b></div>" +
                "<br><table border='1'><tr><th colspan='2'>Détails</th></tr><tr><td>Nom</td><td>Alice</td></tr></table>"
        },
        {
            numero: 8,
            title: "<h1>Chapitre 8 : Formulaires</h1><hr>",
            content:
                "<br><p><b>Les formulaires HTML</b></p>" +
                "<br><div>Les formulaires sont <span style='font-weight:bold;'>indispensables</span> pour interagir avec les utilisateurs et collecter des données. Ils contiennent divers types de champs comme les <span style='font-weight:bold;'><code>&lt;input&gt;</code></span> (textes, mots de passe, boutons) et les <span style='font-weight:bold;'><code>&lt;textarea&gt;</code></span> (zones de texte longues) :</div>" +
                "<br><pre><code>&lt;form action='/submit' method='post'&gt;\n  &lt;input type='text' name='nom'&gt;\n  &lt;input type='submit' value='Envoyer'&gt;\n&lt;/form&gt;</code></pre>" +
                "<br><div>Les attributs <span style='font-weight:bold;'><code>method</code></span> et <span style='font-weight:bold;'><code>action</code></span> sont <span style='font-weight:bold;'>essentiels</span>. <span style='font-weight:bold;'><code>method='post'</code></span> envoie les données de manière sécurisée, tandis que l'attribut <span style='font-weight:bold;'><code>action</code></span> définit où les données sont envoyées.</div>"
        },
        {
            numero: 9,
            title: "<h1>Chapitre 9 : Conteneurs et Sections</h1><hr>",
            content:
                "<br><p><b>Les sections HTML</b></p>" +
                "<br><div>Pour structurer des parties de votre page, vous pouvez utiliser les balises <code>&lt;div&gt;</code> et <code>&lt;section&gt;</code>. Les <code>&lt;div&gt;</code> sont des conteneurs génériques tandis que les <code>&lt;section&gt;</code> sont utilisées pour des groupes de contenu liés :</div>" +
                "<br><pre><code>&lt;section&gt;\n  &lt;h2&gt;Section Titre&lt;/h2&gt;\n  &lt;p&gt;Contenu de la section.&lt;/p&gt;\n&lt;/section&gt;</code></pre>" +
                "<br><div>Ces balises permettent une meilleure organisation du contenu, favorisant à la fois l'accessibilité et la mise en page responsive. Utilisez <code>&lt;article&gt;</code> pour des contenus autonomes et <code>&lt;aside&gt;</code> pour des informations complémentaires.</div>"
        },
        {
            numero: 10,
            title: "<h1>Chapitre 10 : Multimédia</h1><hr>",
            content:
                `<br><p><b>Intégration du multimédia dans une page HTML</b></p>
                <p>HTML permet d'ajouter différents types de contenu <span>multimédia</span> comme des images, des vidéos, de l'audio et des animations.</p>
                <ul>
                    <li><span>&lt;img&gt;</span> : pour insérer des images.</li>
                    <li><span>&lt;video&gt;</span> : pour intégrer des vidéos avec des options de contrôle.</li>
                    <li><span>&lt;audio&gt;</span> : pour ajouter de la musique ou des fichiers audio.</li>
                    <li><span>&lt;canvas&gt;</span> : pour dessiner des graphiques via JavaScript.</li>
                    <li><span>&lt;svg&gt;</span> : pour des graphiques vectoriels.</li>
                </ul>
                <p>Il est aussi important de considérer l'<span>accessibilité</span> lors de l'intégration du multimédia. Par exemple, utiliser des balises <span>alt</span> pour les images et fournir des sous-titres pour les vidéos.</p>`
        },
        {
            numero: 11,
            title: "<h1>Chapitre 11 : Iframes</h1><hr>",
            content:
                `<br><p><b>Utilisation des <span>iframes</span> dans HTML</b></p>
                <p>Les <span>iframes</span> permettent d'incorporer une autre page web ou un document externe dans une page HTML.</p>
                <ul>
                    <li>L'élément <span>&lt;iframe&gt;</span> est utilisé pour afficher une page web dans une autre.</li>
                    <li>Les attributs courants incluent <span>src</span> (source de l'iframe), <span>width</span> et <span>height</span>.</li>
                </ul>
                <p>Il est important de noter les implications de <span>sécurité</span> liées aux iframes, notamment avec le contenu tiers, et de bien configurer l'attribut <span>sandbox</span>.</p>`
        },
        {
            numero: 12,
            title: "<h1>Chapitre 12 : Attributs globaux</h1><hr>",
            content:
                `<br><p><b>Les attributs globaux en HTML</b></p>
                <p>Les <span>attributs globaux</span> sont des attributs qui peuvent être utilisés sur tous les éléments HTML.</p>
                <ul>
                    <li><span>id</span> : identifiant unique d'un élément.</li>
                    <li><span>class</span> : pour assigner une ou plusieurs classes CSS à un élément.</li>
                    <li><span>style</span> : pour ajouter des styles CSS directement dans un élément.</li>
                    <li><span>title</span> : fournit des informations supplémentaires affichées comme un tooltip.</li>
                    <li><span>data-*</span> : pour attacher des données personnalisées à un élément.</li>
                </ul>
                <p>Ces attributs sont essentiels pour la <span>personnalisation</span> et le <span>contrôle</span> du comportement des éléments dans un document HTML.</p>`
        },
        {
            numero: 13,
            title: "<h1>Chapitre 13 : Les métadonnées et SEO</h1><hr>",
            content:
                `<br><p><b>Les métadonnées et le SEO</b></p>
                <p>Les <span>métadonnées</span> fournissent des informations sur la page HTML et sont cruciales pour le <span>référencement</span> (SEO).</p>
                <ul>
                    <li><span>&lt;meta name="description" content="Une brève description de votre page"&gt;</span> : pour définir la description de la page.</li>
                    <li><span>&lt;meta name="keywords" content="HTML, SEO, métadonnées"&gt;</span> : pour indiquer les mots-clés liés au contenu de la page.</li>
                    <li><span>&lt;meta charset="UTF-8"&gt;</span> : pour spécifier l'encodage des caractères (important pour l'internationalisation).</li>
                    <li><span>&lt;title&gt;Titre de la page&lt;/title&gt;</span> : définit le titre de la page affiché dans l'onglet du navigateur.</li>
                </ul>
                <p>Voici un exemple de section <code>&lt;head&gt;</code> avec des métadonnées :</p>
                <pre>
                    &lt;head&gt;
                        &lt;meta charset="UTF-8"&gt;
                        &lt;meta name="description" content="Découvrez comment utiliser les métadonnées pour améliorer votre SEO"&gt;
                        &lt;meta name="keywords" content="métadonnées, SEO, référencement"&gt;
                        &lt;title&gt;Chapitre 13 : Les métadonnées et SEO&lt;/title&gt;
                    &lt;/head&gt;
                </pre>
                <p>Les bonnes pratiques de SEO incluent l'optimisation des <span>balises meta</span>, des <span>titres</span>, et l'utilisation de <span>contenu structuré</span> pour améliorer la visibilité dans les moteurs de recherche.</p>
                <p>Pour approfondir vos connaissances, voici quelques ressources utiles :</p>
                <ul>
                    <li><a href="https://developers.google.com/search/docs/beginner/seo-starter-guide" target="_blank"><span>Guide de démarrage SEO - Google Developers</span></a></li>
                    <li><a href="https://ahrefs.com/blog/seo-basics/" target="_blank"><span>Les bases du SEO - Ahrefs</span></a></li>
                </ul>`
        },
        {
            numero: 14,
            title: "<h1>Chapitre 14 : Accessibilité en HTML</h1><hr>",
            content:
                `<br><p><b>L'importance de l'accessibilité en HTML</b></p>
                <p>L'<span>accessibilité</span> en HTML permet de rendre les sites web utilisables par tous, y compris les personnes ayant des <span>handicaps</span>.</p>
                <ul>
                    <li>Utiliser les <span>balises sémantiques</span> comme <span>&lt;header&gt;</span>, <span>&lt;nav&gt;</span>, et <span>&lt;footer&gt;</span> pour une meilleure compréhension du contenu par les lecteurs d'écran.</li>
                    <li>Ajouter des descriptions textuelles aux images avec <span>l'attribut alt</span>.</li>
                    <li>Rendre les formulaires accessibles avec des <span>labels</span> et des <span>indices visuels</span>.</li>
                    <li>Assurer une <span>navigation clavier</span> efficace, surtout pour les éléments interactifs.</li>
                </ul>
                <p>Respecter les <span>directives d'accessibilité</span> est essentiel pour offrir une <span>expérience utilisateur</span> inclusive.</p>`
        }
    ],
    css: [
        {
            numero: 1,
            title: "<h1>Chapitre 1 : Les bases du CSS</h1><hr>",
            content: "CSS est le langage que nous utilisons pour styliser un document HTML. Le CSS décrit comment les éléments HTML doivent être affichés. Ce tutoriel vous apprendra le CSS du basique au avancé." +
                "<br><p><b>Sous-titres du chapitre 1 :</b></p>" +
                "<ul>" +
                "<li>Qu'est-ce que le CSS ?</li>" +
                "<li>Liens entre HTML et CSS : styles en ligne, internes et externes</li>" +
                "<li>La syntaxe CSS : sélecteurs, propriétés et valeurs</li>" +
                "<li>Comment inclure du CSS dans une page web ?</li>" +
                "<li>Démo simple : styliser du texte, des couleurs et des fonds</li>" +
                "</ul>" +
                "<br><p><span style='font-weight:bold;'>Important :</span> CSS permet de séparer la structure HTML de la présentation visuelle, facilitant ainsi la maintenance du code.</p>" +
                "<br><p><b>Exemple :</b></p>" +
                "<pre><code>" +
                "/* Exemple de style CSS basique */\n" +
                "p { color: blue; font-size: 18px; }\n" +
                "body { background-color: lightgray; }" +
                "</code></pre>" +
                "<br><p><b>Résultat :</b> Le texte dans les balises &lt;p&gt; sera en bleu avec une taille de 18px, et l'arrière-plan de la page sera gris clair.</p>"
        },
        {
            "numero": 2,
            "title": "<h2>Chapitre 2 : Sélecteurs CSS et Spécificité</h2><hr>",
            "content":
                "<p><b>Introduction :</b> Les sélecteurs CSS sont la base du ciblage des éléments HTML pour appliquer des styles. Comprendre comment les utiliser et maîtriser la spécificité vous permet de mieux contrôler l'apparence de vos pages web. Dans ce chapitre, nous explorerons les différents types de sélecteurs et leur spécificité.</p>" +

                "<br><h3>1. Types de Sélecteurs CSS</h3>" +
                "<p><b>Sélecteurs élémentaires :</b></p>" +
                "<ul>" +
                "<li><span>Sélecteur de type :</span> cible tous les éléments d'un type donné. Exemple : <code>p { color: blue; }</code> stylise tous les paragraphes en bleu.</li>" +
                "<li><span>Sélecteur de classe :</span> cible les éléments ayant une classe spécifique. Exemple : <code>.highlight { background-color: yellow; }</code> applique un fond jaune aux éléments ayant la classe 'highlight'.</li>" +
                "<li><span>Sélecteur d'identifiant :</span> cible un élément unique avec un identifiant. Exemple : <code>#header { font-size: 2em; }</code> modifie la taille du texte de l'élément avec l'ID 'header'.</li>" +
                "</ul>" +
                "<p><b>Exemple combiné :</b></p>" +
                "<pre><code>" +
                "h1 { color: green; }\n" +
                ".menu-item { font-weight: bold; }\n" +
                "#main-content { padding: 20px; }\n" +
                "</code></pre>" +
                "<p>Ce code stylise les titres <code>&lt;h1&gt;</code> en vert, les éléments avec la classe 'menu-item' en gras, et ajoute du padding à l'élément avec l'ID 'main-content'.</p>" +

                "<br><p><b>Sélecteurs avancés :</b></p>" +
                "<ul>" +
                "<li><span>Sélecteur d'attribut :</span> cible les éléments avec un attribut spécifique. Exemple : <code>input[type='text'] { border: 1px solid #333; }</code> ajoute une bordure aux champs de texte.</li>" +
                "<li><span>Pseudo-classes :</span> définissent des états spéciaux. Exemple : <code>a:hover { color: red; }</code> change la couleur d'un lien au survol en rouge.</li>" +
                "<li><span>Pseudo-éléments :</span> ciblent des parties spécifiques d'un élément. Exemple : <code>p::first-letter { font-size: 2em; }</code> agrandit la première lettre d'un paragraphe.</li>" +
                "</ul>" +
                "<p><b>Exemple avancé :</b></p>" +
                "<pre><code>" +
                "input[placeholder] { font-style: italic; }\n" +
                "a:hover { text-decoration: underline; }\n" +
                "p::first-letter { color: red; }\n" +
                "</code></pre>" +
                "<p>Ce code cible les champs ayant un attribut 'placeholder', stylise les liens au survol, et modifie la première lettre des paragraphes.</p>" +

                "<br><h3>2. Spécificité CSS</h3>" +
                "<p>La spécificité détermine quelle règle CSS s'applique lorsqu'un élément est ciblé par plusieurs sélecteurs. Voici la hiérarchie :</p>" +
                "<ul>" +
                "<li><span>Identifiants (ID) :</span> ont la spécificité la plus élevée.</li>" +
                "<li><span>Classes, pseudo-classes, et attributs :</span> sont moins spécifiques que les ID, mais plus que les sélecteurs de type.</li>" +
                "<li><span>Sélecteurs de type :</span> sont les moins spécifiques.</li>" +
                "</ul>" +
                "<p><b>Exemple :</b></p>" +
                "<pre><code>" +
                "#main { color: blue; }\n" +
                ".highlight { color: green; }\n" +
                "p { color: red; }\n" +
                "</code></pre>" +
                "<p>Dans cet exemple, un élément ayant l'ID 'main' sera bleu, même s'il a aussi la classe 'highlight' ou s'il est un paragraphe, car <span style='font-weight:bold; color:red;'>l'ID a une spécificité plus élevée</span>.</p>" +

                "<br><h3>3. Combinaisons de Sélecteurs</h3>" +
                "<p>Les combinaisons de sélecteurs permettent de cibler des éléments dans des contextes spécifiques :</p>" +
                "<ul>" +
                "<li><span>Sélecteurs descendants :</span> Ciblent les éléments à l'intérieur d'un autre élément. Exemple : <code>nav a { color: white; }</code> stylise les liens à l'intérieur de <code>&lt;nav&gt;</code> en blanc.</li>" +
                "<li><span>Sélecteurs enfants directs :</span> Ciblent uniquement les enfants directs. Exemple : <code>ul > li { margin: 10px; }</code> ajoute une marge aux <code>&lt;li&gt;</code> directement sous un <code>&lt;ul&gt;</code>.</li>" +
                "<li><span>Sélecteurs adjacents :</span> Ciblent les éléments immédiatement après un autre. Exemple : <code>h1 + p { font-size: 1.2em; }</code> stylise le paragraphe immédiatement après un <code>&lt;h1&gt;</code>.</li>" +
                "</ul>" +
                "<p><b>Exemple combiné :</b></p>" +
                "<pre><code>" +
                "div > p { color: blue; }\n" +
                "ul li a:hover { background-color: yellow; }\n" +
                "h1 + p { font-style: italic; }\n" +
                "</code></pre>" +
                "<p>Ce code stylise les paragraphes directement sous un <code>&lt;div&gt;</code>, les liens à l'intérieur de <code>&lt;ul&gt;</code> au survol, et met en italique les paragraphes suivant immédiatement un <code>&lt;h1&gt;</code>.</p>" +

                "<br><h3>4. Exemples pratiques</h3>" +
                "<ul>" +
                "<li><b>Styliser un bouton avec <span>:hover</span> :</b></li>" +
                "<pre><code>" +
                "button:hover { background-color: lightblue; }\n" +
                "</code></pre>" +
                "<li><b>Styliser des liens avec <span>:active</span> :</b></li>" +
                "<pre><code>" +
                "a:active { color: red; }\n" +
                "</code></pre>" +
                "</ul>"
        },
        {
            "numero": 3,
            "title": "<h2>Chapitre 3 : Mise en page avec CSS</h2><hr>",
            "content":
                "<p><b>Introduction :</b> Dans ce chapitre, nous allons explorer les différentes techniques de mise en page en CSS. Comprendre ces concepts est fondamental pour créer des designs web efficaces et adaptifs.</p>" +

                "<br><h3>1. Le Modèle de Boîte</h3>" +
                "<p>Le modèle de boîte est la façon dont les éléments HTML sont organisés et stylisés. Chaque élément est considéré comme une boîte avec quatre propriétés principales :</p>" +
                "<ul>" +
                "<li><span>Marge :</span> Espace à l'extérieur de l'élément, séparant ce dernier des autres éléments.</li>" +
                "<li><span>Bordure :</span> Ligne entourant l'élément, définie par sa largeur, style et couleur.</li>" +
                "<li><span>Rembourrage (Padding) :</span> Espace à l'intérieur de l'élément, entre le contenu et la bordure.</li>" +
                "<li><span>Contenu :</span> Ce que contient l'élément (texte, images, etc.).</li>" +
                "</ul>" +

                "<p><b>Exemple du modèle de boîte :</b></p>" +
                "<pre><code>" +
                "/* Exemple du modèle de boîte */\n" +
                "div { \n" +
                "  margin: 10px; \n" +
                "  padding: 20px; \n" +
                "  border: 2px solid black; \n" +
                "}" +
                "</code></pre>" +
                "<p>Dans cet exemple, un espace de <span>10px</span> sera laissé autour du div (marge), un espace de <span>20px</span> sera à l'intérieur du div (rembourrage), et une bordure de <span>2px</span> sera dessinée autour de celui-ci.</p>" +

                "<br><h3>2. Unités de Mesure</h3>" +
                "<p>Il existe plusieurs unités de mesure en CSS, chacune ayant son utilité :</p>" +
                "<ul>" +
                "<li><span>Pixels (px) :</span> Une unité fixe, généralement utilisée pour des tailles précises.</li>" +
                "<li><span>Pourcentages (%) :</span> Utilisé pour des dimensions relatives, souvent par rapport à l'élément parent.</li>" +
                "<li><span>em :</span> Relative à la taille de la police de l'élément parent.</li>" +
                "<li><span>rem :</span> Relative à la taille de la police de l'élément racine (généralement <code>&lt;html&gt;</code>).</li>" +
                "<li><span>vh/vw :</span> Unités basées sur la taille de la fenêtre de visualisation (1vh = 1% de la hauteur, 1vw = 1% de la largeur).</li>" +
                "</ul>" +

                "<br><h3>3. Positionnement</h3>" +
                "<p>CSS offre plusieurs méthodes de positionnement des éléments :</p>" +
                "<ul>" +
                "<li><span>Statique :</span> La position par défaut, les éléments sont empilés les uns sur les autres.</li>" +
                "<li><span>Relatif :</span> Positionne un élément par rapport à sa position d'origine. Exemple : <code>top: 10px;</code> déplace l'élément de 10 pixels vers le bas.</li>" +
                "<li><span>Absolu :</span> Positionne un élément par rapport à son ancêtre le plus proche ayant une position relative.</li>" +
                "<li><span>Fixe :</span> L'élément reste à la même position même lors du défilement de la page.</li>" +
                "<li><span>Sticky :</span> Un mélange de positionnement relatif et fixe, où l'élément reste collé en haut lors du défilement.</li>" +
                "</ul>" +

                "<p><b>Exemple de positionnement :</b></p>" +
                "<pre><code>" +
                ".fixed-header {\n" +
                "  position: fixed;\n" +
                "  top: 0;\n" +
                "  width: 100%;\n" +
                "}" +
                "</code></pre>" +
                "<p>Dans cet exemple, l'élément avec la classe <code>fixed-header</code> reste fixé en haut de la page, même lors du défilement.</p>" +

                "<br><h3>4. Flexbox</h3>" +
                "<p>Flexbox est un modèle de mise en page qui permet de créer des mises en page flexibles et adaptées. Il facilite la distribution d'espace et l'alignement des éléments :</p>" +
                "<ul>" +
                "<li><span>Conteneur Flex :</span> Utilisez <code>display: flex;</code> pour activer le mode Flexbox.</li>" +
                "<li><span>Alignement :</span> Alignez les éléments avec <code>justify-content</code> (horizontal) et <code>align-items</code> (vertical).</li>" +
                "</ul>" +
                "<pre><code>" +
                ".flex-container {\n" +
                "  display: flex;\n" +
                "  justify-content: space-around;\n" +
                "  align-items: center;\n" +
                "  height: 100px;\n" +
                "  background-color: #f0f0f0;\n" +
                "}\n\n" +
                ".flex-item {\n" +
                "  background-color: #4CAF50;\n" +
                "  color: white;\n" +
                "  padding: 20px;\n" +
                "  margin: 5px;\n" +
                "  border-radius: 5px;\n" +
                "}" +
                "</code></pre>" +
                "<p>Ce code crée un conteneur flex avec trois éléments alignés horizontalement, répartis de manière égale avec un espace autour.</p>" +

                "<br><h3>5. Grille CSS (Grid)</h3>" +
                "<p>La Grille CSS permet de créer des mises en page plus complexes en définissant des lignes et des colonnes :</p>" +
                "<ul>" +
                "<li><span>Définir une grille :</span> Utilisez <code>display: grid;</code> pour activer le modèle de grille.</li>" +
                "<li><span>Lignes et colonnes :</span> Utilisez <code>grid-template-rows</code> et <code>grid-template-columns</code> pour définir la structure de la grille.</li>" +
                "</ul>" +

                "<p><b>Exemple de Grille CSS :</b></p>" +
                "<pre><code>" +
                ".grid-container {\n" +
                "  display: grid;\n" +
                "  grid-template-columns: repeat(3, 1fr);\n" +
                "  grid-gap: 10px;\n" +
                "}\n\n" +
                ".grid-item {\n" +
                "  background-color: #2196F3;\n" +
                "  color: white;\n" +
                "  padding: 20px;\n" +
                "  text-align: center;\n" +
                "  border-radius: 5px;\n" +
                "}" +
                "</code></pre>" +
                "<p>Ce code crée une grille avec six éléments disposés en trois colonnes, avec un espace de <span>10px</span> entre les éléments.</p>"
        },
        {
            numero: 4,
            title: "<h2>Chapitre 4 : Typographie et couleurs</h2><hr>",
            content: "<p><b>Sous-titres du chapitre 4 :</b></p>" +
                "<ul>" +
                "<li>Propriétés de texte : font-family, font-size, font-weight, line-height, etc.</li>" +
                "<li>Gestion des polices : Google Fonts et les polices personnalisées</li>" +
                "<li>Couleurs : hexadécimal, RGB, HSL, et opacité</li>" +
                "<li>Espacement et alignement de texte</li>" +
                "<li>Exemples : création de menus et de titres stylisés</li>" +
                "</ul>" +
                "<br><p><span style='font-weight:bold;'>Important :</span> La typographie est cruciale pour améliorer l'accessibilité et l'expérience utilisateur sur un site web.</p>" +
                "<br><p><b>Exemple :</b></p>" +
                "<pre><code>" +
                "/* Exemple de typographie CSS */\n" +
                "h1 { font-family: 'Arial', sans-serif; font-size: 24px; }\n" +
                "p { color: #333; line-height: 1.6; }" +
                "</code></pre>" +
                "<br><p><b>Résultat :</b> Les titres &lt;h1&gt; utiliseront la police Arial et auront une taille de 24px, tandis que le texte des paragraphes sera gris foncé (#333) avec un interlignage de 1.6.</p>"
        },
        {
            numero: 5,
            title: "<h2>Chapitre 5 : Animations et transitions</h2><hr>",
            content: "<p><b>Sous-titres du chapitre 5 :</b></p>" +
                "<ul>" +
                "<li>Introduction aux transitions CSS : durée, timing, et propriétés transitionnées</li>" +
                "<li>Animations CSS : @keyframes et propriétés d'animation</li>" +
                "<li>Création d'effets dynamiques : survol, clics, animations automatiques</li>" +
                "<li>Utilisation avancée de transform, translate, rotate et scale</li>" +
                "<li>Exemples pratiques : création d'animations de boutons et de cartes interactives</li>" +
                "</ul>" +
                "<br><p><span style='font-weight:bold;'>Important :</span> Les transitions et animations CSS permettent d'ajouter des interactions visuelles dynamiques sans JavaScript.</p>" +
                "<br><p><b>Exemple :</b></p>" +
                "<pre><code>" +
                "/* Exemple d'animation CSS */\n" +
                "@keyframes slideIn { \n" +
                "  from { transform: translateX(-100%); } \n" +
                "  to { transform: translateX(0); } \n" +
                "}\n" +
                "div { animation: slideIn 2s ease-out; }" +
                "</code></pre>" +
                "<br><p><b>Résultat :</b> Un élément &lt;div&gt; glissera de la gauche à sa position initiale en 2 secondes avec un effet de fluidité.</p>"
        },
        {
            numero: 6,
            title: "<h2>Chapitre 6 : Responsive Design</h2><hr>",
            content: "<p><b>Introduction au Responsive Design</b></p>" +
                "<br><div>Le responsive design permet de créer des sites web qui s'adaptent automatiquement à différentes tailles d'écran, des mobiles aux ordinateurs de bureau.</div>" +
                "<br><p><b>Media Queries</b></p>" +
                "<br><div>Les media queries permettent d'appliquer des styles différents selon la taille de l'écran :</div>" +
                "<br><pre><code>/* Styles pour mobile */\n@media (max-width: 768px) {\n  .container { padding: 10px; }\n  .menu { display: none; }\n}\n\n/* Styles pour tablette */\n@media (min-width: 769px) and (max-width: 1024px) {\n  .container { padding: 20px; }\n}\n\n/* Styles pour desktop */\n@media (min-width: 1025px) {\n  .container { padding: 40px; }\n}</code></pre>" +
                "<br><p><b>Unités Responsives</b></p>" +
                "<br><div>Utilisez des unités relatives pour créer des designs adaptatifs :</div>" +
                "<br><pre><code>/* Unités responsives */\n.container {\n  width: 100%; /* Largeur relative */\n  max-width: 1200px; /* Largeur maximale */\n  margin: 0 auto; /* Centrage */\n}\n\n.text {\n  font-size: 1rem; /* Taille relative à la police de base */\n  line-height: 1.5; /* Hauteur de ligne relative */\n}</code></pre>" +
                "<br><p><b>Images Responsives</b></p>" +
                "<br><div>Rendez vos images adaptatives :</div>" +
                "<br><pre><code>img {\n  max-width: 100%; /* L'image ne dépasse jamais son conteneur */\n  height: auto; /* Maintient les proportions */\n}</code></pre>"
        },
        {
            numero: 7,
            title: "<h2>Chapitre 7 : CSS Grid Avancé</h2><hr>",
            content: "<p><b>CSS Grid : Un système de mise en page puissant</b></p>" +
                "<br><div>CSS Grid permet de créer des mises en page complexes en deux dimensions avec des lignes et des colonnes.</div>" +
                "<br><p><b>Propriétés du conteneur Grid</b></p>" +
                "<br><pre><code>.grid-container {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr); /* 3 colonnes égales */\n  grid-template-rows: 100px 200px 100px; /* Hauteurs spécifiques */\n  gap: 20px; /* Espacement entre les éléments */\n  grid-template-areas:\n    'header header header'\n    'sidebar main main'\n    'footer footer footer';\n}</code></pre>" +
                "<br><p><b>Positionnement des éléments</b></p>" +
                "<br><pre><code>.grid-item {\n  grid-column: 1 / 3; /* De la ligne 1 à 3 */\n  grid-row: 1 / 2; /* De la ligne 1 à 2 */\n  grid-area: header; /* Utilise une zone nommée */\n}</code></pre>" +
                "<br><p><b>Alignement et justification</b></p>" +
                "<br><pre><code>.grid-container {\n  justify-items: center; /* Alignement horizontal */\n  align-items: center; /* Alignement vertical */\n  justify-content: space-between; /* Distribution horizontale */\n  align-content: space-around; /* Distribution verticale */\n}</code></pre>"
        },
        {
            numero: 8,
            title: "<h2>Chapitre 8 : Flexbox vs Grid</h2><hr>",
            content: "<p><b>Quand utiliser Flexbox ou Grid ?</b></p>" +
                "<br><div>Flexbox et Grid sont complémentaires : Flexbox pour les mises en page unidimensionnelles, Grid pour les mises en page bidimensionnelles.</div>" +
                "<br><p><b>Flexbox - Une dimension</b></p>" +
                "<br><pre><code>.flex-container {\n  display: flex;\n  flex-direction: row; /* ou column */\n  justify-content: space-between; /* Distribution principale */\n  align-items: center; /* Alignement perpendiculaire */\n  flex-wrap: wrap; /* Retour à la ligne */\n}</code></pre>" +
                "<br><p><b>Grid - Deux dimensions</b></p>" +
                "<br><pre><code>.grid-container {\n  display: grid;\n  grid-template-columns: 1fr 2fr 1fr; /* Colonnes */\n  grid-template-rows: auto 1fr auto; /* Lignes */\n  gap: 20px;\n}</code></pre>" +
                "<br><p><b>Combinaison des deux</b></p>" +
                "<br><div>Utilisez Grid pour la structure générale et Flexbox pour les composants internes :</div>" +
                "<br><pre><code>.page {\n  display: grid;\n  grid-template-areas: 'header' 'main' 'footer';\n}\n\n.nav {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}</code></pre>"
        },
        {
            numero: 9,
            title: "<h2>Chapitre 9 : Variables CSS (Custom Properties)</h2><hr>",
            content: "<p><b>Les variables CSS : Réutilisabilité et maintenance</b></p>" +
                "<br><div>Les variables CSS permettent de stocker des valeurs réutilisables et de les modifier facilement.</div>" +
                "<br><p><b>Déclaration des variables</b></p>" +
                "<br><pre><code>:root {\n  --primary-color: #3498db;\n  --secondary-color: #2ecc71;\n  --font-size-base: 16px;\n  --spacing-unit: 8px;\n  --border-radius: 4px;\n}</code></pre>" +
                "<br><p><b>Utilisation des variables</b></p>" +
                "<br><pre><code>.button {\n  background-color: var(--primary-color);\n  font-size: var(--font-size-base);\n  padding: calc(var(--spacing-unit) * 2);\n  border-radius: var(--border-radius);\n}</code></pre>" +
                "<br><p><b>Variables locales et héritage</b></p>" +
                "<br><pre><code>.theme-dark {\n  --primary-color: #e74c3c;\n  --background: #2c3e50;\n  --text-color: #ecf0f1;\n}\n\n/* Les éléments enfants héritent des variables */\n.theme-dark .button {\n  background-color: var(--primary-color); /* Utilise la variable locale */\n}</code></pre>" +
                "<br><p><b>Avantages des variables CSS</b></p>" +
                "<ul><li>Maintenance facilitée</li><li>Thèmes dynamiques</li><li>Calculs avec calc()</li><li>Modification via JavaScript</li></ul>"
        },
        {
            numero: 10,
            title: "<h2>Chapitre 10 : Optimisation et Performance CSS</h2><hr>",
            content: "<p><b>Optimiser les performances CSS</b></p>" +
                "<br><div>Une CSS bien optimisée améliore les temps de chargement et l'expérience utilisateur.</div>" +
                "<br><p><b>Minification et compression</b></p>" +
                "<br><div>Utilisez des outils pour réduire la taille des fichiers CSS :</div>" +
                "<br><ul><li>Suppression des espaces et commentaires</li><li>Compression Gzip/Brotli</li><li>Concaténation des fichiers</li></ul>" +
                "<br><p><b>Sélecteurs performants</b></p>" +
                "<br><pre><code>/* Éviter les sélecteurs complexes */\n/* Lent */\ndiv > ul li a span { color: red; }\n\n/* Rapide */\n.highlight { color: red; }\n\n/* Utiliser les classes plutôt que les balises */\n/* Lent */\ndiv { margin: 0; }\n\n/* Rapide */\n.reset { margin: 0; }</code></pre>" +
                "<br><p><b>Chargement asynchrone</b></p>" +
                "<br><pre><code>&lt;link rel='preload' href='styles.css' as='style' onload='this.onload=null;this.rel='stylesheet''&gt;\n&lt;noscript&gt;&lt;link rel='stylesheet' href='styles.css'&gt;&lt;/noscript&gt;</code></pre>" +
                "<br><p><b>CSS Critical Path</b></p>" +
                "<br><div>Chargez d'abord le CSS critique (above-the-fold) puis le reste de manière asynchrone.</div>"
        }
    ],
    javascript: [
        {
            numero: 1,
            title: "<h1>Chapitre 1 : Introduction à JavaScript</h1><hr>",
            content: "JavaScript est un langage de programmation dynamique et polyvalent qui permet de créer des applications web interactives et des expériences utilisateur riches." +
                "<br><p><b><span>Qu'est-ce que JavaScript ?</span></b></p>" +
                "<br><div>JavaScript est un langage de programmation de haut niveau, interprété et orienté objet. Il est principalement utilisé pour le développement web côté client, mais peut également être utilisé côté serveur avec Node.js.</div>" +
                "<br><div>JavaScript permet de :</div>" +
                "<ul><li>Rendre les pages web interactives et dynamiques</li><li>Manipuler le DOM (Document Object Model)</li><li>Gérer les événements utilisateur</li><li>Effectuer des requêtes AJAX</li><li>Créer des animations et des effets visuels</li><li>Développer des applications web complètes</li></ul>" +
                "<br><p><b><span>Historique de JavaScript</span></b></p>" +
                "<br><div>JavaScript a été créé par Brendan Eich en 1995 chez Netscape. Initialement appelé Mocha, puis LiveScript, il a finalement été nommé JavaScript pour profiter de la popularité de Java à l'époque.</div>" +
                "<br><div>Évolutions majeures :</div>" +
                "<ul><li><span><b>1997 :</b></span> ECMAScript 1 (ES1) - Première standardisation</li><li><span><b>2009 :</b></span> ES5 - Ajout de nombreuses fonctionnalités modernes</li><li><span><b>2015 :</b></span> ES6/ES2015 - Révolution avec les classes, modules, arrow functions</li><li><span><b>2016-2023 :</b></span> ES2016 à ES2023 - Améliorations continues</li></ul>"
        },
        {
            numero: 2,
            title: "<h1>Chapitre 2 : Variables et types de données</h1><hr>",
            content: "Les variables sont des conteneurs qui stockent des valeurs. JavaScript est un langage à typage dynamique, ce qui signifie que le type d'une variable est déterminé automatiquement." +
                "<br><p><b><span>Déclaration de variables</span></b></p>" +
                "<br><div>En JavaScript moderne, on utilise principalement <code>let</code> et <code>const</code> :</div>" +
                "<br><pre><code>// Déclaration avec let (modifiable)\nlet nom = 'Alice';\nlet age = 25;\n\n// Déclaration avec const (non modifiable)\nconst PI = 3.14159;\nconst ville = 'Paris';\n\n// Déclaration avec var (ancienne méthode, à éviter)\nvar ancienneVariable = 'déconseillé';</code></pre>" +
                "<br><p><b><span>Types de données primitifs</span></b></p>" +
                "<br><div>JavaScript possède plusieurs types de données :</div>" +
                "<br><pre><code>// String (chaîne de caractères)\nlet message = 'Bonjour le monde!';\nlet nom = \"Alice\";\nlet template = `Bonjour ${nom}!`; // Template literals\n\n// Number (nombre)\nlet entier = 42;\nlet decimal = 3.14;\nlet infini = Infinity;\nlet pasUnNombre = NaN;\n\n// Boolean (booléen)\nlet vrai = true;\nlet faux = false;\n\n// Undefined (non défini)\nlet nonDefini;\nconsole.log(nonDefini); // undefined\n\n// Null (vide)\nlet vide = null;\n\n// Symbol (symbole) - ES6+\nlet symbole = Symbol('description');</code></pre>" +
                "<br><p><b><span>Typeof et conversion de types</span></b></p>" +
                "<br><div>L'opérateur <code>typeof</code> permet de connaître le type d'une variable :</div>" +
                "<br><pre><code>console.log(typeof 'hello');     // 'string'\nconsole.log(typeof 42);         // 'number'\nconsole.log(typeof true);       // 'boolean'\nconsole.log(typeof undefined);  // 'undefined'\nconsole.log(typeof null);       // 'object' (particularité JS)</code></pre>"
        },
        {
            numero: 3,
            title: "<h1>Chapitre 3 : Opérateurs et expressions</h1><hr>",
            content: "Les opérateurs permettent de manipuler les valeurs et de créer des expressions complexes. JavaScript possède de nombreux opérateurs pour différentes opérations." +
                "<br><p><b><span>Opérateurs arithmétiques</span></b></p>" +
                "<br><pre><code>let a = 10;\nlet b = 3;\n\nconsole.log(a + b);   // 13 (addition)\nconsole.log(a - b);   // 7 (soustraction)\nconsole.log(a * b);   // 30 (multiplication)\nconsole.log(a / b);   // 3.333... (division)\nconsole.log(a % b);   // 1 (modulo - reste de la division)\nconsole.log(a ** b);  // 1000 (exponentiation - ES2016)</code></pre>" +
                "<br><p><b><span>Opérateurs de comparaison</span></b></p>" +
                "<br><pre><code>let x = 5;\nlet y = '5';\n\nconsole.log(x == y);   // true (égalité avec conversion)\nconsole.log(x === y);  // false (égalité stricte)\nconsole.log(x != y);   // false (différence avec conversion)\nconsole.log(x !== y);  // true (différence stricte)\nconsole.log(x > 3);    // true (supérieur)\nconsole.log(x < 10);   // true (inférieur)\nconsole.log(x >= 5);   // true (supérieur ou égal)\nconsole.log(x <= 5);   // true (inférieur ou égal)</code></pre>" +
                "<br><p><b><span>Opérateurs logiques</span></b></p>" +
                "<br><pre><code>let age = 25;\nlet permis = true;\n\n// ET logique (&&)\nif (age >= 18 && permis) {\n    console.log('Peut conduire');\n}\n\n// OU logique (||)\nif (age < 18 || !permis) {\n    console.log('Ne peut pas conduire');\n}\n\n// NON logique (!)\nif (!permis) {\n    console.log('Pas de permis');\n}</code></pre>"
        },
        {
            numero: 4,
            title: "<h1>Chapitre 4 : Structures de contrôle</h1><hr>",
            content: "Les structures de contrôle permettent d'exécuter du code de manière conditionnelle ou répétitive, ce qui est essentiel pour créer des programmes logiques." +
                "<br><p><b><span>Instructions conditionnelles</span></b></p>" +
                "<br><pre><code>// if...else\nlet temperature = 25;\n\nif (temperature > 30) {\n    console.log('Il fait chaud');\n} else if (temperature > 20) {\n    console.log('Il fait bon');\n} else {\n    console.log('Il fait frais');\n}\n\n// Opérateur ternaire\nlet message = temperature > 20 ? 'Chaud' : 'Froid';\nconsole.log(message);\n\n// switch\nlet jour = 'lundi';\nswitch (jour) {\n    case 'lundi':\n        console.log('Début de semaine');\n        break;\n    case 'vendredi':\n        console.log('Fin de semaine');\n        break;\n    default:\n        console.log('Jour normal');\n}</code></pre>" +
                "<br><p><b><span>Boucles</span></b></p>" +
                "<br><pre><code>// for classique\nfor (let i = 0; i < 5; i++) {\n    console.log(i); // 0, 1, 2, 3, 4\n}\n\n// for...of (pour les tableaux)\nlet fruits = ['pomme', 'banane', 'orange'];\nfor (let fruit of fruits) {\n    console.log(fruit);\n}\n\n// for...in (pour les objets)\nlet personne = { nom: 'Alice', age: 25 };\nfor (let propriete in personne) {\n    console.log(propriete + ': ' + personne[propriete]);\n}\n\n// while\nlet compteur = 0;\nwhile (compteur < 3) {\n    console.log(compteur);\n    compteur++;\n}\n\n// do...while\nlet i = 0;\ndo {\n    console.log('Exécuté au moins une fois');\n    i++;\n} while (i < 1);</code></pre>"
        },
        {
            numero: 5,
            title: "<h1>Chapitre 5 : Fonctions</h1><hr>",
            content: "Les fonctions sont des blocs de code réutilisables qui permettent d'organiser et de structurer le code. Elles sont essentielles en JavaScript." +
                "<br><p><b><span>Déclaration de fonctions</span></b></p>" +
                "<br><pre><code>// Déclaration de fonction\nfunction saluer(nom) {\n    return `Bonjour ${nom}!`;\n}\n\n// Expression de fonction\nconst multiplier = function(a, b) {\n    return a * b;\n};\n\n// Arrow function (ES6+)\nconst diviser = (a, b) => {\n    return a / b;\n};\n\n// Arrow function courte\nconst carre = x => x * x;\n\n// Fonction anonyme immédiatement exécutée (IIFE)\n(function() {\n    console.log('Fonction anonyme');\n})();</code></pre>" +
                "<br><p><b><span>Paramètres et arguments</span></b></p>" +
                "<br><pre><code>// Paramètres par défaut (ES6+)\nfunction creerUtilisateur(nom, age = 18, ville = 'Paris') {\n    return { nom, age, ville };\n}\n\n// Rest parameters (ES6+)\nfunction additionner(...nombres) {\n    return nombres.reduce((total, nombre) => total + nombre, 0);\n}\n\nconsole.log(additionner(1, 2, 3, 4)); // 10\n\n// Destructuring dans les paramètres\nfunction afficherUtilisateur({ nom, age, ville }) {\n    console.log(`${nom}, ${age} ans, ${ville}`);\n}\n\nlet utilisateur = { nom: 'Alice', age: 25, ville: 'Lyon' };\nafficherUtilisateur(utilisateur);</code></pre>" +
                "<br><p><b><span>Fonctions d'ordre supérieur</span></b></p>" +
                "<br><pre><code>// Fonction qui prend une fonction en paramètre\nfunction appliquerOperation(nombres, operation) {\n    return nombres.map(operation);\n}\n\nlet nombres = [1, 2, 3, 4, 5];\nlet carres = appliquerOperation(nombres, x => x * x);\nconsole.log(carres); // [1, 4, 9, 16, 25]\n\n// Fonction qui retourne une fonction\nfunction creerMultiplicateur(facteur) {\n    return function(nombre) {\n        return nombre * facteur;\n    };\n}\n\nlet doubler = creerMultiplicateur(2);\nconsole.log(doubler(5)); // 10</code></pre>"
        },
        {
            numero: 6,
            title: "<h1>Chapitre 6 : Objets et Classes</h1><hr>",
            content: "Les objets sont des structures de données qui permettent de regrouper des propriétés et des méthodes liées. Les classes ES6+ offrent une syntaxe plus claire pour créer des objets." +
                "<br><p><b><span>Création d'objets</span></b></p>" +
                "<br><pre><code>// Objet littéral\nconst personne = {\n    nom: 'Alice',\n    age: 25,\n    saluer() {\n        return `Bonjour, je suis ${this.nom}`;\n    }\n};\n\n// Accès aux propriétés\nconsole.log(personne.nom); // Alice\nconsole.log(personne['age']); // 25\nconsole.log(personne.saluer()); // Bonjour, je suis Alice</code></pre>" +
                "<br><p><b><span>Classes ES6</span></b></p>" +
                "<br><pre><code>class Voiture {\n    constructor(marque, modele, annee) {\n        this.marque = marque;\n        this.modele = modele;\n        this.annee = annee;\n        this.vitesse = 0;\n    }\n    \n    accelerer() {\n        this.vitesse += 10;\n        console.log(`Vitesse: ${this.vitesse} km/h`);\n    }\n    \n    freiner() {\n        this.vitesse = Math.max(0, this.vitesse - 10);\n        console.log(`Vitesse: ${this.vitesse} km/h`);\n    }\n}\n\nconst maVoiture = new Voiture('Toyota', 'Corolla', 2023);\nmaVoiture.accelerer(); // Vitesse: 10 km/h</code></pre>" +
                "<br><p><b><span>Héritage et méthodes statiques</span></b></p>" +
                "<br><pre><code>class VehiculeElectrique extends Voiture {\n    constructor(marque, modele, annee, autonomie) {\n        super(marque, modele, annee);\n        this.autonomie = autonomie;\n    }\n    \n    recharger() {\n        console.log('Rechargement en cours...');\n    }\n    \n    static comparer(vehicule1, vehicule2) {\n        return vehicule1.autonomie - vehicule2.autonomie;\n    }\n}</code></pre>"
        },
        {
            numero: 7,
            title: "<h1>Chapitre 7 : Tableaux et Méthodes</h1><hr>",
            content: "Les tableaux sont des structures de données essentielles en JavaScript. Ils offrent de nombreuses méthodes pour manipuler les données efficacement." +
                "<br><p><b><span>Méthodes de transformation</span></b></p>" +
                "<br><pre><code>const nombres = [1, 2, 3, 4, 5];\n\n// map() - Transforme chaque élément\nconst carres = nombres.map(x => x * x);\nconsole.log(carres); // [1, 4, 9, 16, 25]\n\n// filter() - Filtre les éléments\nconst pairs = nombres.filter(x => x % 2 === 0);\nconsole.log(pairs); // [2, 4]\n\n// reduce() - Réduit à une valeur unique\nconst somme = nombres.reduce((acc, x) => acc + x, 0);\nconsole.log(somme); // 15</code></pre>" +
                "<br><p><b><span>Méthodes de recherche</span></b></p>" +
                "<br><pre><code>const fruits = ['pomme', 'banane', 'orange', 'kiwi'];\n\n// find() - Trouve le premier élément\nconst fruit = fruits.find(f => f.length > 5);\nconsole.log(fruit); // 'banane'\n\n// some() - Vérifie si au moins un élément correspond\nconst contientA = fruits.some(f => f.includes('a'));\nconsole.log(contientA); // true\n\n// every() - Vérifie si tous les éléments correspondent\nconst tousLongs = fruits.every(f => f.length > 3);\nconsole.log(tousLongs); // false</code></pre>" +
                "<br><p><b><span>Méthodes de modification</span></b></p>" +
                "<br><pre><code>let nombres = [1, 2, 3];\n\n// push() - Ajoute à la fin\nnombres.push(4, 5);\nconsole.log(nombres); // [1, 2, 3, 4, 5]\n\n// pop() - Retire le dernier\nconst dernier = nombres.pop();\nconsole.log(dernier); // 5\n\n// splice() - Modifie le tableau\nnombres.splice(1, 2, 'a', 'b');\nconsole.log(nombres); // [1, 'a', 'b', 4]</code></pre>"
        },
        {
            numero: 8,
            title: "<h1>Chapitre 8 : DOM et Manipulation</h1><hr>",
            content: "Le DOM (Document Object Model) permet de manipuler les éléments HTML avec JavaScript pour créer des interactions dynamiques." +
                "<br><p><b><span>Sélection d'éléments</span></b></p>" +
                "<br><pre><code>// Sélection par ID\nconst titre = document.getElementById('monTitre');\n\n// Sélection par classe\nconst boutons = document.getElementsByClassName('btn');\n\n// Sélection par sélecteur CSS\nconst paragraphes = document.querySelectorAll('p');\nconst premierDiv = document.querySelector('.container');</code></pre>" +
                "<br><p><b><span>Modification du contenu</span></b></p>" +
                "<br><pre><code>// Modifier le texte\nconst element = document.getElementById('demo');\nelement.textContent = 'Nouveau texte';\nelement.innerHTML = '&lt;strong&gt;Texte en gras&lt;/strong&gt;';\n\n// Modifier les attributs\nelement.setAttribute('class', 'nouvelle-classe');\nelement.style.color = 'red';\nelement.style.fontSize = '20px';</code></pre>" +
                "<br><p><b><span>Gestion des événements</span></b></p>" +
                "<br><pre><code>const bouton = document.getElementById('monBouton');\n\n// Ajouter un événement\nbouton.addEventListener('click', function() {\n    console.log('Bouton cliqué !');\n});\n\n// Événement avec paramètres\nbouton.addEventListener('click', (e) => {\n    e.preventDefault(); // Empêche le comportement par défaut\n    console.log('Type d\'événement:', e.type);\n});</code></pre>" +
                "<br><p><b><span>Création d'éléments</span></b></p>" +
                "<br><pre><code>// Créer un nouvel élément\nconst nouveauDiv = document.createElement('div');\nnouveauDiv.textContent = 'Nouveau contenu';\nnouveauDiv.className = 'ma-classe';\n\n// Ajouter au DOM\ndocument.body.appendChild(nouveauDiv);\n\n// Ou insérer à un endroit spécifique\nconst parent = document.getElementById('conteneur');\nparent.insertBefore(nouveauDiv, parent.firstChild);</code></pre>"
        },
        {
            numero: 9,
            title: "<h1>Chapitre 9 : Asynchrone et Promesses</h1><hr>",
            content: "JavaScript est asynchrone par nature. Les promesses et async/await permettent de gérer les opérations asynchrones de manière élégante." +
                "<br><p><b><span>Promesses de base</span></b></p>" +
                "<br><pre><code>// Créer une promesse\nconst maPromesse = new Promise((resolve, reject) => {\n    const succes = true;\n    \n    if (succes) {\n        resolve('Opération réussie !');\n    } else {\n        reject('Erreur !');\n    }\n});\n\n// Utiliser une promesse\nmaPromesse\n    .then(resultat => console.log(resultat))\n    .catch(erreur => console.error(erreur))\n    .finally(() => console.log('Terminé'));</code></pre>" +
                "<br><p><b><span>Fetch API</span></b></p>" +
                "<br><pre><code>// Requête GET\nfetch('https://api.exemple.com/data')\n    .then(response => {\n        if (!response.ok) {\n            throw new Error('Erreur HTTP');\n        }\n        return response.json();\n    })\n    .then(data => console.log(data))\n    .catch(error => console.error('Erreur:', error));\n\n// Requête POST\nfetch('https://api.exemple.com/data', {\n    method: 'POST',\n    headers: {\n        'Content-Type': 'application/json'\n    },\n    body: JSON.stringify({ nom: 'Alice', age: 25 })\n})\n.then(response => response.json())\n.then(data => console.log(data));</code></pre>" +
                "<br><p><b><span>Async/Await</span></b></p>" +
                "<br><pre><code>// Fonction async\nasync function chargerDonnees() {\n    try {\n        const response = await fetch('https://api.exemple.com/data');\n        const data = await response.json();\n        console.log(data);\n        return data;\n    } catch (error) {\n        console.error('Erreur:', error);\n    }\n}\n\n// Utilisation\nchargerDonnees();</code></pre>"
        },
        {
            numero: 10,
            title: "<h1>Chapitre 10 : Modules et Import/Export</h1><hr>",
            content: "Les modules ES6 permettent d'organiser le code en fichiers séparés et de gérer les dépendances de manière claire." +
                "<br><p><b><span>Export de modules</span></b></p>" +
                "<br><pre><code>// math.js - Export nommé\nexport const PI = 3.14159;\nexport function additionner(a, b) {\n    return a + b;\n}\nexport function multiplier(a, b) {\n    return a * b;\n}\n\n// Export par défaut\nclass Calculatrice {\n    constructor() {\n        this.resultat = 0;\n    }\n    \n    calculer(operation, a, b) {\n        return operation(a, b);\n    }\n}\n\nexport default Calculatrice;</code></pre>" +
                "<br><p><b><span>Import de modules</span></b></p>" +
                "<br><pre><code>// Import nommé\nimport { PI, additionner, multiplier } from './math.js';\n\n// Import par défaut\nimport Calculatrice from './math.js';\n\n// Import avec alias\nimport { additionner as add } from './math.js';\n\n// Import de tout\nimport * as MathUtils from './math.js';\nconsole.log(MathUtils.PI); // 3.14159</code></pre>" +
                "<br><p><b><span>Modules dans le navigateur</span></b></p>" +
                "<br><pre><code>&lt;script type='module'&gt;\n    import { additionner } from './math.js';\n    console.log(additionner(2, 3)); // 5\n&lt;/script&gt;\n\n&lt;!-- Ou dans un fichier .js --&gt;\n&lt;script type='module' src='main.js'&gt;&lt;/script&gt;</code></pre>"
        }
    ],
    php: [
        { 
            numero: 1, 
            title: "<h1>Chapitre 1 : Les bases du PHP</h1><hr>", 
            content: "PHP est un langage de script côté serveur utilisé principalement pour le développement web, permettant de créer des pages web dynamiques et interactives. Malgré ses apparences, il n'est pas vilain... Promis !" +
                "<br><p><b><span>Qu'est-ce que PHP ?</span></b></p>" +
                "<br><div>PHP (PHP: Hypertext Preprocessor) est un langage de programmation open-source spécialement conçu pour le développement web. Il s'exécute côté serveur et génère du HTML qui est envoyé au navigateur.</div>" +
                "<br><div>Avantages de PHP :</div>" +
                "<ul><li>Facile à apprendre pour les débutants</li><li>Large communauté et documentation</li><li>Intégration native avec HTML</li><li>Support de nombreuses bases de données</li><li>Frameworks populaires (Laravel, Symfony)</li></ul>" +
                "<br><p><b><span>Installation et configuration</span></b></p>" +
                "<br><div>Pour commencer avec PHP, vous avez besoin d'un serveur web local :</div>" +
                "<br><ul><li><b>XAMPP :</b> Apache + MySQL + PHP + Perl</li><li><b>WAMP :</b> Pour Windows</li><li><b>MAMP :</b> Pour macOS</li><li><b>LAMP :</b> Pour Linux</li></ul>"
        },
        {
            numero: 2,
            title: "<h1>Chapitre 2 : Syntaxe et Variables</h1><hr>",
            content: "Apprenez les bases de la syntaxe PHP et la gestion des variables." +
                "<br><p><b><span>Syntaxe de base</span></b></p>" +
                "<br><pre><code>&lt;?php\n// Commentaire sur une ligne\n/* Commentaire sur\n   plusieurs lignes */\n\necho 'Bonjour le monde !';\n?&gt;</code></pre>" +
                "<br><p><b><span>Variables</span></b></p>" +
                "<br><pre><code>&lt;?php\n// Les variables commencent par $\n$nom = 'Alice';\n$age = 25;\n$estActif = true;\n\n// Concaténation\n$message = 'Bonjour ' . $nom . ', vous avez ' . $age . ' ans';\necho $message;\n?&gt;</code></pre>" +
                "<br><p><b><span>Types de données</span></b></p>" +
                "<br><pre><code>&lt;?php\n// String (chaîne)\n$texte = 'Hello World';\n\n// Integer (entier)\n$nombre = 42;\n\n// Float (décimal)\n$decimal = 3.14;\n\n// Boolean (booléen)\n$vrai = true;\n$faux = false;\n\n// Array (tableau)\n$fruits = ['pomme', 'banane', 'orange'];\n\n// NULL\n$vide = null;\n?&gt;</code></pre>"
        },
        {
            numero: 3,
            title: "<h1>Chapitre 3 : Structures de contrôle</h1><hr>",
            content: "Maîtrisez les conditions et les boucles en PHP." +
                "<br><p><b><span>Conditions</span></b></p>" +
                "<br><pre><code>&lt;?php\n$age = 18;\n\n// if...else\nif ($age >= 18) {\n    echo 'Vous êtes majeur';\n} else {\n    echo 'Vous êtes mineur';\n}\n\n// switch\n$jour = 'lundi';\nswitch ($jour) {\n    case 'lundi':\n        echo 'Début de semaine';\n        break;\n    case 'vendredi':\n        echo 'Fin de semaine';\n        break;\n    default:\n        echo 'Jour normal';\n}\n?&gt;</code></pre>" +
                "<br><p><b><span>Boucles</span></b></p>" +
                "<br><pre><code>&lt;?php\n// for\nfor ($i = 0; $i < 5; $i++) {\n    echo $i . ' ';\n}\n\n// while\n$compteur = 0;\nwhile ($compteur < 3) {\n    echo $compteur . ' ';\n    $compteur++;\n}\n\n// foreach (pour les tableaux)\n$fruits = ['pomme', 'banane', 'orange'];\nforeach ($fruits as $fruit) {\n    echo $fruit . ' ';\n}\n?&gt;</code></pre>"
        },
        {
            numero: 4,
            title: "<h1>Chapitre 4 : Fonctions et Tableaux</h1><hr>",
            content: "Apprenez à créer des fonctions et manipuler les tableaux en PHP." +
                "<br><p><b><span>Fonctions</span></b></p>" +
                "<br><pre><code>&lt;?php\n// Fonction simple\nfunction saluer($nom) {\n    return 'Bonjour ' . $nom . ' !';\n}\n\necho saluer('Alice'); // Bonjour Alice !\n\n// Fonction avec paramètres par défaut\nfunction calculer($a, $b = 10) {\n    return $a + $b;\n}\n\necho calculer(5); // 15\necho calculer(5, 20); // 25\n?&gt;</code></pre>" +
                "<br><p><b><span>Tableaux</span></b></p>" +
                "<br><pre><code>&lt;?php\n// Tableau indexé\n$fruits = ['pomme', 'banane', 'orange'];\necho $fruits[0]; // pomme\n\n// Tableau associatif\n$personne = [\n    'nom' => 'Alice',\n    'age' => 25,\n    'ville' => 'Paris'\n];\necho $personne['nom']; // Alice\n\n// Fonctions de tableaux\n$nombres = [1, 2, 3, 4, 5];\necho count($nombres); // 5\necho array_sum($nombres); // 15\n?&gt;</code></pre>"
        },
        {
            numero: 5,
            title: "<h1>Chapitre 5 : Formulaires et Superglobales</h1><hr>",
            content: "Gérez les données des formulaires avec les variables superglobales PHP." +
                "<br><p><b><span>Variables superglobales</span></b></p>" +
                "<br><pre><code>&lt;?php\n// $_GET - Données dans l'URL\n// URL: page.php?nom=Alice&age=25\necho $_GET['nom']; // Alice\necho $_GET['age']; // 25\n\n// $_POST - Données de formulaire\nif ($_POST) {\n    $nom = $_POST['nom'];\n    $email = $_POST['email'];\n    echo 'Nom: ' . $nom . ', Email: ' . $email;\n}\n?&gt;</code></pre>" +
                "<br><p><b><span>Formulaire HTML</span></b></p>" +
                "<br><pre><code>&lt;form method='POST' action='traitement.php'&gt;\n    &lt;input type='text' name='nom' placeholder='Votre nom' required&gt;\n    &lt;input type='email' name='email' placeholder='Votre email' required&gt;\n    &lt;button type='submit'&gt;Envoyer&lt;/button&gt;\n&lt;/form&gt;</code></pre>" +
                "<br><p><b><span>Validation des données</span></b></p>" +
                "<br><pre><code>&lt;?php\nif ($_POST) {\n    $nom = trim($_POST['nom']); // Supprime les espaces\n    $email = filter_var($_POST['email'], FILTER_VALIDATE_EMAIL);\n    \n    if (empty($nom)) {\n        echo 'Le nom est requis';\n    } elseif (!$email) {\n        echo 'Email invalide';\n    } else {\n        echo 'Données valides !';\n    }\n}\n?&gt;</code></pre>"
        },
        {
            numero: 6,
            title: "<h1>Chapitre 6 : Base de données avec MySQLi</h1><hr>",
            content: "Connectez-vous à une base de données MySQL et effectuez des opérations CRUD." +
                "<br><p><b><span>Connexion à la base de données</span></b></p>" +
                "<br><pre><code>&lt;?php\n$servername = 'localhost';\n$username = 'root';\n$password = '';\n$dbname = 'ma_base';\n\n// Créer la connexion\n$conn = new mysqli($servername, $username, $password, $dbname);\n\n// Vérifier la connexion\nif ($conn->connect_error) {\n    die('Connexion échouée: ' . $conn->connect_error);\n}\necho 'Connexion réussie';\n?&gt;</code></pre>" +
                "<br><p><b><span>Requêtes SQL</span></b></p>" +
                "<br><pre><code>&lt;?php\n// INSERT\n$sql = 'INSERT INTO utilisateurs (nom, email) VALUES (?, ?)';\n$stmt = $conn->prepare($sql);\n$stmt->bind_param('ss', $nom, $email);\n$stmt->execute();\n\n// SELECT\n$sql = 'SELECT * FROM utilisateurs';\n$result = $conn->query($sql);\n\nif ($result->num_rows > 0) {\n    while($row = $result->fetch_assoc()) {\n        echo 'Nom: ' . $row['nom'] . ', Email: ' . $row['email'];\n    }\n}\n\n$conn->close();\n?&gt;</code></pre>"
        },
        {
            numero: 7,
            title: "<h1>Chapitre 7 : Sessions et Cookies</h1><hr>",
            content: "Gérez les sessions utilisateur et les cookies pour créer des applications web interactives." +
                "<br><p><b><span>Sessions</span></b></p>" +
                "<br><pre><code>&lt;?php\n// Démarrer une session\nsession_start();\n\n// Stocker des données en session\n$_SESSION['nom'] = 'Alice';\n$_SESSION['age'] = 25;\n\n// Accéder aux données de session\necho 'Bonjour ' . $_SESSION['nom'];\n\n// Détruire une session\nsession_destroy();\n?&gt;</code></pre>" +
                "<br><p><b><span>Cookies</span></b></p>" +
                "<br><pre><code>&lt;?php\n// Créer un cookie\nsetcookie('utilisateur', 'Alice', time() + 3600); // Expire dans 1 heure\n\n// Lire un cookie\nif (isset($_COOKIE['utilisateur'])) {\n    echo 'Utilisateur: ' . $_COOKIE['utilisateur'];\n}\n\n// Supprimer un cookie\nsetcookie('utilisateur', '', time() - 3600);\n?&gt;</code></pre>" +
                "<br><p><b><span>Système de connexion simple</span></b></p>" +
                "<br><pre><code>&lt;?php\nsession_start();\n\nif ($_POST['login'] && $_POST['password']) {\n    // Vérifier les identifiants (simplifié)\n    if ($_POST['login'] === 'admin' && $_POST['password'] === '123') {\n        $_SESSION['connecte'] = true;\n        $_SESSION['utilisateur'] = $_POST['login'];\n        header('Location: dashboard.php');\n    } else {\n        echo 'Identifiants incorrects';\n    }\n}\n?&gt;</code></pre>"
        },
        {
            numero: 8,
            title: "<h1>Chapitre 8 : Programmation Orientée Objet</h1><hr>",
            content: "Découvrez la programmation orientée objet en PHP avec les classes et objets." +
                "<br><p><b><span>Classes et objets</span></b></p>" +
                "<br><pre><code>&lt;?php\nclass Utilisateur {\n    // Propriétés\n    private $nom;\n    private $email;\n    \n    // Constructeur\n    public function __construct($nom, $email) {\n        $this->nom = $nom;\n        $this->email = $email;\n    }\n    \n    // Méthodes\n    public function getNom() {\n        return $this->nom;\n    }\n    \n    public function setEmail($email) {\n        $this->email = $email;\n    }\n    \n    public function afficher() {\n        return 'Nom: ' . $this->nom . ', Email: ' . $this->email;\n    }\n}\n\n// Utilisation\n$user = new Utilisateur('Alice', 'alice@example.com');\necho $user->afficher();\n?&gt;</code></pre>" +
                "<br><p><b><span>Héritage</span></b></p>" +
                "<br><pre><code>&lt;?php\nclass Admin extends Utilisateur {\n    private $niveau;\n    \n    public function __construct($nom, $email, $niveau) {\n        parent::__construct($nom, $email);\n        $this->niveau = $niveau;\n    }\n    \n    public function getNiveau() {\n        return $this->niveau;\n    }\n}\n\n$admin = new Admin('Bob', 'bob@example.com', 3);\necho $admin->afficher();\n?&gt;</code></pre>"
        }
    ],
    react: [
        {
            numero: 1,
            title: "<h1>Chapitre 1 : Introduction à React</h1><hr>",
            content: "React est une bibliothèque JavaScript développée par Facebook pour créer des interfaces utilisateur interactives et performantes. Elle utilise un système de composants réutilisables et un DOM virtuel pour optimiser les performances." +
                "<br><p><b><span>Qu'est-ce que React ?</span></b></p>" +
                "<br><div>React est une bibliothèque open-source créée par Facebook en 2013. Elle permet de construire des interfaces utilisateur complexes en les décomposant en composants plus petits et réutilisables.</div>" +
                "<br><div>Caractéristiques principales :</div>" +
                "<ul><li><span><b>Composants :</b></span> Architecture basée sur des composants réutilisables</li><li><span><b>Virtual DOM :</b></span> Optimisation des performances grâce au DOM virtuel</li><li><span><b>JSX :</b></span> Syntaxe qui permet d'écrire du HTML dans JavaScript</li><li><span><b>Unidirectionnel :</b></span> Flux de données unidirectionnel (one-way data flow)</li><li><span><b>Écosystème :</b></span> Large écosystème d'outils et de bibliothèques</li></ul>" +
                "<br><p><b><span>Pourquoi React ?</span></b></p>" +
                "<br><div>React offre plusieurs avantages :</div>" +
                "<ul><li>Performance optimisée grâce au Virtual DOM</li><li>Composants réutilisables et maintenables</li><li>Écosystème riche et communauté active</li><li>Flexibilité et adaptabilité</li><li>Outils de développement puissants</li></ul>"
        },
        {
            numero: 2,
            title: "<h1>Chapitre 2 : Installation et configuration</h1><hr>",
            content: "Avant de commencer à développer avec React, il faut installer les outils nécessaires et configurer l'environnement de développement." +
                "<br><p><b><span>Prérequis</span></b></p>" +
                "<br><div>Pour développer avec React, vous avez besoin de :</div>" +
                "<ul><li>Node.js (version 14 ou plus récente)</li><li>npm ou yarn (gestionnaire de paquets)</li><li>Un éditeur de code (VS Code recommandé)</li><li>Un navigateur web moderne</li></ul>" +
                "<br><p><b><span>Create React App</span></b></p>" +
                "<br><div>La méthode la plus simple pour créer une nouvelle application React :</div>" +
                "<br><pre><code># Créer une nouvelle application\nnpx create-react-app mon-app\n\n# Naviguer vers le dossier\ncd mon-app\n\n# Démarrer le serveur de développement\nnpm start</code></pre>" +
                "<br><p><b><span>Structure d'un projet React</span></b></p>" +
                "<br><pre><code>mon-app/\n├── public/\n│   ├── index.html\n│   └── favicon.ico\n├── src/\n│   ├── App.js\n│   ├── index.js\n│   └── index.css\n├── package.json\n└── README.md</code></pre>"
        },
        {
            numero: 3,
            title: "<h1>Chapitre 3 : Composants et JSX</h1><hr>",
            content: "Les composants sont les éléments de base de React. Ils permettent de créer des interfaces modulaires et réutilisables. JSX est la syntaxe qui permet d'écrire du HTML dans JavaScript." +
                "<br><p><b><span>Premier composant</span></b></p>" +
                "<br><pre><code>// App.js\nimport React from 'react';\n\nfunction App() {\n  return (\n    <div className=\"App\">\n      <h1>Bonjour React !</h1>\n      <p>Mon premier composant React</p>\n    </div>\n  );\n}\n\nexport default App;</code></pre>" +
                "<br><p><b><span>Composants fonctionnels</span></b></p>" +
                "<br><pre><code>// Composant simple\nfunction Bienvenue({ nom }) {\n  return <h2>Bonjour {nom} !</h2>;\n}\n\n// Utilisation du composant\nfunction App() {\n  return (\n    <div>\n      <Bienvenue nom=\"Alice\" />\n      <Bienvenue nom=\"Bob\" />\n    </div>\n  );\n}</code></pre>" +
                "<br><p><b><span>JSX - JavaScript XML</span></b></p>" +
                "<br><div>JSX permet d'écrire du HTML dans JavaScript :</div>" +
                "<br><pre><code>// JSX\nconst element = <h1>Bonjour le monde !</h1>;\n\n// Équivalent en JavaScript pur\nconst element = React.createElement('h1', null, 'Bonjour le monde !');\n\n// JSX avec expressions\nconst nom = 'Alice';\nconst element = <h1>Bonjour {nom} !</h1>;\n\n// JSX avec attributs\nconst element = <div className=\"container\" id=\"main\">Contenu</div>;</code></pre>"
        },
        {
            numero: 4,
            title: "<h1>Chapitre 4 : Props et State</h1><hr>",
            content: "Les props permettent de passer des données aux composants, tandis que le state permet de gérer les données internes qui peuvent changer au cours du temps." +
                "<br><p><b><span>Props (Propriétés)</span></b></p>" +
                "<br><pre><code>// Composant qui reçoit des props\nfunction Utilisateur({ nom, age, ville }) {\n  return (\n    <div>\n      <h2>{nom}</h2>\n      <p>Âge : {age} ans</p>\n      <p>Ville : {ville}</p>\n    </div>\n  );\n}\n\n// Utilisation avec des props\nfunction App() {\n  return (\n    <Utilisateur \n      nom=\"Alice\" \n      age={25} \n      ville=\"Paris\" \n    />\n  );\n}</code></pre>" +
                "<br><p><b><span>State avec useState</span></b></p>" +
                "<br><pre><code>import React, { useState } from 'react';\n\nfunction Compteur() {\n  // Déclaration du state\n  const [count, setCount] = useState(0);\n\n  return (\n    <div>\n      <p>Compteur : {count}</p>\n      <button onClick={() => setCount(count + 1)}>\n        Incrémenter\n      </button>\n      <button onClick={() => setCount(count - 1)}>\n        Décrémenter\n      </button>\n    </div>\n  );\n}</code></pre>" +
                "<br><p><b><span>State avec objets</span></b></p>" +
                "<br><pre><code>function Formulaire() {\n  const [formData, setFormData] = useState({\n    nom: '',\n    email: '',\n    age: 0\n  });\n\n  const handleChange = (e) => {\n    setFormData({\n      ...formData,\n      [e.target.name]: e.target.value\n    });\n  };\n\n  return (\n    <form>\n      <input\n        name=\"nom\"\n        value={formData.nom}\n        onChange={handleChange}\n        placeholder=\"Nom\"\n      />\n      <input\n        name=\"email\"\n        value={formData.email}\n        onChange={handleChange}\n        placeholder=\"Email\"\n      />\n    </form>\n  );\n}</code></pre>"
        },
        {
            numero: 5,
            title: "<h1>Chapitre 5 : Gestion des événements</h1><hr>",
            content: "React permet de gérer les événements utilisateur de manière simple et efficace. Les événements sont gérés de manière similaire au DOM, mais avec quelques différences importantes." +
                "<br><p><b><span>Événements de base</span></b></p>" +
                "<br><pre><code>function Bouton() {\n  const handleClick = () => {\n    alert('Bouton cliqué !');\n  };\n\n  return (\n    <button onClick={handleClick}>\n      Cliquez-moi\n    </button>\n  );\n}\n\n// Événement avec paramètres\nfunction Liste() {\n  const items = ['Pomme', 'Banane', 'Orange'];\n\n  const handleItemClick = (item) => {\n    console.log('Item sélectionné :', item);\n  };\n\n  return (\n    <ul>\n      {items.map((item, index) => (\n        <li key={index} onClick={() => handleItemClick(item)}>\n          {item}\n        </li>\n      ))}\n    </ul>\n  );\n}</code></pre>" +
                "<br><p><b><span>Événements de formulaire</span></b></p>" +
                "<br><pre><code>function Formulaire() {\n  const [nom, setNom] = useState('');\n  const [email, setEmail] = useState('');\n\n  const handleSubmit = (e) => {\n    e.preventDefault(); // Empêche le rechargement de la page\n    console.log('Nom :', nom);\n    console.log('Email :', email);\n  };\n\n  return (\n    <form onSubmit={handleSubmit}>\n      <input\n        type=\"text\"\n        value={nom}\n        onChange={(e) => setNom(e.target.value)}\n        placeholder=\"Nom\"\n      />\n      <input\n        type=\"email\"\n        value={email}\n        onChange={(e) => setEmail(e.target.value)}\n        placeholder=\"Email\"\n      />\n      <button type=\"submit\">Envoyer</button>\n    </form>\n  );\n}</code></pre>" +
                "<br><p><b><span>Événements personnalisés</span></b></p>" +
                "<br><pre><code>function ComposantParent() {\n  const handleCustomEvent = (data) => {\n    console.log('Événement reçu :', data);\n  };\n\n  return (\n    <ComposantEnfant onCustomEvent={handleCustomEvent} />\n  );\n}\n\nfunction ComposantEnfant({ onCustomEvent }) {\n  const handleClick = () => {\n    onCustomEvent({ message: 'Hello from child!' });\n  };\n\n  return <button onClick={handleClick}>Déclencher événement</button>;\n}</code></pre>"
        }
    ],
    nodejs: [
        {
            numero: 1,
            title: "<h1>Chapitre 1 : Introduction à Node.js</h1><hr>",
            content: "Node.js est un environnement d'exécution JavaScript côté serveur basé sur le moteur V8 de Chrome. Il permet de développer des applications web backend en JavaScript." +
                "<br><p><b><span>Qu'est-ce que Node.js ?</span></b></p>" +
                "<br><div>Node.js permet d'exécuter JavaScript en dehors du navigateur, sur le serveur. Il utilise un modèle d'E/S non bloquant et orienté événements, ce qui le rend efficace pour les applications en temps réel.</div>" +
                "<br><div>Caractéristiques principales :</div>" +
                "<ul><li><span><b>Asynchrone :</b></span> Gestion non bloquante des opérations I/O</li><li><span><b>Événementiel :</b></span> Architecture basée sur les événements</li><li><span><b>Cross-platform :</b></span> Fonctionne sur Windows, macOS, Linux</li><li><span><b>NPM :</b></span> Gestionnaire de paquets intégré</li><li><span><b>Performance :</b></span> Moteur V8 optimisé</li></ul>"
        },
        {
            numero: 2,
            title: "<h1>Chapitre 2 : Installation et premier serveur</h1><hr>",
            content: "Apprenez à installer Node.js et créer votre premier serveur web simple." +
                "<br><p><b><span>Installation de Node.js</span></b></p>" +
                "<br><div>1. Téléchargez Node.js depuis le site officiel</div>" +
                "<br><div>2. Vérifiez l'installation :</div>" +
                "<br><pre><code>node --version\nnpm --version</code></pre>" +
                "<br><p><b><span>Premier serveur HTTP</span></b></p>" +
                "<br><pre><code>// server.js\nconst http = require('http');\n\nconst server = http.createServer((req, res) => {\n  res.writeHead(200, { 'Content-Type': 'text/html' });\n  res.end('<h1>Bonjour Node.js !</h1>');\n});\n\nconst PORT = 3000;\nserver.listen(PORT, () => {\n  console.log(`Serveur démarré sur http://localhost:${PORT}`);\n});</code></pre>" +
                "<br><p><b><span>Démarrer le serveur</span></b></p>" +
                "<br><pre><code>node server.js</code></pre>"
        }
    ],
    sql: [
        {
            numero: 1,
            title: "<h1>Chapitre 1 : Introduction aux bases de données</h1><hr>",
            content: "SQL (Structured Query Language) est un langage standardisé pour gérer les bases de données relationnelles. Il permet de créer, lire, modifier et supprimer des données." +
                "<br><p><b><span>Qu'est-ce qu'une base de données ?</span></b></p>" +
                "<br><div>Une base de données est un système organisé de stockage et de gestion de données. Les bases de données relationnelles organisent les données en tables avec des relations entre elles.</div>" +
                "<br><div>Avantages des bases de données :</div>" +
                "<ul><li>Persistance des données</li><li>Intégrité et cohérence</li><li>Sécurité et contrôle d'accès</li><li>Performance optimisée</li><li>Partage et collaboration</li></ul>" +
                "<br><p><b><span>Types de bases de données</span></b></p>" +
                "<ul><li><span><b>Relationnelles :</b></span> MySQL, PostgreSQL, SQLite</li><li><span><b>NoSQL :</b></span> MongoDB, Redis, Cassandra</li><li><span><b>En mémoire :</b></span> Redis, Memcached</li></ul>"
        },
        {
            numero: 2,
            title: "<h1>Chapitre 2 : Création de tables</h1><hr>",
            content: "Apprenez à créer des tables et définir la structure de vos données." +
                "<br><p><b><span>Syntaxe CREATE TABLE</span></b></p>" +
                "<br><pre><code>CREATE TABLE utilisateurs (\n  id INT PRIMARY KEY AUTO_INCREMENT,\n  nom VARCHAR(50) NOT NULL,\n  email VARCHAR(100) UNIQUE,\n  age INT,\n  date_creation TIMESTAMP DEFAULT CURRENT_TIMESTAMP\n);</code></pre>" +
                "<br><p><b><span>Types de données courants</span></b></p>" +
                "<ul><li><span><b>INT :</b></span> Nombres entiers</li><li><span><b>VARCHAR(n) :</b></span> Chaînes de caractères</li><li><span><b>TEXT :</b></span> Texte long</li><li><span><b>DATE :</b></span> Dates</li><li><span><b>TIMESTAMP :</b></span> Date et heure</li><li><span><b>BOOLEAN :</b></span> Vrai/Faux</li></ul>"
        },
        {
            numero: 3,
            title: "<h1>Chapitre 3 : Requêtes SELECT</h1><hr>",
            content: "Maîtrisez les requêtes SELECT pour récupérer des données de vos tables." +
                "<br><p><b><span>SELECT de base</span></b></p>" +
                "<br><pre><code>-- Sélectionner toutes les colonnes\nSELECT * FROM utilisateurs;\n\n-- Sélectionner des colonnes spécifiques\nSELECT nom, email FROM utilisateurs;\n\n-- Avec alias\nSELECT nom AS 'Nom complet', email AS 'Adresse email' FROM utilisateurs;</code></pre>" +
                "<br><p><b><span>Clause WHERE</span></b></p>" +
                "<br><pre><code>-- Filtrage simple\nSELECT * FROM utilisateurs WHERE age > 18;\n\n-- Filtrage multiple\nSELECT * FROM utilisateurs WHERE age BETWEEN 18 AND 65 AND ville = 'Paris';\n\n-- Recherche de texte\nSELECT * FROM utilisateurs WHERE nom LIKE 'A%'; -- Commence par A\nSELECT * FROM utilisateurs WHERE email LIKE '%@gmail.com'; -- Contient @gmail.com</code></pre>" +
                "<br><p><b><span>Tri et limitation</span></b></p>" +
                "<br><pre><code>-- Trier par nom (croissant)\nSELECT * FROM utilisateurs ORDER BY nom;\n\n-- Trier par âge (décroissant)\nSELECT * FROM utilisateurs ORDER BY age DESC;\n\n-- Limiter le nombre de résultats\nSELECT * FROM utilisateurs LIMIT 10;\n\n-- Pagination\nSELECT * FROM utilisateurs LIMIT 10 OFFSET 20; -- Page 3 (20-29)</code></pre>"
        },
        {
            numero: 4,
            title: "<h1>Chapitre 4 : Insertion et Modification</h1><hr>",
            content: "Apprenez à insérer, modifier et supprimer des données dans vos tables." +
                "<br><p><b><span>INSERT - Insérer des données</span></b></p>" +
                "<br><pre><code>-- Insertion simple\nINSERT INTO utilisateurs (nom, email, age) VALUES ('Alice', 'alice@example.com', 25);\n\n-- Insertion multiple\nINSERT INTO utilisateurs (nom, email, age) VALUES \n  ('Bob', 'bob@example.com', 30),\n  ('Charlie', 'charlie@example.com', 28);\n\n-- Insertion avec valeurs par défaut\nINSERT INTO utilisateurs (nom, email) VALUES ('David', 'david@example.com');</code></pre>" +
                "<br><p><b><span>UPDATE - Modifier des données</span></b></p>" +
                "<br><pre><code>-- Mettre à jour un utilisateur\nUPDATE utilisateurs SET age = 26 WHERE nom = 'Alice';\n\n-- Mettre à jour plusieurs colonnes\nUPDATE utilisateurs SET age = 31, ville = 'Lyon' WHERE email = 'bob@example.com';\n\n-- Mettre à jour plusieurs lignes\nUPDATE utilisateurs SET ville = 'Paris' WHERE ville IS NULL;</code></pre>" +
                "<br><p><b><span>DELETE - Supprimer des données</span></b></p>" +
                "<br><pre><code>-- Supprimer un utilisateur\nDELETE FROM utilisateurs WHERE id = 1;\n\n-- Supprimer plusieurs utilisateurs\nDELETE FROM utilisateurs WHERE age < 18;\n\n-- Supprimer toutes les données (ATTENTION !)\nDELETE FROM utilisateurs;</code></pre>"
        },
        {
            numero: 5,
            title: "<h1>Chapitre 5 : Relations et Jointures</h1><hr>",
            content: "Découvrez comment créer des relations entre tables et utiliser les jointures." +
                "<br><p><b><span>Clés étrangères</span></b></p>" +
                "<br><pre><code>-- Table des commandes avec clé étrangère\nCREATE TABLE commandes (\n  id INT PRIMARY KEY AUTO_INCREMENT,\n  utilisateur_id INT,\n  produit VARCHAR(100),\n  quantite INT,\n  date_commande TIMESTAMP DEFAULT CURRENT_TIMESTAMP,\n  FOREIGN KEY (utilisateur_id) REFERENCES utilisateurs(id)\n);</code></pre>" +
                "<br><p><b><span>Jointures INNER JOIN</span></b></p>" +
                "<br><pre><code>-- Récupérer les commandes avec les informations utilisateur\nSELECT u.nom, u.email, c.produit, c.quantite\nFROM utilisateurs u\nINNER JOIN commandes c ON u.id = c.utilisateur_id;</code></pre>" +
                "<br><p><b><span>Jointures LEFT JOIN</span></b></p>" +
                "<br><pre><code>-- Récupérer tous les utilisateurs, même sans commande\nSELECT u.nom, u.email, c.produit\nFROM utilisateurs u\nLEFT JOIN commandes c ON u.id = c.utilisateur_id;</code></pre>" +
                "<br><p><b><span>Jointures multiples</span></b></p>" +
                "<br><pre><code>-- Exemple avec 3 tables\nSELECT u.nom, p.nom_produit, c.quantite\nFROM utilisateurs u\nINNER JOIN commandes c ON u.id = c.utilisateur_id\nINNER JOIN produits p ON c.produit_id = p.id;</code></pre>"
        },
        {
            numero: 6,
            title: "<h1>Chapitre 6 : Fonctions d'agrégation</h1><hr>",
            content: "Utilisez les fonctions d'agrégation pour analyser vos données." +
                "<br><p><b><span>Fonctions de base</span></b></p>" +
                "<br><pre><code>-- Compter les lignes\nSELECT COUNT(*) FROM utilisateurs;\n\n-- Moyenne d'âge\nSELECT AVG(age) FROM utilisateurs;\n\n-- Âge minimum et maximum\nSELECT MIN(age), MAX(age) FROM utilisateurs;\n\n-- Somme des quantités\nSELECT SUM(quantite) FROM commandes;</code></pre>" +
                "<br><p><b><span>GROUP BY</span></b></p>" +
                "<br><pre><code>-- Nombre d'utilisateurs par ville\nSELECT ville, COUNT(*) as nombre_utilisateurs\nFROM utilisateurs\nGROUP BY ville;\n\n-- Chiffre d'affaires par utilisateur\nSELECT u.nom, SUM(c.quantite * p.prix) as total\nFROM utilisateurs u\nINNER JOIN commandes c ON u.id = c.utilisateur_id\nINNER JOIN produits p ON c.produit_id = p.id\nGROUP BY u.id, u.nom;</code></pre>" +
                "<br><p><b><span>HAVING</span></b></p>" +
                "<br><pre><code>-- Villes avec plus de 5 utilisateurs\nSELECT ville, COUNT(*) as nombre\nFROM utilisateurs\nGROUP BY ville\nHAVING COUNT(*) > 5;</code></pre>"
        },
        {
            numero: 7,
            title: "<h1>Chapitre 7 : Sous-requêtes</h1><hr>",
            content: "Maîtrisez les sous-requêtes pour des requêtes complexes." +
                "<br><p><b><span>Sous-requêtes dans WHERE</span></b></p>" +
                "<br><pre><code>-- Utilisateurs ayant passé des commandes\nSELECT * FROM utilisateurs\nWHERE id IN (\n    SELECT DISTINCT utilisateur_id FROM commandes\n);\n\n-- Utilisateurs plus âgés que la moyenne\nSELECT * FROM utilisateurs\nWHERE age > (\n    SELECT AVG(age) FROM utilisateurs\n);</code></pre>" +
                "<br><p><b><span>Sous-requêtes dans SELECT</span></b></p>" +
                "<br><pre><code>-- Nombre de commandes par utilisateur\nSELECT nom, (\n    SELECT COUNT(*) FROM commandes c \n    WHERE c.utilisateur_id = u.id\n) as nombre_commandes\nFROM utilisateurs u;</code></pre>" +
                "<br><p><b><span>EXISTS et NOT EXISTS</span></b></p>" +
                "<br><pre><code>-- Utilisateurs ayant au moins une commande\nSELECT * FROM utilisateurs u\nWHERE EXISTS (\n    SELECT 1 FROM commandes c \n    WHERE c.utilisateur_id = u.id\n);\n\n-- Utilisateurs sans commande\nSELECT * FROM utilisateurs u\nWHERE NOT EXISTS (\n    SELECT 1 FROM commandes c \n    WHERE c.utilisateur_id = u.id\n);</code></pre>"
        },
        {
            numero: 8,
            title: "<h1>Chapitre 8 : Index et Performance</h1><hr>",
            content: "Optimisez les performances de vos requêtes avec les index." +
                "<br><p><b><span>Création d'index</span></b></p>" +
                "<br><pre><code>-- Index simple\nCREATE INDEX idx_nom ON utilisateurs(nom);\n\n-- Index composite\nCREATE INDEX idx_email_ville ON utilisateurs(email, ville);\n\n-- Index unique\nCREATE UNIQUE INDEX idx_email_unique ON utilisateurs(email);</code></pre>" +
                "<br><p><b><span>Analyse des performances</span></b></p>" +
                "<br><pre><code>-- EXPLAIN pour analyser une requête\nEXPLAIN SELECT * FROM utilisateurs WHERE nom = 'Alice';\n\n-- Vérifier les index existants\nSHOW INDEX FROM utilisateurs;</code></pre>" +
                "<br><p><b><span>Bonnes pratiques</span></b></p>" +
                "<br><ul><li>Créer des index sur les colonnes utilisées dans WHERE</li><li>Éviter trop d'index (ralentissent les INSERT/UPDATE)</li><li>Utiliser des index composites pour les requêtes multi-colonnes</li><li>Analyser régulièrement les performances avec EXPLAIN</li></ul>"
        }
    ]
};

// Rendre la variable globale
window.dataCategorie = dataCategorie;