document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.querySelector('.header__mobile-menu-toggle');
    const menuList = document.querySelector('.header__mobile-menu-list');
    const lk = document.querySelector('.lk');
    

    toggle.addEventListener('click', () => {
        toggle.classList.toggle('active');
        menuList.classList.toggle('active');
        // menuList.style.display = toggle.classList.contains('active') ? 'flex' : 'none';
        lk.style.display = toggle.classList.contains('active') ? 'flex' : 'none';
        document.body.classList.toggle('no-scroll');
    });
});