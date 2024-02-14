document.addEventListener('DOMContentLoaded', function () {
    const hamMenu = document.querySelector('.menu');
    const navMenu = document.querySelector('.navmenu');

    hamMenu.addEventListener('click', function () {
        navMenu.classList.toggle('active');
        hamMenu.classList.toggle('active');
    });
});


document.addEventListener("DOMContentLoaded", function() {
    var visitMessage = document.getElementById("visit-message");
    var lastVisit = localStorage.getItem("lastVisit");

    if (lastVisit) {
        var currentDate = new Date();
        var millisecondsDiff = currentDate - lastVisit;
        var daysDiff = Math.floor(millisecondsDiff / (1000 * 60 * 60 * 24));

        if (daysDiff === 0) {
            visitMessage.textContent = "Back so soon! Awesome!";
        } else if (daysDiff === 1) {
            visitMessage.textContent = "You last visited 1 day ago.";
        } else {
            visitMessage.textContent = "You last visited " + daysDiff + " days ago.";
        }
    } else {
        visitMessage.textContent = "Welcome! Let us know if you have any questions.";
    }

    localStorage.setItem("lastVisit", Date.now());
});



 var currentDate = new Date();

 var formattedDate = currentDate.toISOString();


 document.getElementById("timestamp").value = formattedDate;
