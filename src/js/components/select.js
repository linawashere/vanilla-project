document.addEventListener('DOMContentLoaded', () => {
    const selects = document.querySelectorAll('.select');

    selects.forEach(select => {
        const header = select.querySelector('.select__header');
        const label = select.querySelector('.select__label');
        const icon = select.querySelector('.icon-right');
        const optionsList = select.querySelector('.select__options');
        const options = select.querySelectorAll('.select__option input[type="checkbox"]');
        const placeholder = label.textContent;

        header.addEventListener('click', function(e) {
            e.stopPropagation();
            
            select.classList.toggle('open');
            optionsList.classList.toggle('open');
            icon.classList.toggle('active');
        });

        options.forEach(option => {
            option.addEventListener('change', function(e) {
                if (e.target !== this) return;
                
                const checkedOptions = Array.from(options).filter(o => o.checked);
                
                if (checkedOptions.length === 0) {
                    label.textContent = placeholder;
                } else if (checkedOptions.length === 1) {
                    label.textContent = this.nextElementSibling.textContent;
                } else {
                    label.textContent = `Выбрано ${checkedOptions.length}`;
                }
            });

            const optionLabel = option.nextElementSibling;
            optionLabel.addEventListener('click', function(e) {
                e.stopPropagation();
                option.checked = !option.checked;
                const event = new Event('change');
                option.dispatchEvent(event);
            });
        });

        document.addEventListener('click', function(e) {
            if (!select.contains(e.target)) {
                select.classList.remove('open');
                optionsList.classList.remove('open');
                icon.classList.remove('active');
            }
        });

        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                select.classList.remove('open');
                optionsList.classList.remove('open');
                icon.classList.remove('active');
            }
        });
    });
});