let todoList = [];

function addTodo() {
    let inputElement = document.querySelector('#todo-input');
    let todoItem = inputElement.value;
    console.log('todo', todoItem);
    todoList.push(todoItem);
    inputElement.value = '';
    displayItems();
}

function displayItems() {
    let containerElement = document.querySelector('.todo-container');
    let newHtml = '';
    for (let i = 0; i < todoList.length; i++) {
        newHtml += `
       <div>
        <span>${todoList[i]}</span>
        <button class="delete-button" onclick="todoList.splice(${i}, 1); displayItems();">Delete</button>
       </div> `;
    }
    containerElement.innerHTML = newHtml;
}

displayItems();
