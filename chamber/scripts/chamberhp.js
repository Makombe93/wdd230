document.addEventListener('DOMContentLoaded', function () {
    const hamMenu = document.querySelector('.menu');
    const navMenu = document.querySelector('.navmenu');

    hamMenu.addEventListener('click', function () {
        navMenu.classList.toggle('active');
        hamMenu.classList.toggle('active');
    });
});
