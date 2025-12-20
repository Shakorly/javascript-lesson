let taskList = [];

const taskForm = document.getElementById('taskForm');
const inputField = document.getElementById('task-input');


taskForm.addEventListener('submit', function(e){
    e.preventDefault();

    const inputTask = inputField.value.trim();
    
    if(inputTask){
        taskList.push({
            id: Date.now(),
            task: inputTask,
            complete: false
        } 
       
    )      
    }


    inputField.value = ''
    renderTasks();
})




function renderTasks() {
    const taskListContainer = document.getElementById('taskListContainer');
    taskListContainer.innerHTML = '';

    taskList.forEach(function(taskItem, id) {

        const taskHTML = `
            <div class="task-list"> 
                <div class="check-box">
                    <input type="checkbox" ${taskItem.complete ? 'checked' : ''} data-index="${id}" class="complete-checkbox"/>
                </div>
                <p class="task-text">${taskItem.task}</p>
                <div>
                    <div class="edit-text">
                        <button class="edit-button" data-id="${taskItem.id}" >Edit</button>
                        <button class="delete-button" id="deletebtn" data-id="${taskItem.id}">Delete</button>
                    </div>
                </div>
            </div>
        `;

        taskListContainer.insertAdjacentHTML('afterbegin', taskHTML);
    });

    eventBtn()
}

function eventBtn(){
    const btns = document.querySelectorAll('.delete-button');
    const completeBox = document.querySelectorAll('.complete-checkbox');
    const editButton = document.querySelectorAll('.edit-button');

    btns.forEach(btn =>{
        btn.addEventListener('click', () => {
            deleteBtn(Number(btn.dataset.id))
        })
    })

    editButton.forEach(btn =>{
        btn.addEventListener('click', ()=>{
            editBtn(Number(btn.dataset.id))
        })
    })

    completeBox.forEach('btn', () =>{
        btn.addEventListener('check', () => {
            deleteBtn(Number(btn.dataset.id))
        })
    })
}

function deleteBtn(id){
    taskList = taskList.filter(item => item.id !== id);
    // taskList.splice(id, 1)
    renderTasks();
}

function editBtn(id){
    const selectedTask = taskList.find(item => item.id === id)
    if (!selectedTask)
        return;

    const newText = prompt("Enter your new item", selectedTask.task);
    if(!newText || newText.trim() == '') return;
    selectedTask.task = newText ;


    renderTasks()
}

// function completeCheckbox(id){
//     const completeBox = taskList.find(item => item.id !== id)
//     if (completeBox){
//         backgrounColor: blue
//     }

//     renderTasks()
// }




