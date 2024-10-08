// Importation des données des catégories
import dataCategorie from './data_categorie.js';

// Fonction pour récupérer la valeur d'un paramètre dans l'URL
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Fonction pour afficher les cours en fonction de la catégorie sélectionnée
function displayCategoryCourses(category) {
    // Cherche la catégorie par l'ID ou par son nom
    const categoryData = dataCategorie.find(cat => cat.title.toLowerCase().includes(category.toLowerCase()));

    if (categoryData) {
        const coursesContainer = document.getElementById('courses-container');
        coursesContainer.innerHTML = ''; // Nettoyer le conteneur avant d'afficher

        // Afficher le titre de la catégorie
        const titleElement = document.createElement('h1');
        titleElement.innerText = categoryData.title;

        // Remplacement du <h2><span> dans la div avec la classe "titre"
        const titleContainer = document.querySelector('.titre h2 span');
        if (titleContainer) {
            titleContainer.innerText = categoryData.title;
        } else {
            console.error("L'élément de titre n'a pas été trouvé");
        }

        // Parcours et affiche les contenus de la catégorie
        Object.keys(categoryData).forEach(key => {
            if (key.startsWith('content')) {
                const contentElement = document.createElement('div');
                contentElement.innerHTML = categoryData[key];
                coursesContainer.appendChild(contentElement);
            }
        });
    } else {
        console.error('Catégorie non trouvée');
    }
}

// Récupération des paramètres 'categorie' et 'cours' dans l'URL
const selectedCategory = getQueryParam('categorie');

// Affichage des cours pour la catégorie sélectionnée
if (selectedCategory) {
    displayCategoryCourses(selectedCategory);
} else {
    console.error("Aucune catégorie sélectionnée dans l'URL.");
}
