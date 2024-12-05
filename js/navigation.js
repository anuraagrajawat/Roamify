'use-strict';

const nav_header = document.querySelector(".header");
const nav_container = document.querySelector(".navbar");

const navObserver = new IntersectionObserver((entries) => {
    const [ent] = entries;
    ent.isIntersecting === false ? nav_container.classList.add('nav_blur') : nav_container.classList.remove('nav_blur');
},
    {
        rootMargin: "-70px",
        threshold: 0.1,
    }
);

navObserver.observe(nav_header);