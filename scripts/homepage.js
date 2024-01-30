document.addEventListener('DOMContentLoaded', function () {
    const menuBtn = document.getElementById('menu-btn');
    const navList = document.querySelector('nav ul');

    menuBtn.addEventListener('click', function () {
        navList.classList.toggle('active');
        menuBtn.classList.toggle('active'); 
    });

    document.getElementById('dark-mode-btn').addEventListener('click', function () {
        document.body.classList.toggle('dark-mode-btn');
    });
});
