const item = document.querySelector('.item');

const placeholders = document.querySelectorAll('.placeholder');


item.addEventListener('dragstart', dragstart);
item.addEventListener('dragend', dragend);

for (placeholder of placeholders) {
    placeholder.addEventListener('dragover', dragover); // Когда заходим на территория плейсхолдера
    placeholder.addEventListener('dragenter', dragenter); // когда над
    placeholder.addEventListener('dragleave', dragleave); // когда вышли
    placeholder.addEventListener('drop', dragdrop); // Когда отпустили
}

function dragstart(event) { // В момент вызова функции прилетает объект
    event.target.classList.add('hold');
    setTimeout(() => event.target.classList.add('hide'), 0);
} 

function dragend(event) {
    event.target.classList.remove('hold');
    event.target.classList.remove('hide');
}

function dragover(event) {
    event.preventDefault()
}

function dragenter(event) {
    event.target.classList.add('hovered');
}

function dragleave(event) {
    event.target.classList.remove('hovered')
}
function dragdrop(event) {
    event.target.append(item);
    event.target.classList.remove('hovered');
}