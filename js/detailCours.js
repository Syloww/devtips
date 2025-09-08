// Les données des cours sont maintenant disponibles globalement via window.dataCategorie

// Configuration des cours
const courseConfig = {
    html: {
        title: 'HTML5 & CSS3',
        description: 'Maîtrisez les bases du développement web avec HTML5 et CSS3.',
        duration: 15,
        chapters: 14,
        students: 2500,
        rating: 4.8,
        icon: 'fab fa-html5',
        color: '#e34f26'
    },
    css: {
        title: 'CSS3 Avancé',
        description: 'Découvrez les fonctionnalités avancées de CSS3.',
        duration: 12,
        chapters: 10,
        students: 1800,
        rating: 4.7,
        icon: 'fab fa-css3-alt',
        color: '#1572b6'
    },
    javascript: {
        title: 'JavaScript Moderne',
        description: 'Apprenez JavaScript ES6+ et les concepts avancés.',
        duration: 25,
        chapters: 20,
        students: 3200,
        rating: 4.9,
        icon: 'fab fa-js-square',
        color: '#f7df1e'
    },
    react: {
        title: 'React & Redux',
        description: 'Développez des applications web modernes avec React.',
        duration: 30,
        chapters: 25,
        students: 1800,
        rating: 4.7,
        icon: 'fab fa-react',
        color: '#61dafb'
    },
    nodejs: {
        title: 'Node.js & Express',
        description: 'Créez des APIs robustes avec Node.js et Express.',
        duration: 20,
        chapters: 16,
        students: 2100,
        rating: 4.7,
        icon: 'fab fa-node-js',
        color: '#339933'
    },
    php: {
        title: 'PHP & Laravel',
        description: 'Développez des applications web avec PHP et Laravel.',
        duration: 22,
        chapters: 18,
        students: 1500,
        rating: 4.5,
        icon: 'fab fa-php',
        color: '#777bb4'
    },
    sql: {
        title: 'SQL & MySQL',
        description: 'Maîtrisez SQL et MySQL pour les bases de données.',
        duration: 18,
        chapters: 15,
        students: 1900,
        rating: 4.6,
        icon: 'fas fa-database',
        color: '#4479a1'
    }
};

// État du cours
let currentCourse = null;
let currentChapter = 1;
let userProgress = {};

// Fonction pour récupérer les paramètres URL
function getURLParams() {
    const urlParams = new URLSearchParams(window.location.search);
    return {
        langage: urlParams.get('langage'),
        numero: parseInt(urlParams.get('numero')) || 1
    };
}

// Fonction pour initialiser la page
function initializePage() {
    const { langage, numero } = getURLParams();
    
    if (!langage) {
        showError('Langage non spécifié');
        return;
    }

    const config = courseConfig[langage];
    const data = window.dataCategorie[langage] || [];

    if (!config || !data.length) {
        showError('Cours non trouvé');
        return;
    }

    currentCourse = { config, data, langage };
    currentChapter = numero;

    loadUserProgress();
    updateCourseHeader();
    updateBreadcrumb();
    generateChapterList();
    loadChapterContent(currentChapter);
    loadRelatedCourses();
}

// Fonction pour mettre à jour l'en-tête du cours
function updateCourseHeader() {
    const { config } = currentCourse;
    
    document.getElementById('courseTitle').textContent = config.title;
    document.getElementById('courseTitleMain').textContent = config.title;
    document.getElementById('courseDescription').textContent = config.description;
    document.getElementById('courseDuration').textContent = `${config.duration} heures`;
    document.getElementById('courseChapters').textContent = `${config.chapters} chapitres`;
    document.getElementById('courseStudents').textContent = `${config.students.toLocaleString()} étudiants`;
    document.getElementById('courseRating').textContent = `${config.rating}/5`;
}

// Fonction pour mettre à jour le fil d'Ariane
function updateBreadcrumb() {
    const { config } = currentCourse;
    document.getElementById('courseTitle').textContent = config.title;
}

