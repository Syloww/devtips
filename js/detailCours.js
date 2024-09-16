// detailCours.js
import { dataCategorie } from './data.js';

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const langage = urlParams.get('langage'); // html, css, js
    const numero = parseInt(urlParams.get('numero'), 10);

    if (langage && numero && dataCategorie[langage]) {
        const cours = dataCategorie[langage].find(c => c.numero === numero);

        if (cours) {
            document.getElementById('courseTitle').innerHTML = cours.title;
            document.getElementById('courseContent').innerHTML = cours.content;
        } else {
            document.getElementById('courseTitle').innerText = 'Cours non trouvé';
            document.getElementById('courseContent').innerText = '';
        }
    } else {
        document.getElementById('courseTitle').innerText = 'Catégorie ou numéro non valide';
        document.getElementById('courseContent').innerText = '';
    }
});
