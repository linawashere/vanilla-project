window.addEventListener('DOMContentLoaded', () => {
    const paginationContainer = document.querySelector('.pager');

    if (paginationContainer) {
        paginationContainer.addEventListener('mouseenter', handleTabHover);
        paginationContainer.addEventListener('mouseleave', handleTabHover);
        paginationContainer.addEventListener('mousedown', handleTabPress);
        paginationContainer.addEventListener('mouseup', handleTabPress);
    }

    //обработка hover
    function handleTabHover(event) {
        const pag = event.target.closest('.pagination');
        if (!pag) return;
        if (event.type === 'mouseenter') {
            pag.classList.add('.pagination--hover');
        } else if (event.type === 'mouseleave') {
            pag.classList.remove('pagination--hover');
        }
    }

    //обработка pressed
    function handleTabPress(event) {
        const pag = event.target.closest('.pagination');
        if (!pag) return;
        if (event.type === 'mousedown') {
            pag.classList.add('.pagination--pressed');
        } else if (event.type === 'mouseup') {
            pag.classList.remove('.pagination--pressed');
        }
    }
});