// Fonction pour générer la liste des chapitres
function generateChapterList() {
    const { data } = currentCourse;
    const chapterList = document.getElementById('chapterList');
    
    chapterList.innerHTML = data.map((chapter, index) => {
        const isCompleted = userProgress[chapter.numero]?.completed || false;
        const isCurrent = chapter.numero === currentChapter;
        
        return `
            <div class="chapter-item ${isCurrent ? 'active' : ''} ${isCompleted ? 'completed' : ''}" 
                 data-chapter="${chapter.numero}">
                <div class="chapter-info">
                    <div class="chapter-number">${chapter.numero}</div>
                    <div class="chapter-details">
                        <h4>${extractTitleFromHTML(chapter.title)}</h4>
                        <div class="chapter-meta">
                            <span class="chapter-duration">
                                <i class="fas fa-clock"></i>
                                ${Math.ceil(Math.random() * 30 + 10)} min
                            </span>
                            ${isCompleted ? '<span class="completed-badge"><i class="fas fa-check"></i></span>' : ''}
                        </div>
                    </div>
                </div>
                <div class="chapter-actions">
                    <button class="btn-play" data-chapter="${chapter.numero}">
                        <i class="fas fa-play"></i>
                    </button>
                </div>
            </div>
        `;
    }).join('');

    chapterList.addEventListener('click', (e) => {
        const chapterItem = e.target.closest('.chapter-item');
        const playBtn = e.target.closest('.btn-play');
        
        if (chapterItem && !playBtn) {
            const chapterNum = parseInt(chapterItem.dataset.chapter);
            loadChapterContent(chapterNum);
        } else if (playBtn) {
            const chapterNum = parseInt(playBtn.dataset.chapter);
            loadChapterContent(chapterNum);
        }
    });
}

// Fonction pour extraire le titre du HTML
function extractTitleFromHTML(htmlString) {
    const temp = document.createElement('div');
    temp.innerHTML = htmlString;
    const h1 = temp.querySelector('h1');
    return h1 ? h1.textContent.replace(/Chapitre \d+ :\s*/, '') : 'Titre non disponible';
}

// Fonction pour charger le contenu d'un chapitre
function loadChapterContent(chapterNum) {
    const { data } = currentCourse;
    const chapter = data.find(ch => ch.numero === chapterNum);
    
    if (!chapter) {
        showError('Chapitre non trouvé');
        return;
    }

    currentChapter = chapterNum;
    updateChapterList();
    displayChapterContent(chapter);
    updateProgress();
}

// Fonction pour mettre à jour la liste des chapitres
function updateChapterList() {
    document.querySelectorAll('.chapter-item').forEach(item => {
        item.classList.remove('active');
        if (parseInt(item.dataset.chapter) === currentChapter) {
            item.classList.add('active');
        }
    });
}

// Fonction pour afficher le contenu du chapitre
function displayChapterContent(chapter) {
    const lessonContent = document.getElementById('lessonContent');
    
    lessonContent.innerHTML = `
        <div class="lesson-header">
            <h1>${chapter.title}</h1>
            <div class="lesson-actions">
                <button class="btn btn-secondary" id="prevChapter">
                    <i class="fas fa-chevron-left"></i>
                    Précédent
                </button>
                <button class="btn btn-primary" id="nextChapter">
                    Suivant
                    <i class="fas fa-chevron-right"></i>
                </button>
            </div>
        </div>
        <div class="lesson-body">
            ${chapter.content}
        </div>
        <div class="lesson-footer">
            <div class="completion-actions">
                <button class="btn btn-success" id="markComplete">
                    <i class="fas fa-check"></i>
                    Marquer comme terminé
                </button>
                <button class="btn btn-secondary" id="bookmarkChapter">
                    <i class="far fa-bookmark"></i>
                    Marquer la page
                </button>
            </div>
        </div>
    `;

    document.getElementById('prevChapter').addEventListener('click', () => {
        if (currentChapter > 1) {
            loadChapterContent(currentChapter - 1);
        }
    });

    document.getElementById('nextChapter').addEventListener('click', () => {
        if (currentChapter < currentCourse.data.length) {
            loadChapterContent(currentChapter + 1);
        }
    });

    document.getElementById('markComplete').addEventListener('click', () => {
        markChapterComplete(currentChapter);
    });

    updateNavigationButtons();
}

// Fonction pour marquer un chapitre comme terminé
function markChapterComplete(chapterNum) {
    if (!userProgress[chapterNum]) {
        userProgress[chapterNum] = {};
    }
    userProgress[chapterNum].completed = true;
    userProgress[chapterNum].completedAt = new Date().toISOString();
    
    saveUserProgress();
    updateProgress();
    generateChapterList();
    
    showNotification('Chapitre marqué comme terminé !');
}

