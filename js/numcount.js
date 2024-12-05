'use-strict';

const numSection = document.querySelector('.number-section');
const counters = document.querySelectorAll('.numbers');
const speed = 200;

const callback = function (entries) {
    const [entry] = entries;
    if (!entry.isIntersecting) return;

    counters.forEach(counter => {
        const animate = () => {
            const value = +counter.getAttribute('data-counter');
            const data = +counter.innerText;
            const time = value / speed;

            if (data < value) {
                counter.innerText = Math.ceil(data + time);
                setTimeout(animate, 1);
            } else {
                counter.innerText = value;
            }
        }
        animate();
    });
}

const options = {
    root: null,
    threshold: 0.5,
    rootMargin: ""
}

const numObserver = new IntersectionObserver(callback, options);

numObserver.observe(numSection);