// Données des librairies et outils
const librariesData = [
    {
        id: 'bootstrap',
        name: 'Bootstrap',
        description: 'Framework CSS populaire pour créer des interfaces responsives rapidement.',
        category: 'css',
        type: 'framework',
        version: '5.3.2',
        stars: 165000,
        downloads: '2.5M',
        lastUpdated: '2024-01-15',
        website: 'https://getbootstrap.com',
        github: 'https://github.com/twbs/bootstrap',
        documentation: 'https://getbootstrap.com/docs',
        tags: ['CSS', 'Responsive', 'Components', 'Grid'],
        difficulty: 'debutant',
        featured: true
    },
    {
        id: 'tailwindcss',
        name: 'Tailwind CSS',
        description: 'Framework CSS utility-first pour construire des designs personnalisés rapidement.',
        category: 'css',
        type: 'framework',
        version: '3.3.6',
        stars: 75000,
        downloads: '1.8M',
        lastUpdated: '2024-01-20',
        website: 'https://tailwindcss.com',
        github: 'https://github.com/tailwindlabs/tailwindcss',
        documentation: 'https://tailwindcss.com/docs',
        tags: ['CSS', 'Utility-first', 'Customizable', 'Modern'],
        difficulty: 'intermediaire',
        featured: true
    },
    {
        id: 'react',
        name: 'React',
        description: 'Bibliothèque JavaScript pour construire des interfaces utilisateur avec des composants.',
        category: 'framework',
        type: 'framework',
        version: '18.2.0',
        stars: 220000,
        downloads: '15M',
        lastUpdated: '2024-01-25',
        website: 'https://reactjs.org',
        github: 'https://github.com/facebook/react',
        documentation: 'https://reactjs.org/docs',
        tags: ['JavaScript', 'Components', 'Virtual DOM', 'Hooks'],
        difficulty: 'intermediaire',
        featured: true
    },
    {
        id: 'vue',
        name: 'Vue.js',
        description: 'Framework JavaScript progressif pour construire des interfaces utilisateur.',
        category: 'framework',
        type: 'framework',
        version: '3.3.8',
        stars: 200000,
        downloads: '8M',
        lastUpdated: '2024-01-22',
        website: 'https://vuejs.org',
        github: 'https://github.com/vuejs/vue',
        documentation: 'https://vuejs.org/guide',
        tags: ['JavaScript', 'Progressive', 'Reactive', 'Composition API'],
        difficulty: 'intermediaire',
        featured: true
    },
    {
        id: 'angular',
        name: 'Angular',
        description: 'Framework TypeScript pour construire des applications web et mobiles.',
        category: 'framework',
        type: 'framework',
        version: '17.2.0',
        stars: 90000,
        downloads: '3M',
        lastUpdated: '2024-01-18',
        website: 'https://angular.io',
        github: 'https://github.com/angular/angular',
        documentation: 'https://angular.io/docs',
        tags: ['TypeScript', 'Full-stack', 'Dependency Injection', 'RxJS'],
        difficulty: 'avance',
        featured: true
    },
    {
        id: 'jquery',
        name: 'jQuery',
        description: 'Bibliothèque JavaScript rapide et concise pour la manipulation du DOM.',
        category: 'javascript',
        type: 'library',
        version: '3.7.1',
        stars: 58000,
        downloads: '20M',
        lastUpdated: '2024-01-10',
        website: 'https://jquery.com',
        github: 'https://github.com/jquery/jquery',
        documentation: 'https://api.jquery.com',
        tags: ['JavaScript', 'DOM', 'AJAX', 'Animation'],
        difficulty: 'debutant',
        featured: false
    },
    {
        id: 'lodash',
        name: 'Lodash',
        description: 'Bibliothèque JavaScript utilitaire moderne avec des fonctions de programmation fonctionnelle.',
        category: 'javascript',
        type: 'library',
        version: '4.17.21',
        stars: 60000,
        downloads: '12M',
        lastUpdated: '2024-01-12',
        website: 'https://lodash.com',
        github: 'https://github.com/lodash/lodash',
        documentation: 'https://lodash.com/docs',
        tags: ['JavaScript', 'Utilities', 'Functional', 'Performance'],
        difficulty: 'intermediaire',
        featured: false
    },
    {
        id: 'axios',
        name: 'Axios',
        description: 'Client HTTP basé sur les promesses pour le navigateur et Node.js.',
        category: 'javascript',
        type: 'library',
        version: '1.6.2',
        stars: 100000,
        downloads: '25M',
        lastUpdated: '2024-01-08',
        website: 'https://axios-http.com',
        github: 'https://github.com/axios/axios',
        documentation: 'https://axios-http.com/docs',
        tags: ['HTTP', 'Promise', 'REST', 'API'],
        difficulty: 'debutant',
        featured: false
    },
    {
        id: 'sass',
        name: 'Sass',
        description: 'Préprocesseur CSS avec des variables, mixins et fonctions.',
        category: 'css',
        type: 'tool',
        version: '1.69.5',
        stars: 15000,
        downloads: '5M',
        lastUpdated: '2024-01-14',
        website: 'https://sass-lang.com',
        github: 'https://github.com/sass/sass',
        documentation: 'https://sass-lang.com/documentation',
        tags: ['CSS', 'Preprocessor', 'Variables', 'Mixins'],
        difficulty: 'intermediaire',
        featured: false
    },
    {
        id: 'webpack',
        name: 'Webpack',
        description: 'Module bundler moderne pour les applications JavaScript.',
        category: 'tools',
        type: 'tool',
        version: '5.89.0',
        stars: 65000,
        downloads: '8M',
        lastUpdated: '2024-01-16',
        website: 'https://webpack.js.org',
        github: 'https://github.com/webpack/webpack',
        documentation: 'https://webpack.js.org/concepts',
        tags: ['Bundler', 'JavaScript', 'Modules', 'Build Tool'],
        difficulty: 'avance',
        featured: false
    },
    {
        id: 'vite',
        name: 'Vite',
        description: 'Outil de build rapide et moderne pour les applications web.',
        category: 'tools',
        type: 'tool',
        version: '5.0.0',
        stars: 60000,
        downloads: '6M',
        lastUpdated: '2024-01-20',
        website: 'https://vitejs.dev',
        github: 'https://github.com/vitejs/vite',
        documentation: 'https://vitejs.dev/guide',
        tags: ['Build Tool', 'Fast', 'Modern', 'ES Modules'],
        difficulty: 'intermediaire',
        featured: false
    },
    {
        id: 'chartjs',
        name: 'Chart.js',
        description: 'Bibliothèque JavaScript pour créer des graphiques interactifs et responsives.',
        category: 'javascript',
        type: 'library',
        version: '4.4.0',
        stars: 65000,
        downloads: '3M',
        lastUpdated: '2024-01-19',
        website: 'https://www.chartjs.org',
        github: 'https://github.com/chartjs/Chart.js',
        documentation: 'https://www.chartjs.org/docs',
        tags: ['Charts', 'Data Visualization', 'Canvas', 'Responsive'],
        difficulty: 'debutant',
        featured: false
    },
    {
        id: 'threejs',
        name: 'Three.js',
        description: 'Bibliothèque JavaScript 3D pour créer des expériences visuelles impressionnantes.',
        category: 'javascript',
        type: 'library',
        version: '0.158.0',
        stars: 95000,
        downloads: '2M',
        lastUpdated: '2024-01-17',
        website: 'https://threejs.org',
        github: 'https://github.com/mrdoob/three.js',
        documentation: 'https://threejs.org/docs',
        tags: ['3D', 'WebGL', 'Graphics', 'Animation'],
        difficulty: 'avance',
        featured: false
    },
    {
        id: 'gsap',
        name: 'GSAP',
        description: 'Bibliothèque d\'animation JavaScript haute performance pour le web.',
        category: 'javascript',
        type: 'library',
        version: '3.12.2',
        stars: 18000,
        downloads: '4M',
        lastUpdated: '2024-01-13',
        website: 'https://greensock.com/gsap',
        github: 'https://github.com/greensock/GSAP',
        documentation: 'https://greensock.com/docs',
        tags: ['Animation', 'Performance', 'Timeline', 'Easing'],
        difficulty: 'intermediaire',
        featured: false
    },
    {
        id: 'framer-motion',
        name: 'Framer Motion',
        description: 'Bibliothèque d\'animation pour React avec des gestes et des transitions fluides.',
        category: 'framework',
        type: 'library',
        version: '10.16.5',
        stars: 35000,
        downloads: '1.5M',
        lastUpdated: '2024-01-21',
        website: 'https://www.framer.com/motion',
        github: 'https://github.com/framer/motion',
        documentation: 'https://www.framer.com/motion/introduction',
        tags: ['React', 'Animation', 'Gestures', 'Transitions'],
        difficulty: 'intermediaire',
        featured: false
    },
    {
        id: 'nextjs',
        name: 'Next.js',
        description: 'Framework React pour la production avec le rendu côté serveur et le générateur de sites statiques.',
        category: 'framework',
        type: 'framework',
        version: '14.0.4',
        stars: 110000,
        downloads: '5M',
        lastUpdated: '2024-01-23',
        website: 'https://nextjs.org',
        github: 'https://github.com/vercel/next.js',
        documentation: 'https://nextjs.org/docs',
        tags: ['React', 'SSR', 'SSG', 'Full-stack'],
        difficulty: 'intermediaire',
        featured: true
    },
    {
        id: 'express',
        name: 'Express.js',
        description: 'Framework web minimaliste et flexible pour Node.js.',
        category: 'framework',
        type: 'framework',
        version: '4.18.2',
        stars: 65000,
        downloads: '15M',
        lastUpdated: '2024-01-11',
        website: 'https://expressjs.com',
        github: 'https://github.com/expressjs/express',
        documentation: 'https://expressjs.com/en/4x/api.html',
        tags: ['Node.js', 'Server', 'API', 'Middleware'],
        difficulty: 'intermediaire',
        featured: false
    },
    {
        id: 'mongodb',
        name: 'MongoDB',
        description: 'Base de données NoSQL orientée documents pour les applications modernes.',
        category: 'tools',
        type: 'tool',
        version: '7.0.4',
        stars: 25000,
        downloads: '2M',
        lastUpdated: '2024-01-09',
        website: 'https://www.mongodb.com',
        github: 'https://github.com/mongodb/mongo',
        documentation: 'https://docs.mongodb.com',
        tags: ['Database', 'NoSQL', 'Document', 'Scalable'],
        difficulty: 'intermediaire',
        featured: false
    },
    {
        id: 'firebase',
        name: 'Firebase',
        description: 'Plateforme de développement d\'applications avec des services backend et des outils d\'analyse.',
        category: 'tools',
        type: 'tool',
        version: '10.7.1',
        stars: 40000,
        downloads: '8M',
        lastUpdated: '2024-01-24',
        website: 'https://firebase.google.com',
        github: 'https://github.com/firebase/firebase-js-sdk',
        documentation: 'https://firebase.google.com/docs',
        tags: ['Backend', 'Database', 'Authentication', 'Hosting'],
        difficulty: 'debutant',
        featured: false
    },
    {
        id: 'typescript',
        name: 'TypeScript',
        description: 'Langage de programmation JavaScript avec typage statique optionnel.',
        category: 'tools',
        type: 'tool',
        version: '5.3.3',
        stars: 95000,
        downloads: '30M',
        lastUpdated: '2024-01-26',
        website: 'https://www.typescriptlang.org',
        github: 'https://github.com/microsoft/TypeScript',
        documentation: 'https://www.typescriptlang.org/docs',
        tags: ['JavaScript', 'Types', 'Compile', 'IDE Support'],
        difficulty: 'intermediaire',
        featured: true
    }
];

