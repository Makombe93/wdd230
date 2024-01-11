document.addEventListener('DOMContentLoaded', function () {
    // Get current year and update the copyright
    var currentYear = new Date().getFullYear();
    document.querySelector('#currentYear').textContent = currentYear;

    // Get the last modified date and update the second paragraph
    var lastModifiedDate = document.lastModified;
    document.getElementById('lastModified').textContent = 'Last Modified: ' + lastModifiedDate;
});
