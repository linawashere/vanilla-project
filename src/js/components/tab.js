window.addEventListener('DOMContentLoaded', () => {
    const tabContainer = document.querySelector('.tabs');

    if (tabContainer) {
        tabContainer.addEventListener('mouseenter', handleTabHover);
        tabContainer.addEventListener('mouseleave', handleTabHover);
        tabContainer.addEventListener('mousedown', handleTabPress);
        tabContainer.addEventListener('mouseup', handleTabPress);
    }

    //обработка hover
    function handleTabHover(event) {
        const tab = event.target.closest('.tab');
        if (!tab) return;
        if (event.type === 'mouseenter') {
            tab.classList.add('tab--hover');
        } else if (event.type === 'mouseleave') {
            tab.classList.remove('tab--hover');
        }
    }

    //обработка pressed
    function handleTabPress(event) {
        const tab = event.target.closest('.tab');
        if (!tab) return;
        if (event.type === 'mousedown') {
            tab.classList.add('tab--pressed');
        } else if (event.type === 'mouseup') {
            tab.classList.remove('tab--pressed');
        }
    }
});