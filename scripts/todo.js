let todoListBox = document.getElementsByClassName("todo-list")[0];
let todoInput = document.querySelectorAll("div.todo > input")[0];

function loadTodos() {
  const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
  savedTodos.forEach((todoText) => {
    renderTodo(todoText);
  });
}

function renderTodo(todoText) {
  let todoList = document.createElement("p");
  todoList.innerText = todoText;
  todoListBox.append(todoList);

  todoList.addEventListener("click", () => {
    todoList.style.textDecoration =
      todoList.style.textDecoration === "line-through"
        ? "none"
        : "line-through";
  });

  todoList.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    removeTodoFromLocalStorage(todoList.innerText);
    todoList.remove();
  });
}

function saveTodoToLocalStorage(todoText) {
  const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
  savedTodos.push(todoText);
  localStorage.setItem("todos", JSON.stringify(savedTodos));
}

function removeTodoFromLocalStorage(todoText) {
  const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
  const updatedTodos = savedTodos.filter((todo) => todo !== todoText);
  localStorage.setItem("todos", JSON.stringify(updatedTodos));
}

todoInput.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    const todoText = todoInput.value.trim();
    if (todoText) {
      renderTodo(todoText);
      saveTodoToLocalStorage(todoText);
      todoInput.value = "";
    }
  }
});

loadTodos();
