document.getElementById('searchInput').addEventListener('input', function() {
    let input = document.getElementById('searchInput').value.toLowerCase();
    let courses = document.querySelectorAll('#courses-container div');
    let hasResults = false;  // Variable pour vérifier s'il y a des résultats

    courses.forEach(function(course) {
        let text = course.querySelector('h3').textContent.toLowerCase();
        if (text.includes(input)) {
            course.style.display = 'block';  // Afficher l'élément s'il correspond
            hasResults = true;               // Un résultat a été trouvé
        } else {
            course.style.display = 'none';   // Masquer les éléments qui ne correspondent pas
        }
    });

    // Si aucun résultat n'est trouvé, afficher le message d'erreur
    if (hasResults) {
        document.getElementById('error').style.display = 'none';  // Cacher le message d'erreur
    } else {
        document.getElementById('error').style.display = 'block';  // Afficher le message d'erreur
    }
});
