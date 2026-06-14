/*Parte inicial*/
const inputTask = document.getElementById('input-task')
const addTaskButton = document.getElementById('adc')
const list = document.getElementById('list')
const error = document.getElementById('error')

/*complementos*/

addTaskButton.addEventListener('click', () => {

    /*Marcações das li*/
    const deleteButton = document.createElement('button')
    deleteButton.innerText = 'Deletar'
    const check = document.createElement('input')
    check.type = 'checkbox'

    /*função básica*/
    let digitei = inputTask.value;
    const li = document.createElement('li')

    if (digitei === "") {
        error.innerText = 'Digite uma tarefa válida'
        error.style.color = 'red'
        return
    }
    error.innerText = ''


    li.innerText = digitei;
    list.appendChild(li)

    /*Marcações das li*/
    li.appendChild(check)
    li.appendChild(deleteButton)

    /*Funções de edição*/
    
    deleteButton.addEventListener('click', () => {
    list.removeChild(li)
    })

    
})



