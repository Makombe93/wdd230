document.addEventListener('DOMContentLoaded', function () {
    
    var currentYear = new Date().getFullYear();
    document.querySelector('#currentYear').textContent = currentYear;

    
    var lastModifiedDate = document.lastModified;
    document.getElementById('lastModified').textContent = 'Last Modified: ' + lastModifiedDate;
});
