/* Parte inicial */
const inputTask = document.getElementById('input-task');
const addTaskButton = document.getElementById('adc');
const list = document.getElementById('list');
const error = document.getElementById('error');

/* Limpa erro ao digitar */
inputTask.addEventListener('input', () => {
    error.innerText = '';
});

/* Função principal */
function createTask() {

    const taskValue = inputTask.value.trim();

    if (taskValue === '') {
        error.innerText = 'Digite uma tarefa válida';
        error.style.color = 'red';
        return;
    }

    /* Criação dos elementos */
    const li = document.createElement('li');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    const taskText = document.createElement('span');
    taskText.innerText = taskValue;
    taskText.classList.add('task-text');

    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fa-solid fa-trash"></i>';

    /* Montagem */
    li.appendChild(checkbox);
    li.appendChild(taskText);
    li.appendChild(deleteButton);

    list.appendChild(li);

    /* Limpa input */
    inputTask.value = '';
    inputTask.focus();

    /* Deletar */
    deleteButton.addEventListener('click', () => {
        li.remove();
    });

    /* Concluir tarefa */
    checkbox.addEventListener('change', () => {
        taskText.classList.toggle('completed');
    });
}

/* Clique no botão */
addTaskButton.addEventListener('click', createTask);

/* Enter */
inputTask.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        createTask();
    }
});