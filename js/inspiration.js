// Données des projets d'inspiration
const projectsData = [
    {
        id: 'portfolio-modern',
        title: 'Portfolio Moderne',
        description: 'Un portfolio élégant avec des animations fluides et un design responsive.',
        category: 'websites',
        image: 'https://via.placeholder.com/400x300/6366f1/ffffff?text=Portfolio+Moderne',
        technologies: ['HTML5', 'CSS3', 'JavaScript', 'GSAP'],
        difficulty: 'intermediaire',
        likes: 245,
        views: 1200,
        featured: true
    },
    {
        id: 'ecommerce-app',
        title: 'Application E-commerce',
        description: 'Interface moderne pour une boutique en ligne avec panier et paiement.',
        category: 'apps',
        image: 'https://via.placeholder.com/400x300/10b981/ffffff?text=E-commerce+App',
        technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
        difficulty: 'avance',
        likes: 189,
        views: 980,
        featured: true
    },
    {
        id: 'dashboard-analytics',
        title: 'Dashboard Analytics',
        description: 'Tableau de bord interactif avec graphiques et métriques en temps réel.',
        category: 'designs',
        image: 'https://via.placeholder.com/400x300/f59e0b/ffffff?text=Dashboard+Analytics',
        technologies: ['Vue.js', 'Chart.js', 'D3.js', 'WebSocket'],
        difficulty: 'avance',
        likes: 312,
        views: 1500,
        featured: true
    },
    {
        id: 'weather-widget',
        title: 'Widget Météo',
        description: 'Widget météo élégant avec prévisions et animations climatiques.',
        category: 'tools',
        image: 'https://via.placeholder.com/400x300/3b82f6/ffffff?text=Weather+Widget',
        technologies: ['JavaScript', 'CSS3', 'API REST', 'Canvas'],
        difficulty: 'debutant',
        likes: 156,
        views: 750,
        featured: false
    },
    {
        id: 'chat-app',
        title: 'Application de Chat',
        description: 'Chat en temps réel avec messages, emojis et notifications.',
        category: 'apps',
        image: 'https://via.placeholder.com/400x300/8b5cf6/ffffff?text=Chat+App',
        technologies: ['Socket.io', 'Express', 'React', 'MongoDB'],
        difficulty: 'intermediaire',
        likes: 278,
        views: 1100,
        featured: false
    },
    {
        id: 'landing-page',
        title: 'Landing Page Créative',
        description: 'Page d\'accueil avec scroll parallax et effets visuels impressionnants.',
        category: 'websites',
        image: 'https://via.placeholder.com/400x300/ef4444/ffffff?text=Landing+Page',
        technologies: ['HTML5', 'CSS3', 'JavaScript', 'AOS'],
        difficulty: 'intermediaire',
        likes: 203,
        views: 890,
        featured: false
    },
    {
        id: 'todo-app',
        title: 'Application Todo',
        description: 'Gestionnaire de tâches moderne avec drag & drop et filtres.',
        category: 'apps',
        image: 'https://via.placeholder.com/400x300/06b6d4/ffffff?text=Todo+App',
        technologies: ['React', 'Redux', 'Material-UI', 'LocalStorage'],
        difficulty: 'debutant',
        likes: 134,
        views: 650,
        featured: false
    },
    {
        id: 'portfolio-minimal',
        title: 'Portfolio Minimaliste',
        description: 'Design épuré et élégant pour un portfolio développeur.',
        category: 'designs',
        image: 'https://via.placeholder.com/400x300/64748b/ffffff?text=Portfolio+Minimal',
        technologies: ['HTML5', 'CSS3', 'JavaScript', 'Framer Motion'],
        difficulty: 'debutant',
        likes: 167,
        views: 720,
        featured: false
    },
    {
        id: 'calculator-tool',
        title: 'Calculatrice Avancée',
        description: 'Calculatrice scientifique avec interface moderne et fonctions avancées.',
        category: 'tools',
        image: 'https://via.placeholder.com/400x300/84cc16/ffffff?text=Calculator+Tool',
        technologies: ['JavaScript', 'CSS3', 'Math.js', 'Web Workers'],
        difficulty: 'intermediaire',
        likes: 98,
        views: 420,
        featured: false
    },
    {
        id: 'blog-platform',
        title: 'Plateforme de Blog',
        description: 'CMS moderne pour blog avec éditeur WYSIWYG et gestion des médias.',
        category: 'websites',
        image: 'https://via.placeholder.com/400x300/f97316/ffffff?text=Blog+Platform',
        technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'Prisma'],
        difficulty: 'avance',
        likes: 245,
        views: 1100,
        featured: false
    },
    {
        id: 'music-player',
        title: 'Lecteur de Musique',
        description: 'Player audio moderne avec playlist et visualisations.',
        category: 'apps',
        image: 'https://via.placeholder.com/400x300/ec4899/ffffff?text=Music+Player',
        technologies: ['React', 'Web Audio API', 'CSS3', 'PWA'],
        difficulty: 'intermediaire',
        likes: 189,
        views: 850,
        featured: false
    },
    {
        id: 'ui-kit',
        title: 'Kit de Composants UI',
        description: 'Bibliothèque de composants réutilisables avec documentation.',
        category: 'tools',
        image: 'https://via.placeholder.com/400x300/14b8a6/ffffff?text=UI+Kit',
        technologies: ['React', 'Storybook', 'TypeScript', 'Styled Components'],
        difficulty: 'avance',
        likes: 312,
        views: 1200,
        featured: false
    }
];

