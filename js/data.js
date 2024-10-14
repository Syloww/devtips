// data.js
export const dataCategorie = {
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
                "<br><h2>Chapitre 1 : Introduction à CSS</h2>" + 
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
            numero: 2, 
            title: "<h2>Chapitre 2 : Sélecteurs et spécificité</h2>", 
            content: "<p><b>Sous-titres du chapitre 2 :</b></p>" +
                "<ul>" +
                    "<li>Types de sélecteurs CSS : sélecteurs de base (éléments, classes, identifiants)</li>" +
                    "<li>Sélecteurs avancés : attributs, pseudo-classes et pseudo-éléments</li>" +
                    "<li>Spécificité CSS : comment fonctionnent les priorités ?</li>" +
                    "<li>Importance des combinaisons de sélecteurs</li>" +
                    "<li>Exemples pratiques : styliser des boutons avec :hover et des liens avec :active</li>" +
                "</ul>" +
                "<br><p><span style='font-weight:bold;'>Important :</span> Les sélecteurs CSS permettent de cibler des éléments spécifiques dans le document HTML pour leur appliquer un style. La spécificité définit quelle règle CSS a priorité sur une autre.</p>" +
                "<br><p><b>Exemple :</b></p>" +
                "<pre><code>" +
                "/* Sélecteurs CSS */\n" +
                "h1 { color: red; }\n" +
                ".class-name { font-weight: bold; }\n" +
                "#id-name { background-color: yellow; }\n" +
                "a:hover { text-decoration: underline; }" +
                "</code></pre>" +
                "<br><p><b>Résultat :</b> Les titres &lt;h1&gt; seront rouges, les éléments avec la classe '.class-name' seront en gras, et les éléments avec l'identifiant '#id-name' auront un fond jaune. Les liens seront soulignés au survol.</p>"
        },
        {
            numero: 3, 
            title: "<h2>Chapitre 3 : Mise en page avec CSS</h2>", 
            content: "<p><b>Sous-titres du chapitre 3 :</b></p>" +
                "<ul>" +
                    "<li>Le modèle de boîte : marges, bordures, padding, et contenu</li>" +
                    "<li>Utilisation des unités de mesure : pixels, pourcentages, em, rem, etc.</li>" +
                    "<li>Positionnement : statique, relatif, absolu, fixe et sticky</li>" +
                    "<li>Flexbox : introduction à la mise en page flexible</li>" +
                    "<li>Grille CSS (Grid) : créer des mises en page complexes</li>" +
                "</ul>" +
                "<br><p><span style='font-weight:bold;'>Important :</span> Comprendre le modèle de boîte est essentiel pour contrôler l'espacement et la mise en page des éléments HTML.</p>" +
                "<br><p><b>Exemple :</b></p>" +
                "<pre><code>" +
                "/* Exemple du modèle de boîte */\n" +
                "div { \n" +
                "  margin: 10px; \n" +
                "  padding: 20px; \n" +
                "  border: 2px solid black; \n" +
                "}" +
                "</code></pre>" +
                "<br><p><b>Résultat :</b> Un espace de 10px sera laissé autour du div (marge), un espace de 20px sera à l'intérieur du div (rembourrage), et une bordure de 2px sera dessinée autour de celui-ci.</p>"
        },
        {
            numero: 4, 
            title: "<h2>Chapitre 4 : Typographie et couleurs</h2>", 
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
            title: "<h2>Chapitre 5 : Animations et transitions</h2>", 
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
        }
    ],    
    js: [
        { numero: 1, title: "Les bases JS", content: "Contenu des bases JS" },
        { numero: 2, title: "Le JS avancé", content: "Contenu du JS avancé" },
        { numero: 3, title: "JS ES6+", content: "Contenu JS ES6+" }
    ],
    php: [
        { numero: 1, title: "<h1>Chapitre 1 :  Les bases du PHP</h1><hr>", content: "PHP est un langage de script côté serveur utilisé principalement pour le développement web, permettant de créer des pages web dynamiques et interactives. Malgré ses apparences, il n'est pas vilain... Promis !" }
    ],
    sql: [
        { numero: 1, title: "<h1>Chapitre 1 :  Les bases du SQL</h1><hr>", content: "PHP est un langage de script côté serveur utilisé principalement pour le développement web, permettant de créer des pages web dynamiques et interactives. Malgré ses apparences, il n'est pas vilain... Promis !" }
    ]
};