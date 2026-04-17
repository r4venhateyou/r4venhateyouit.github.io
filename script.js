document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.page-section');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('data-target');
            if (!targetId) return;
            
            e.preventDefault();
            
            links.forEach(l => l.classList.remove('active'));
            link.classList.add('active');

            sections.forEach(s => {
                s.classList.remove('active');
                if(s.id === targetId) s.classList.add('active');
            });

            window.scrollTo(0, 0);
            initReveal();
        });
    });

    const initReveal = () => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) entry.target.classList.add('visible');
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    };

    initReveal();
});