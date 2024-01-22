document.getElementById('menu-btn').addEventListener('click', function () {
    document.querySelector('nav ul').classList.toggle('show');
});

document.getElementById('dark-mode-btn').addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
});