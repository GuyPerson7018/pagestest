const cards = document.querySelectorAll('.card-container');
const maxRotation = 12;
cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const childElementToRotate = card.querySelector(".card");
        const cardRect = card.getBoundingClientRect();
        const mouseX = e.clientX;
        const mouseY = e.clientY;

        const cardCenterX = cardRect.left + cardRect.width / 2;
        const cardCenterY = cardRect.top + cardRect.height / 2;

        const deltaX = mouseX - cardCenterX;
        const deltaY = mouseY - cardCenterY;

        let rotateX = (deltaY / (cardRect.height / 2)) * -50; // Adjust sensitivity (5) as needed
        let rotateY = (deltaX / (cardRect.width / 2)) * 50;  // Adjust sensitivity (3) as needed

        rotateX = Math.max(Math.min(rotateX, maxRotation), -maxRotation);
        rotateY = Math.max(Math.min(rotateY, maxRotation), -maxRotation);

        childElementToRotate.style.transform = `perspective(3000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    card.addEventListener('mouseleave', () => {
        const childElementToRotate = card.querySelector(".card");
        childElementToRotate.style.transform = `perspective(3000px) rotateX(-5deg) rotateY(5deg)`; // Reset rotation on mouse leave
    });
});
document.addEventListener('DOMContentLoaded', () => { // Ensure DOM is fully loaded
const cardContents = document.querySelectorAll('.card-container');

    cardContents.forEach(cardContent => {
        // 1. Create the wrapper divs
        
        cardContent.innerHTML = '<div class="card"><div class="card-content">' + cardContent.innerHTML + '</div></div>';
    });
    let cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        const cardSidesHTML = `
            <div class="card-side card-side-top"></div>
            <div class="card-side card-side-bottom"></div>
            <div class="card-side card-side-left"></div>
            <div class="card-side card-side-right"></div>
        `;
        card.insertAdjacentHTML('afterbegin', cardSidesHTML); // Add as first children
    });
    cards = document.querySelectorAll('.card-title-bar');

    cards.forEach(card => {
        const cardSidesHTML = `
            <div class="card-controls">
                <div class="card-control-button minimize"></div>
                <div class="card-control-button maximize"></div>
                <div class="card-control-button close">x</div>
            </div>
        `;
        card.insertAdjacentHTML('beforeend', cardSidesHTML); // Add as first children
    });
});