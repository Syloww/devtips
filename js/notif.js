// Gestion des notifications
document.addEventListener('DOMContentLoaded', function() {
    const notification = document.getElementById('notification');
    const closeBtn = document.querySelector('.notification-close');
    
    // Afficher la notification après un délai
    setTimeout(() => {
        if (notification) {
            notification.classList.add('show');
        }
    }, 2000);

    // Fermer la notification
    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            notification.classList.remove('show');
        });
    }

    // Fermer automatiquement après 5 secondes
    setTimeout(() => {
        if (notification && notification.classList.contains('show')) {
            notification.classList.remove('show');
        }
    }, 7000);

    // Fonction pour afficher une notification personnalisée
    window.showNotification = function(message, type = 'info', duration = 3000) {
        const notif = document.createElement('div');
        notif.className = `notification ${type}`;
        notif.innerHTML = `
            <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
            <span>${message}</span>
            <button class="notification-close">&times;</button>
        `;
        
        document.body.appendChild(notif);
        
        // Afficher la notification
        setTimeout(() => {
            notif.classList.add('show');
        }, 100);
        
        // Fermer automatiquement
        setTimeout(() => {
            notif.classList.remove('show');
            setTimeout(() => {
                document.body.removeChild(notif);
            }, 300);
        }, duration);
        
        // Fermer manuellement
        notif.querySelector('.notification-close').addEventListener('click', function() {
            notif.classList.remove('show');
            setTimeout(() => {
                if (document.body.contains(notif)) {
                    document.body.removeChild(notif);
                }
            }, 300);
        });
    };
});