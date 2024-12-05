'use-strict';
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

const hiddenEL = document.querySelectorAll('.hidden');
hiddenEL.forEach((el) => observer.observe(el));