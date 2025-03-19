window.addEventListener('DOMContentLoaded', () => {
    const alerts = document.querySelectorAll('.alert');

    alerts.forEach(alert => {
        const closeBtn = alert.querySelector('.alert__close');
        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                alert.remove();
            });
        }
    });
});