// Fonction pour créer une carte de projet
function createProjectCard(project) {
    const difficultyClass = project.difficulty === 'debutant' ? 'difficulty-beginner' : 
                          project.difficulty === 'intermediaire' ? 'difficulty-intermediate' : 'difficulty-advanced';
    
    const difficultyText = project.difficulty === 'debutant' ? 'Débutant' : 
                         project.difficulty === 'intermediaire' ? 'Intermédiaire' : 'Avancé';

    return `
        <div class="project-card" data-category="${project.category}" data-difficulty="${project.difficulty}">
            ${project.featured ? '<div class="project-badge">Populaire</div>' : ''}
            <div class="project-image">
                <img src="${project.image}" alt="${project.title}" loading="lazy">
                <div class="project-overlay">
                    <button class="btn-view" onclick="viewProject('${project.id}')">
                        <i class="fas fa-eye"></i>
                        Voir le projet
                    </button>
                </div>
            </div>
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-technologies">
                    ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
                <div class="project-meta">
                    <div class="project-difficulty">
                        <span class="difficulty-badge ${difficultyClass}">${difficultyText}</span>
                    </div>
                    <div class="project-stats">
                        <span class="stat">
                            <i class="fas fa-heart"></i>
                            ${project.likes}
                        </span>
                        <span class="stat">
                            <i class="fas fa-eye"></i>
                            ${project.views}
                        </span>
                    </div>
                </div>
                <div class="project-actions">
                    <button class="btn btn-primary" onclick="likeProject('${project.id}')">
                        <i class="far fa-heart"></i>
                        J'aime
                    </button>
                    <button class="btn btn-secondary" onclick="shareProject('${project.id}')">
                        <i class="fas fa-share"></i>
                        Partager
                    </button>
                </div>
            </div>
        </div>
    `;
}

// Fonction pour afficher les projets
function displayProjects(projects = projectsData) {
    const projectsGrid = document.getElementById('projectsGrid');
    
    if (projects.length === 0) {
        projectsGrid.innerHTML = `
            <div class="no-results">
                <i class="fas fa-search"></i>
                <h3>Aucun projet trouvé</h3>
                <p>Essayez de modifier vos critères de recherche</p>
            </div>
        `;
    } else {
        projectsGrid.innerHTML = projects.map(createProjectCard).join('');
        
        // S'assurer que les cartes sont visibles immédiatement
        setTimeout(() => {
            document.querySelectorAll('.project-card').forEach(card => {
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

// Fonction pour filtrer les projets
function filterProjects() {
    const activeFilter = document.querySelector('.filter-tab.active').dataset.filter;
    
    let filteredProjects = projectsData.filter(project => {
        if (activeFilter !== 'all' && project.category !== activeFilter) {
            return false;
        }
        return true;
    });

    displayProjects(filteredProjects);
}

// Fonction pour initialiser les filtres
function initializeFilters() {
    document.querySelectorAll('.filter-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            filterProjects();
        });
    });
}

// Fonction pour voir un projet
function viewProject(projectId) {
    const project = projectsData.find(p => p.id === projectId);
    if (project) {
        // Simuler l'ouverture d'un modal ou redirection
        showNotification(`Ouverture du projet: ${project.title}`, 'info');
    }
}

// Fonction pour aimer un projet
function likeProject(projectId) {
    const project = projectsData.find(p => p.id === projectId);
    if (project) {
        project.likes++;
        displayProjects();
        showNotification('Projet ajouté aux favoris !', 'success');
    }
}

// Fonction pour partager un projet
function shareProject(projectId) {
    const project = projectsData.find(p => p.id === projectId);
    if (project) {
        if (navigator.share) {
            navigator.share({
                title: project.title,
                text: project.description,
                url: window.location.href
            });
        } else {
            // Fallback pour les navigateurs qui ne supportent pas l'API Web Share
            const url = window.location.href;
            navigator.clipboard.writeText(url).then(() => {
                showNotification('Lien copié dans le presse-papiers !', 'success');
            });
        }
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

    document.addEventListener('DOMContentLoaded', () => {
        setTimeout(() => {
            document.querySelectorAll('.project-card').forEach(card => {
                observer.observe(card);
            });
        }, 100);
    });
}

// Initialisation
document.addEventListener('DOMContentLoaded', () => {
    displayProjects();
    initializeFilters();
    addAnimations();
});

// Export pour utilisation dans d'autres fichiers
window.InspirationManager = {
    displayProjects,
    filterProjects,
    projectsData
};