// Fonction pour créer une carte de librairie
function createLibraryCard(library) {
    const difficultyClass = library.difficulty === 'debutant' ? 'difficulty-beginner' : 
                          library.difficulty === 'intermediaire' ? 'difficulty-intermediate' : 'difficulty-advanced';
    
    const difficultyText = library.difficulty === 'debutant' ? 'Débutant' : 
                         library.difficulty === 'intermediaire' ? 'Intermédiaire' : 'Avancé';

    const categoryIcon = {
        'css': 'fab fa-css3-alt',
        'javascript': 'fab fa-js',
        'framework': 'fas fa-layer-group',
        'tools': 'fas fa-tools'
    }[library.category] || 'fas fa-code';

    return `
        <div class="library-card" data-category="${library.category}" data-type="${library.type}" data-difficulty="${library.difficulty}">
            ${library.featured ? '<div class="library-badge">Populaire</div>' : ''}
            <div class="library-header">
                <div class="library-icon">
                    <i class="${categoryIcon}"></i>
                </div>
                <div class="library-info">
                    <h3 class="library-name">${library.name}</h3>
                    <span class="library-version">v${library.version}</span>
                </div>
            </div>
            <div class="library-content">
                <p class="library-description">${library.description}</p>
                <div class="library-tags">
                    ${library.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
                <div class="library-meta">
                    <div class="library-stats">
                        <div class="stat">
                            <i class="fas fa-star"></i>
                            <span>${library.stars.toLocaleString()}</span>
                        </div>
                        <div class="stat">
                            <i class="fas fa-download"></i>
                            <span>${library.downloads}</span>
                        </div>
                        <div class="stat">
                            <i class="fas fa-calendar"></i>
                            <span>${new Date(library.lastUpdated).toLocaleDateString('fr-FR')}</span>
                        </div>
                    </div>
                    <div class="library-difficulty">
                        <span class="difficulty-badge ${difficultyClass}">${difficultyText}</span>
                    </div>
                </div>
                <div class="library-actions">
                    <a href="${library.website}" target="_blank" class="btn btn-primary">
                        <i class="fas fa-external-link-alt"></i>
                        Site web
                    </a>
                    <a href="${library.github}" target="_blank" class="btn btn-secondary">
                        <i class="fab fa-github"></i>
                        GitHub
                    </a>
                    <a href="${library.documentation}" target="_blank" class="btn btn-outline">
                        <i class="fas fa-book"></i>
                        Docs
                    </a>
                </div>
            </div>
        </div>
    `;
}

