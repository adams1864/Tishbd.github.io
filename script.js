// JavaScript is used to add confetti effect
const confettiContainer = document.querySelector('.confetti-container');

for (let i = 0; i < 30; i++) {
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.animationDelay = Math.random() * 3 + 's';
    confettiContainer.appendChild(confetti);
}
