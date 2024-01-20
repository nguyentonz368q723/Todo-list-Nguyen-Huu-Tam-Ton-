//Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const deleteAllButton = document.querySelector('.delete-all-button');
const completeAllButton = document.querySelector('.complete-all-button');
const filterOptions = document.querySelector('.filter-todo');


//Event Listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
deleteAllButton.addEventListener('click', deleteAllTodos);
completeAllButton.addEventListener('click', completeAllTodos);

//Functions
function addTodo(event) {
    //Prevent the form from submitting
    event.preventDefault();

    //Create a new div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    //Create LI
    newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);

    //Create Edit button
    const editButton = document.createElement("button");
    editButton.innerHTML = '<i class="fas fa-edit"></i>';
    editButton.classList.add("edit-button");
    todoDiv.appendChild(editButton);

    // const descriptionTextarea = document.createElement("textarea");
    // descriptionTextarea.placeholder = "Enter description";
    // descriptionTextarea.classList.add("description-textarea");
    // todoDiv.appendChild(descriptionTextarea);
    
    // // Check mark button
    // const completeButton = document.createElement("button");
    // completeButton.innerHTML = '<i class="fas fa-check"></i>';
    // completeButton.classList.add("complete-button");
    // todoDiv.appendChild(completeButton);

    // Check trash button
    const trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-button");
    todoDiv.appendChild(trashButton);

    //Append to the List
    todoList.appendChild(todoDiv);

    // Clear the input
    todoInput.value = '';

        // // Store description in data attribute
        // todoDiv.dataset.description = descriptionTextarea.value;

        // // Create details button
        // const detailsButton = document.createElement("button");
        // detailsButton.innerText = 'Details';
        // detailsButton.classList.add("details-button");
        // detailsButton.addEventListener('click', showDetails);
        // todoDiv.appendChild(detailsButton);
    
        //Append to the List
        todoList.appendChild(todoDiv);
    
        // Clear the input and textarea
        todoInput.value = '';
        descriptionTextarea.value = '';
    
}

function deleteCheck(event) {
    const item = event.target;

    // Delete the check
    if (item.classList[0] === "trash-button") {
        // Assuming the todo item is the parent element of the trash-button
        const todoItem = item.parentElement;

        // Add a class for animation (e.g., fall)
        todoItem.classList.add("fall");

        // Remove the element from the DOM after the animation is complete
        todoItem.addEventListener("transitionend", function () {
            todoItem.remove();
        });
    }

    
    if (item.classList[0] === "complete-button") {
        // Assuming the todo item is the parent element of the complete-button
        const todoItem = item.parentElement;
        
        todoItem.classList.toggle("complete-button");
    }
}

// New functions for delete all and complete all
function deleteAllTodos(event) {
    event.preventDefault();
    // Remove all todo items
    const todoItems = document.querySelectorAll('.todo');
    todoItems.forEach((todoItem) => {
        todoItem.remove();
    });
}

function completeAllTodos(event) {
    event.preventDefault();
    // Select all todo items
    const todoItems = document.querySelectorAll('.todo:not(.complete-button)');
    todoItems.forEach((todoItem) => {
        todoItem.classList.toggle("complete-button");
    });
}

todoList.addEventListener('click', toggleComplete);

// Hàm xử lý sự kiện click để chuyển đổi trạng thái complete/uncomplete
function toggleComplete(event) {
    const item = event.target;

    // Kiểm tra nếu được click là mục todo-item
    if (item.classList[0] === "todo-item") {
        const todoItem = item.parentElement;
        
        // Chuyển đổi trạng thái complete/uncomplete
        todoItem.classList.toggle("complete-button");
    }
}

function filterTodos() {
    const todos = document.querySelectorAll('.todo');
    const selectedOption = filterOptions.value;

    todos.forEach((todo) => {
        const completed = todo.classList.contains('complete-button');
        
        switch (selectedOption) {
            case 'All':
                todo.style.display = 'flex';
                break;
            case 'Completed':
                todo.style.display = completed ? 'flex' : 'none';
                break;
            case 'Uncompleted':
                todo.style.display = completed ? 'none' : 'flex';
                break;
        }
    });
}

// Add an event listener for the 'change' event on the filter dropdown
filterOptions.addEventListener('change', filterTodos);

// function editTodo(event) {
//     const item = event.target;
//     const todoItem = item.parentElement;
//     document.getElementById('editTitle').value = todoItem.querySelector('.todo-item').innerText;
//     document.getElementById('editDescription').value = todoItem.dataset.description;
//     document.getElementById('myModal').style.display = 'block';
// }

// function updateTodo(event) {
//     event.preventDefault();
//     const todoItem = event.target.parentElement;
//     todoItem.querySelector('.todo-item').innerText = document.getElementById('editTitle').value;
//     todoItem.dataset.description = document.getElementById('editDescription').value;
//     closeModal();
// }

// function closeModal() {
//     document.getElementById('myModal').style.display = 'none';
// }

// todoList.addEventListener('click', toggleComplete);
// todoList.addEventListener('click', function(event) {
//     if (event.target.classList.contains('edit-button')) {
//         editTodo(event);
//     }
// });

// document.getElementById('editForm').addEventListener('submit', updateTodo);

// // Add event listener for the 'details' button
// todoList.addEventListener('click', function(event) {
//     if (event.target.classList.contains('details-button')) {
//         showDetails(event);
//     }
// });

// // Show details function
// function showDetails(event) {
//     const item = event.target;
//     const todoItem = item.parentElement;
//     document.getElementById('editTitle').value = todoItem.querySelector('.todo-item').innerText;
//     document.getElementById('editDescription').value = todoItem.dataset.description;
//     document.getElementById('myModal').style.display = 'block';
// }

