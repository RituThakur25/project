// script.js add funcationality
document.addEventListener('DOMContentLoaded', () => {
    console.log('Script loaded');
    const addToCartButtons = document.querySelectorAll('.btn');
    const cartCountElement = document.getElementById('cart-count');
    let cartCount = 0;

    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            console.log('Button clicked');
            // Increment the cart count
            cartCount++;
            // Update the cart count in the navbar
            cartCountElement.textContent = cartCount;
        });
    });
});


//  blog slider js start

let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slide').length;
    if (index >= totalSlides) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }
    slides.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function moveSlide(n) {
    showSlide(currentSlide + n);
}

// Auto slide (optional)
setInterval(() => {
    moveSlide(1);
}, 3000);

// blog slider end