// Fonction pour mettre à jour les boutons de navigation
function updateNavigationButtons() {
    const prevBtn = document.getElementById('prevChapter');
    const nextBtn = document.getElementById('nextChapter');
    
    if (prevBtn) {
        prevBtn.disabled = currentChapter <= 1;
        prevBtn.style.opacity = currentChapter <= 1 ? '0.5' : '1';
    }
    
    if (nextBtn) {
        nextBtn.disabled = currentChapter >= currentCourse.data.length;
        nextBtn.style.opacity = currentChapter >= currentCourse.data.length ? '0.5' : '1';
    }
}

// Fonction pour charger la progression utilisateur
function loadUserProgress() {
    const saved = localStorage.getItem(`progress_${currentCourse.langage}`);
    if (saved) {
        userProgress = JSON.parse(saved);
    }
}

// Fonction pour sauvegarder la progression utilisateur
function saveUserProgress() {
    localStorage.setItem(`progress_${currentCourse.langage}`, JSON.stringify(userProgress));
}

// Fonction pour mettre à jour la progression
function updateProgress() {
    const totalChapters = currentCourse.data.length;
    const completedChapters = Object.values(userProgress).filter(ch => ch.completed).length;
    const progressPercentage = Math.round((completedChapters / totalChapters) * 100);
    
    document.getElementById('progressFill').style.width = `${progressPercentage}%`;
    document.getElementById('progressText').textContent = `${progressPercentage}% complété`;
    document.getElementById('completedChapters').textContent = completedChapters;
    document.getElementById('remainingChapters').textContent = totalChapters - completedChapters;
}

// Fonction pour charger les cours similaires
function loadRelatedCourses() {
    const relatedCoursesGrid = document.getElementById('relatedCoursesGrid');
    
    const relatedCourses = [
        {
            title: 'CSS3 Avancé',
            description: 'Découvrez les fonctionnalités avancées de CSS3',
            duration: 12,
            students: 1800,
            rating: 4.7,
            link: 'detailCours.html?langage=css&numero=1'
        },
        {
            title: 'JavaScript ES6+',
            description: 'Maîtrisez les nouvelles fonctionnalités de JavaScript',
            duration: 20,
            students: 2500,
            rating: 4.8,
            link: 'detailCours.html?langage=javascript&numero=1'
        },
        {
            title: 'Responsive Design',
            description: 'Créez des sites web adaptatifs',
            duration: 10,
            students: 1200,
            rating: 4.6,
            link: 'detailCours.html?langage=css&numero=1'
        }
    ];
    
    relatedCoursesGrid.innerHTML = relatedCourses.map(course => `
        <div class="course-card">
            <div class="course-content">
                <h3>${course.title}</h3>
                <p>${course.description}</p>
                <div class="course-meta">
                    <span class="course-duration">
                        <i class="fas fa-clock"></i>
                        ${course.duration}h
                    </span>
                    <span class="course-students">
                        <i class="fas fa-users"></i>
                        ${course.students.toLocaleString()}
                    </span>
                    <span class="course-rating">
                        <i class="fas fa-star"></i>
                        ${course.rating}
                    </span>
                </div>
                <a href="${course.link}" class="course-link">
                    Voir le cours <i class="fas fa-arrow-right"></i>
                </a>
            </div>
        </div>
    `).join('');
}

// Fonction pour afficher une erreur
function showError(message) {
    const lessonContent = document.getElementById('lessonContent');
    lessonContent.innerHTML = `
        <div class="error-state">
            <i class="fas fa-exclamation-triangle"></i>
            <h3>Erreur</h3>
            <p>${message}</p>
            <a href="cours.html" class="btn btn-primary">Retour aux cours</a>
        </div>
    `;
}

// Fonction pour afficher une notification
function showNotification(message) {
    const notification = document.getElementById('notification');
    notification.querySelector('span').textContent = message;
    notification.classList.add('show');
    
    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}

// Initialisation
document.addEventListener('DOMContentLoaded', () => {
    initializePage();
    
    document.getElementById('startCourseBtn')?.addEventListener('click', () => {
        loadChapterContent(1);
    });
    
    document.getElementById('bookmarkBtn')?.addEventListener('click', () => {
        showNotification('Cours ajouté aux favoris !');
    });
});