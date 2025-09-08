// Script des cours - Version corrigée
console.log('Loading courses script...');

// Fonction pour créer les données des cours à partir de dataCategorie
function createCoursesFromData() {
    if (!window.dataCategorie) {
        console.error('dataCategorie not found');
        return [];
    }

    console.log('dataCategorie found:', window.dataCategorie);
    const courses = [];
    
    // HTML
    if (window.dataCategorie.html) {
        courses.push({
            id: 'html',
            title: 'HTML5 & CSS3',
            description: 'Maîtrisez les bases du développement web avec HTML5 et CSS3.',
            category: 'frontend',
            level: 'debutant',
            duration: 15,
            durationType: 'heures',
            icon: 'fab fa-html5',
            color: '#e34c26',
            chapters: window.dataCategorie.html.length,
            students: 2500,
            rating: 4.8,
            link: 'detailCours.html?langage=html',
            tags: ['HTML', 'Web', 'Structure', 'Débutant'],
            featured: true
        });
    }

    // CSS
    if (window.dataCategorie.css) {
        courses.push({
            id: 'css',
            title: 'CSS3 Avancé',
            description: 'Découvrez les fonctionnalités avancées de CSS3.',
            category: 'frontend',
            level: 'intermediaire',
            duration: 12,
            durationType: 'heures',
            icon: 'fab fa-css3-alt',
            color: '#264de4',
            chapters: window.dataCategorie.css.length,
            students: 1800,
            rating: 4.7,
            link: 'detailCours.html?langage=css',
            tags: ['CSS', 'Responsive', 'Flexbox', 'Grid'],
            featured: true
        });
    }

    // JavaScript
    if (window.dataCategorie.javascript) {
        courses.push({
            id: 'javascript',
            title: 'JavaScript Moderne',
            description: 'Apprenez JavaScript ES6+ et les concepts avancés.',
            category: 'frontend',
            level: 'debutant',
            duration: 20,
            durationType: 'heures',
            icon: 'fab fa-js',
            color: '#f7df1e',
            chapters: window.dataCategorie.javascript.length,
            students: 3000,
            rating: 4.9,
            link: 'detailCours.html?langage=javascript',
            tags: ['JavaScript', 'ES6', 'Frontend', 'Interactif'],
            featured: true
        });
    }

    // React
    if (window.dataCategorie.react) {
        courses.push({
            id: 'react',
            title: 'React & Redux',
            description: 'Développez des applications web modernes avec React.',
            category: 'frontend',
            level: 'avance',
            duration: 30,
            durationType: 'heures',
            icon: 'fab fa-react',
            color: '#61dafb',
            chapters: window.dataCategorie.react.length,
            students: 1800,
            rating: 4.7,
            link: 'detailCours.html?langage=react',
            tags: ['React', 'Redux', 'Hooks', 'Frontend'],
            featured: true
        });
    }

    // Node.js
    if (window.dataCategorie.nodejs) {
        courses.push({
            id: 'nodejs',
            title: 'Node.js & Express',
            description: 'Créez des APIs robustes avec Node.js et Express.',
            category: 'backend',
            level: 'intermediaire',
            duration: 25,
            durationType: 'heures',
            icon: 'fab fa-node-js',
            color: '#68a063',
            chapters: window.dataCategorie.nodejs.length,
            students: 1500,
            rating: 4.6,
            link: 'detailCours.html?langage=nodejs',
            tags: ['Node.js', 'Express', 'Backend', 'API'],
            featured: true
        });
    }

    // PHP
    if (window.dataCategorie.php) {
        courses.push({
            id: 'php',
            title: 'PHP & Laravel',
            description: 'Développez des applications web avec PHP et Laravel.',
            category: 'backend',
            level: 'intermediaire',
            duration: 20,
            durationType: 'heures',
            icon: 'fab fa-php',
            color: '#777bb4',
            chapters: window.dataCategorie.php.length,
            students: 1000,
            rating: 4.5,
            link: 'detailCours.html?langage=php',
            tags: ['PHP', 'Laravel', 'Backend', 'Database'],
            featured: false
        });
    }

    // SQL
    if (window.dataCategorie.sql) {
        courses.push({
            id: 'sql',
            title: 'SQL & MySQL',
            description: 'Maîtrisez SQL et MySQL pour les bases de données.',
            category: 'database',
            level: 'debutant',
            duration: 10,
            durationType: 'heures',
            icon: 'fas fa-database',
            color: '#00758f',
            chapters: window.dataCategorie.sql.length,
            students: 1100,
            rating: 4.6,
            link: 'detailCours.html?langage=sql',
            tags: ['SQL', 'Database', 'Requêtes', 'Gestion de données'],
            featured: false
        });
    }

    return courses;
}

