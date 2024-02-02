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

    function displayList(chapterText) {
        let li = document.createElement('li');
        let deleteButton = document.createElement('button');

        li.textContent = chapterText;
        deleteButton.textContent = '❌';
        deleteButton.classList.add('delete');
        
        li.append(deleteButton);
        chapterList.append(li);

        deleteButton.addEventListener('click', function () {
            chapterList.removeChild(li);
            deleteChapter(li.textContent);
            input.focus();
        });
    }

    function setChapterList() {
        localStorage.setItem('favoriteChapters', JSON.stringify(chaptersArray));
    }

    function getChapterList() {
        const storedChapters = localStorage.getItem('favoriteChapters');
        return storedChapters ? JSON.parse(storedChapters) : [];
    }

    function deleteChapter(chapter) {
        chapter = chapter.slice(0, chapter.length - 1);
        chaptersArray = chaptersArray.filter(item => item !== chapter);
        setChapterList();
    }
});
