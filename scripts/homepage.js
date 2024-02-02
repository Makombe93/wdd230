document.addEventListener('DOMContentLoaded', function () {
    const menuBtn = document.querySelector('.menu');
    const navList = document.querySelector('.navmenu');
    const darkModeBtn = document.getElementById('dark-mode')

    menuBtn.addEventListener('click', function () {
        navList.classList.toggle('active');
        menuBtn.classList.toggle('active');
    });

    darkModeBtn.addEventListener('click', function () {
        document.body.classList.toggle('dark-mode');
    });
});
