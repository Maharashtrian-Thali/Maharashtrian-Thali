/**
 * Scroll-triggered animations: add .animate-in when elements enter viewport
 */
(function () {
    function initScrollAnimations() {
        var elements = document.querySelectorAll('.animate-on-scroll');
        if (!elements.length) return;

        var observer = new IntersectionObserver(
            function (entries) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-in');
                    }
                });
            },
            {
                threshold: 0.12,
                rootMargin: '0px 0px -40px 0px'
            }
        );

        elements.forEach(function (el) {
            observer.observe(el);
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initScrollAnimations);
    } else {
        initScrollAnimations();
    }
})();
