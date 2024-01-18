document.addEventListener('DOMContentLoaded', function () {
    const input = document.getElementById('chapterInput');
    const addButton = document.getElementById('addButton');
    const chapterList = document.getElementById('chapterList');

    addButton.addEventListener('click', function () {
        if (input.value.trim() !== '') {
            const li = document.createElement('li');
            const deleteButton = document.createElement('button');

            li.textContent = input.value;
            deleteButton.textContent = '❌';

            deleteButton.addEventListener('click', function () {
                chapterList.removeChild(li);
            });

            li.appendChild(deleteButton);
            chapterList.appendChild(li);

            input.value = '';
            input.focus();
        } else {
           
            input.focus();
        }
    });
});
