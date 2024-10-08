document.getElementById('searchInput').addEventListener('input', function() {
    let input = document.getElementById('searchInput').value.toLowerCase();
    let courses = document.querySelectorAll('#courses-container div');

    courses.forEach(function(course) {
        let text = course.querySelector('h3').textContent.toLowerCase();
        if (text.includes(input)) {
            course.style.display = 'block';  // Afficher l'élément s'il correspond
        } else {
            course.style.display = 'none';   // Masquer les éléments qui ne correspondent pas
        }
    });
});