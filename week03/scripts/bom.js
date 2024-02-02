document.addEventListener('DOMContentLoaded', function () {
    const input = document.getElementById('chapterInput');
    const addButton = document.getElementById('addButton');
    const chapterList = document.getElementById('chapterList');

    let chaptersArray = getChapterList() || [];

    addButton.addEventListener('click', () => {
    if (input.value != '') { 
        displayList(input.value); 
        chaptersArray.push(input.value); 
        setChapterList(); 
        input.value = ''; 
        input.focus(); 
        }
    });

    let deleteButton = document.createElement('button');

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
