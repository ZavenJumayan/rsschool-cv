
const navButtons = document.querySelectorAll('.nav-btn');
navButtons.forEach(button => {
    button.addEventListener('click', () => {
        const targetClass = button.getAttribute('data-target');
        const targetSection = document.querySelector(`.${targetClass}`);

        targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'  
        });
    });
});
