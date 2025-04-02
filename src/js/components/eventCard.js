document.addEventListener('DOMContentLoaded', () => {
    const eventCards = document.querySelectorAll('.event-card');

    eventCards.forEach(card => {
        const dateAttr = card.getAttribute('data-event-date');
        if (dateAttr) {
            const eventDate = new Date(dateAttr);
            const today = new Date();

            // Подсчет оставшихся дней
            const remainingDays = calculateRemainingDays(eventDate, today);

            const timerDaysElement = card.querySelector('.event-card__timer-days');

            // Выводим количество дней
            if (timerDaysElement) {
                timerDaysElement.textContent = `Через ${remainingDays} дн.`;

                // Добавляем класса, если осталось <= 3 дней
                if (remainingDays <= 3) {
                    card.querySelector('.event-card__timer').classList.add('event-card__timer--urgent');
                }
            }
        }
    });

    function calculateRemainingDays(eventDate, today) {
        const difference = eventDate - today;
        const days = Math.ceil(difference / (1000 * 60 * 60 * 24));
        return days;
    }
});