import './bootstrap';
import '../css/app.css';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

import Alpine from 'alpinejs';

window.Alpine = Alpine;
Alpine.start();

window.heroSlider = function (images) {
    return {
        images: images ?? [],
        currentIndex: 0,

        init() {
            if (!this.images.length) return;

            setInterval(() => {
                this.currentIndex =
                    (this.currentIndex + 1) % this.images.length;
            }, 5000);
        }
    }
}


// Swiper
document.addEventListener('DOMContentLoaded', function () {
    new Swiper('.swiper', {
        loop: true,
        autoplay: {
            delay: 5000,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
});

// Intersection animation
document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fadeInUp');
            }
        });
    }, { threshold: 0.15 });

    document.querySelectorAll('[data-animate]').forEach(el => {
        observer.observe(el);
    });
});

// Scroll reveal fallback
document.addEventListener("scroll", () => {
    document.querySelectorAll(".reveal").forEach(el => {
        const pos = el.getBoundingClientRect().top;
        if (pos < window.innerHeight - 100) {
            el.classList.add("active");
        }
    });
});
