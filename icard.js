const storedTodoList = JSON.parse(localStorage.getItem('todoList')) || [];

const todoList = storedTodoList;

renderTodoList();

function renderTodoList() {
    let todoListHtml = '';

    let number = 1;
    for(let i = 0; i < todoList.length; i++) {
        const todo = todoList[i];
            
            const picture = todo;
            
            
            const html = `
            <div class="js-main-container">
                <div>
                    <img src="${picture}" class = "js-picture">
                </div>
                <div class = "cardprice">
                    <div class = "js-card-item">Card Item 0${number}</div>
                    <div class = "js-price"> $15.99/- </div>
                </div>
                
                <div onclick="
                todoList.splice(${i}, 1);
                renderTodoList();
                " class="delete-todo-button">
                    <i class="fa-solid fa-xmark"></i>
                </div>
            </div>
            `;
           
            todoListHtml += html;
            number++;
    }
            document.querySelector('.js-add-to-card').innerHTML = todoListHtml;
}

function addTodo(value) {
   // let element = document.querySelector('.js-name-input');
    let picture = value;

    todoList.push(picture);
    saveTodoListToLocalStorage();
    renderTodoList();
}

function saveTodoListToLocalStorage() {
    localStorage.setItem('todoList', JSON.stringify(todoList));
}


function cardItem() {

    let hovera = document.querySelector('.js-add-to-card');

    let hoveraStyle = window.getComputedStyle(hovera);

    if (hoveraStyle.display === 'none') {
        hovera.style.display = 'block'; 
        hovera.style.right = '0';         
    } else {
        hovera.style.display = 'none';
        hovera.style.right = '-50%';       
    }

}

