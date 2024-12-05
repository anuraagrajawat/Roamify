const priceObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('price-show');
        }
    });
});

const priceHiddenEL = document.querySelectorAll('.price-hidden');
priceHiddenEL.forEach((el) => priceObserver.observe(el));