// Fonction pour afficher les librairies
function displayLibraries(libraries = librariesData) {
    const librariesGrid = document.getElementById('librariesGrid');
    
    if (libraries.length === 0) {
        librariesGrid.innerHTML = `
            <div class="no-results">
                <i class="fas fa-exclamation-circle"></i>
                <h3>Aucune librairie trouvée</h3>
                <p>Essayez d'ajuster vos filtres ou votre recherche.</p>
            </div>
        `;
    } else {
        librariesGrid.innerHTML = libraries.map(createLibraryCard).join('');
        
        // S'assurer que les cartes sont visibles immédiatement
        setTimeout(() => {
            document.querySelectorAll('.library-card').forEach(card => {
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

// Fonction pour filtrer les librairies
function filterLibraries() {
    const activeCategory = document.querySelector('.filter-tab.active').dataset.category;
    const typeFilter = document.getElementById('typeFilter').value;
    const searchTerm = document.getElementById('librarySearchInput').value.toLowerCase();
    
    let filteredLibraries = librariesData.filter(library => {
        // Filtre par catégorie
        if (activeCategory !== 'all' && library.category !== activeCategory) {
            return false;
        }
        
        // Filtre par type
        if (typeFilter !== 'all' && library.type !== typeFilter) {
            return false;
        }
        
        // Filtre par recherche
        if (searchTerm && !library.name.toLowerCase().includes(searchTerm) && 
            !library.description.toLowerCase().includes(searchTerm) &&
            !library.tags.some(tag => tag.toLowerCase().includes(searchTerm))) {
            return false;
        }
        
        return true;
    });

    // Trier les résultats
    const sortFilter = document.getElementById('sortFilter').value;
    switch (sortFilter) {
        case 'name-asc':
            filteredLibraries.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case 'name-desc':
            filteredLibraries.sort((a, b) => b.name.localeCompare(a.name));
            break;
        case 'stars-desc':
            filteredLibraries.sort((a, b) => b.stars - a.stars);
            break;
        case 'updated-desc':
            filteredLibraries.sort((a, b) => new Date(b.lastUpdated) - new Date(a.lastUpdated));
            break;
    }

    displayLibraries(filteredLibraries);
}

// Fonction pour initialiser les filtres
function initializeFilters() {
    // Filtres par catégorie
    document.querySelectorAll('.filter-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            filterLibraries();
        });
    });

    // Filtre par type
    document.getElementById('typeFilter').addEventListener('change', filterLibraries);
    
    // Filtre par tri
    document.getElementById('sortFilter').addEventListener('change', filterLibraries);
    
    // Recherche
    document.getElementById('librarySearchInput').addEventListener('input', filterLibraries);
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

    document.addEventListener('DOMContentLoaded', () => {
        setTimeout(() => {
            document.querySelectorAll('.library-card').forEach(card => {
                observer.observe(card);
            });
        }, 100);
    });
}

// Initialisation
document.addEventListener('DOMContentLoaded', () => {
    displayLibraries();
    initializeFilters();
    addAnimations();
});

// Export pour utilisation dans d'autres fichiers
window.LibrariesManager = {
    displayLibraries,
    filterLibraries,
    librariesData
};
