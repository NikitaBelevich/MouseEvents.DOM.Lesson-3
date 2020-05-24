'use strict';

//TODO Task 1
const listFiles = document.querySelector('.task1 ul');
listFiles.onmousedown = () => false; // запрет выделения текста
listFiles.addEventListener('click', selectFile);

function selectFile(event) {
    const target = event.target;
    const targetFile = target.closest('li');
    if (!targetFile) return; 

    if (event.ctrlKey || event.metaKey) {
        targetFile.classList.add('selected-item');
    } else {
        const selectedFiles = listFiles.querySelectorAll('.selected-item'); // получили коллекцию выбранных файлов
        if (selectedFiles.length != 0) { // если элементы есть
            selectedFiles.forEach((file) => { // тогда перебираем их и удаляем выделение
                file.classList.remove('selected-item');
            });
        }
        targetFile.classList.add('selected-item'); // и выделяем целевой элемент в любом случае
    }
}
//TODO Task 1