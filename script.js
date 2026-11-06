document.addEventListener('DOMContentLoaded', () => {
    // =========================================
    // LOGIKA LIQUID GALLERY (KLIK DI MOBILE)
    // =========================================
    const panels = document.querySelectorAll('.panel');

    const removeActiveClasses = () => {
        panels.forEach(panel => {
            panel.classList.remove('active');
        });
    };

    panels.forEach(panel => {
        panel.addEventListener('click', () => {
            // Logika Tap untuk Mobile
            if (window.innerWidth <= 768) {
                const isActive = panel.classList.contains('active');
                removeActiveClasses(); // Tutup semua panel lain
                
                // Jika panel belum aktif, buka panel ini
                if (!isActive) {
                    panel.classList.add('active');
                }
            }
        });
    });

    // =========================================
    // SCROLL REVEAL ANIMATION (UNTUK KONTEN BAWAH)
    // =========================================
    const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
    
    if ('IntersectionObserver' in window && !reducedMotion.matches) {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(e => {
                if (e.isIntersecting) {
                    e.target.classList.add('in-view');
                    observer.unobserve(e.target);
                }
            });
        }, { threshold: 0.12 });

        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    } else {
        document.querySelectorAll('.reveal').forEach(el => el.classList.add('in-view'));
    }
});