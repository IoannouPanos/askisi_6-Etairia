// script.js
const productCards = document.querySelectorAll('.product-card');

productCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.classList.add('flipped');
    });

    card.addEventListener('mouseleave', () => {
        card.classList.remove('flipped');
    });
});