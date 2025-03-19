export function handleComponentStates(contSelector, itemSelector, hoverClass, pressedClass) {
    const container = document.querySelector(contSelector);

    if (!container) return;

    container.addEventListener('mouseenter', handleHover);
    container.addEventListener('mouseleave', handleHover);
    container.addEventListener('mousedown', handlePress);
    container.addEventListener('mouseup', handlePress);

    function handleHover(event) {
        const item = event.target.closest(itemSelector);

        const icon = item.querySelector('.icon-file');
        if (!icon) return;

        if (!item) return;
        if (event.type === 'mouseenter') {
            item.classList.add(hoverClass);
            icon.classList.add('icon-file--hover');
        } else if (event.type === 'mouseleave') {
            item.classList.remove(hoverClass);
            icon.classList.remove('icon-file--hover');
        }
    }

    function handlePress(event) {
        const item = event.target.closest(itemSelector);
        if (!item) return;
        if (event.type === 'mousedown') {
            item.classList.add(pressedClass);
        } else if (event.type === 'mouseup') {
            item.classList.remove(pressedClass);
        }
    }
}