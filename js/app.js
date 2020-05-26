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

//TODO Task 2
const housePigs = document.querySelector('.task2 .house-pigs');
housePigs.addEventListener('mouseover', showTooltip);

function showTooltip(event) {
    const targetPath = event.target.closest('[data-tooltip]');
    const coordinatesTargetElem = targetPath.getBoundingClientRect(); // получили координаты ближайшего элемента с атр. data-tooltip

    const tooltip = document.createElement('div');
    tooltip.classList.add('tooltip'); // добавили стили
    tooltip.textContent = targetPath.dataset.tooltip; // добавили текст из атрибута элемента
    document.body.append(tooltip); // разместили

    let top = coordinatesTargetElem.top - (tooltip.offsetHeight + 5); // определяем верхнюю позицию подсказки
    if (coordinatesTargetElem.top < tooltip.offsetHeight + 5) { // если прокрутка до верхней границы меньше высоты подсказки
        top = coordinatesTargetElem.bottom + 5; // тогда размещаем внизу элемента
    }

    let left = coordinatesTargetElem.left + (targetPath.offsetWidth - tooltip.offsetWidth) / 2; // центрируем подсказку по центру элемента
    
    tooltip.style.cssText = `left: ${left}px;
                             top: ${top}px;
                              `;
}

housePigs.addEventListener('mouseout', removeTooltip);
function removeTooltip(event) {
    const tooltip = document.querySelector('.tooltip');
    tooltip.remove();
}
//TODO Task 2