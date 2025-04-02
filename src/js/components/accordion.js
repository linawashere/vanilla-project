document.querySelectorAll('.accordion').forEach(button => {
    const accordion = button.closest('.accordion');
    button.addEventListener('click', () => {
        accordion.classList.toggle('accordion--expanded');
    });
});