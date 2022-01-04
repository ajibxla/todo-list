let todoInput = document.querySelector(".todo-text");
let submitBtn = document.querySelector(".submit-btn");
let todoItems = document.querySelector(".todo-items");
let selector = document.querySelector("#selector");

submitBtn.addEventListener("click", addItem);
selector.addEventListener("click", filter);

function addItem(e) {
  e.preventDefault();
  let todoItem = document.createElement("div");
  todoItem.classList.add("todo-item");
  todoItems.appendChild(todoItem);
  let todoLi = document.createElement("li");
  todoLi.classList.add("todo-li");
  todoItem.appendChild(todoLi);
  todoLi.innerText = todoInput.value;

  let completeBtn = document.createElement("button");
  completeBtn.classList.add("complete-btn");
  completeBtn.innerHTML = '<i class="fas fa-check"></i>';
  todoItem.appendChild(completeBtn);

  let trashBtn = document.createElement("button");
  trashBtn.classList.add("trash-btn");
  trashBtn.innerHTML = '<i class="fas fa-trash"></i>';
  todoItem.appendChild(trashBtn);

  todoInput.value = "";

  completeBtn.addEventListener("click", submit);

  function submit() {
    todoItem.classList.toggle("submit");
  }

  trashBtn.addEventListener("click", trash);
  function trash(e) {
    todoItem.classList.add("trash");

    let item = e.target;
    let itemParent = item.parentElement;
    itemParent.addEventListener("transitionend", () => {
      itemParent.remove();
    });
    console.log(e.target);
  }
}

function filter(e) {
  let allItems = todoItems.childNodes;
  allItems.forEach((todo) => {
    switch (e.target.value) {
      case "all":
        todo.style.display = "flex";
        break;
      case "completed":
        if (todo.classList.contains("submit")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
      case "uncompleted":
        if (!todo.classList.contains("submit")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
    }
  });
}
