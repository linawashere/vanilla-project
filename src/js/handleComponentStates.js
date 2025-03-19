export function handleComponentStates(contSelector, itemSelector, hoverClass, pressedClass) {
    const container = document.querySelector(contSelector);

    if (!container) return;

    container.addEventListener('mouseenter', handleHover);
    container.addEventListener('mouseleave', handleHover);
    container.addEventListener('mousedown', handlePress);
    container.addEventListener('mouseup', handlePress);

    function handleHover(event) {
        const item = event.target.closest(itemSelector);
        if (!item) return;
        if (event.type === 'mouseenter') {
            item.classList.add(hoverClass);
        } else if (event.type === 'mouseleave') {
            item.classList.remove(hoverClass);
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