// Récupérer le fil d'Ariane
function createBreadcrumb() {
    const breadcrumb = document.getElementById("breadcrumb");
    const currentPage = document.title; // Utilise le titre de la page actuelle
    const previousPage = document.referrer ? document.referrer.split("/").pop() : "Page inconnue"; // Récupère le nom de la page précédente

    // Créer les éléments du fil d'Ariane
    breadcrumb.innerHTML = `
        <a href="${document.referrer}">Page Precedente</a>
        <span>></span>
        <span>${currentPage}</span>
    `;
}

// Appeler la fonction pour générer le fil d'Ariane
createBreadcrumb();