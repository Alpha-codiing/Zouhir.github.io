document.addEventListener('DOMContentLoaded', () => {
    // Sélectionne tous les liens qui commencent par un '#' et ne sont pas juste '#'
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]:not([href="#"])');

    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            // Empêche le comportement par défaut (saut direct)
            e.preventDefault(); 

            // Obtient l'ID de la cible (ex: #bio, #parcours)
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Défilement fluide (Smooth Scroll)
                targetElement.scrollIntoView({
                    behavior: 'smooth' 
                });
            }
        });
    });

    // NOTE: AOS.init() est appelé directement dans l'HTML (voir section 1)
});
