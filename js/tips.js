const textes = [
    "Besoin d'inspiration ?",
    "A la recherche d'une librairie js pour vos sites ?",
];

// Fonction pour choisir un texte aléatoire
function choisirTexteAleatoire() {
    const index = Math.floor(Math.random() * textes.length);
    return textes[index];
}

// Fonction pour changer le texte toutes les secondes
function changerTexte() {
    const element = document.getElementById('texte');
    element.textContent = choisirTexteAleatoire();
}

// Changer le texte immédiatement, puis toutes les secondes
changerTexte(); // Afficher un texte immédiatement pour éviter de voir "Chargement..."
setInterval(changerTexte, 2500); // Appeler changerTexte toutes les 1000 millisecondes (1 seconde)