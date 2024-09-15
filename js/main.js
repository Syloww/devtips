// Importation des données depuis data.js
import data from './data.js';

// Sélection de l'élément où afficher les cours
const coursesContainer = document.getElementById('courses-container');

// Fonction pour créer et afficher chaque cours
function displayCourses(courses) {
    courses.forEach(course => {
        // Crée un élément div pour chaque cours
        const courseElement = document.createElement('div');
        courseElement.className = 'course';
        
        // Ajoute le titre du cours
        const titleElement = document.createElement('h2');
        titleElement.innerText = course.title;
        courseElement.appendChild(titleElement);
        
        // Ajoute le contenu du cours en HTML
        const contentElement = document.createElement('div');
        contentElement.innerHTML = course.content;
        courseElement.appendChild(contentElement);
        
        // Ajoute le cours au conteneur
        coursesContainer.appendChild(courseElement);
    });
}

// Appel de la fonction pour afficher les cours
displayCourses(data);