// Données des cours
const courses = createCoursesFromData();
console.log('Courses created:', courses);

// Fonction pour créer une carte de cours
function createCourseCard(course) {
    const levelClass = course.level === 'debutant' ? 'level-beginner' : 
                      course.level === 'intermediaire' ? 'level-intermediate' : 'level-advanced';
    
    const levelText = course.level === 'debutant' ? 'Débutant' : 
                     course.level === 'intermediaire' ? 'Intermédiaire' : 'Avancé';

    return `
        <div class="course-card" data-category="${course.category}" data-level="${course.level}">
            ${course.featured ? '<div class="course-badge">Populaire</div>' : ''}
            <div class="course-header">
                <div class="course-icon" style="background-color: ${course.color}">
                    <i class="${course.icon}"></i>
                </div>
                <div class="course-meta">
                    <span class="course-level ${levelClass}">${levelText}</span>
                    <span class="course-duration">
                        <i class="fas fa-clock"></i>
                        ${course.duration} ${course.durationType}
                    </span>
                </div>
            </div>
            <div class="course-content">
                <h3 class="course-title">${course.title}</h3>
                <p class="course-description">${course.description}</p>
                <div class="course-stats">
                    <div class="stat">
                        <i class="fas fa-book"></i>
                        <span>${course.chapters} chapitres</span>
                    </div>
                    <div class="stat">
                        <i class="fas fa-users"></i>
                        <span>${course.students.toLocaleString()} étudiants</span>
                    </div>
                    <div class="stat">
                        <i class="fas fa-star"></i>
                        <span>${course.rating}/5</span>
                    </div>
                </div>
                <div class="course-tags">
                    ${course.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
                <a href="${course.link}" class="course-link">
                    <span>Commencer le cours</span>
                    <i class="fas fa-arrow-right"></i>
                </a>
            </div>
        </div>
    `;
}

// Fonction pour afficher les cours
function displayCourses(coursesToShow = courses) {
    const coursesGrid = document.getElementById('coursesGrid');
    const noResults = document.getElementById('noResults');
    
    if (!coursesGrid) {
        console.error('coursesGrid not found');
        return;
    }
    
    if (coursesToShow.length === 0) {
        coursesGrid.style.display = 'none';
        if (noResults) noResults.style.display = 'block';
    } else {
        coursesGrid.style.display = 'grid';
        if (noResults) noResults.style.display = 'none';
        coursesGrid.innerHTML = coursesToShow.map(createCourseCard).join('');
        
        // S'assurer que les cartes sont visibles immédiatement
        setTimeout(() => {
            document.querySelectorAll('.course-card').forEach(card => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            });
        }, 10);
        
        // Réinitialiser les animations pour les nouvelles cartes
        setTimeout(() => {
            addAnimations();
        }, 50);
    }
}

// Fonction pour filtrer les cours
function filterCourses() {
    const activeFilter = document.querySelector('.filter-tab.active')?.dataset.filter || 'all';
    const levelFilter = document.getElementById('levelFilter')?.value || 'all';
    const searchTerm = document.getElementById('searchInput')?.value.toLowerCase() || '';

    let filteredCourses = courses.filter(course => {
        // Filtre par catégorie
        if (activeFilter !== 'all' && course.category !== activeFilter) {
            return false;
        }

        // Filtre par niveau
        if (levelFilter !== 'all' && course.level !== levelFilter) {
            return false;
        }

        // Filtre par recherche
        if (searchTerm) {
            const searchableText = `${course.title} ${course.description} ${course.tags.join(' ')}`.toLowerCase();
            if (!searchableText.includes(searchTerm)) return false;
        }

        return true;
    });

    displayCourses(filteredCourses);
}

// Fonction pour initialiser les filtres
function initializeFilters() {
    // Filtres par onglets
    document.querySelectorAll('.filter-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            filterCourses();
        });
    });

    // Filtre par niveau
    const levelFilter = document.getElementById('levelFilter');
    if (levelFilter) {
        levelFilter.addEventListener('change', filterCourses);
    }

    // Recherche
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', filterCourses);
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                filterCourses();
            }
        });
    }
}

// Fonction pour ajouter des animations
function addAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Observer les cartes de cours
    document.querySelectorAll('.course-card').forEach(card => {
        observer.observe(card);
    });
}

// Initialisation
document.addEventListener('DOMContentLoaded', () => {
    console.log('Initializing courses...');
    
    setTimeout(() => {
        try {
            displayCourses();
            initializeFilters();
            addAnimations(); // Ajouter les animations
            console.log('Courses initialized successfully');
        } catch (error) {
            console.error('Error initializing courses:', error);
        }
    }, 100);
});

// Export global
window.CoursesManager = {
    displayCourses,
    filterCourses,
    courses
};