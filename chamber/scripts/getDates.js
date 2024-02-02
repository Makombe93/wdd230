document.addEventListener('DOMContentLoaded', function () {
    var currentYear = new Date().getFullYear();

    var yearSpan = document.getElementById('yearSpan');
    if (yearSpan) {
        yearSpan.textContent = currentYear;
        yearSpan.insertAdjacentHTML('afterend', '<span> Batsirai Makombe | WDD230 - Winter 2024 | Lusaka, Zambia</span>');
    }

    var lastModifiedDate = document.lastModified;
    document.getElementById('lastModified').textContent = 'Last Modified: ' + lastModifiedDate;
});
