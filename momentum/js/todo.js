export const todo = () => {
  const todoOpen = document.querySelector(".todo-icon");
  const todoBlock = document.querySelector(".todo-block");
  const overlay = document.querySelector(".overlay");
  const todoInput = document.querySelector(".todo-input");
  const todoList = document.querySelector(".todo-list");
  const todoBtn = document.querySelector(".todo-add-btn");

  if (localStorage.getItem("todo")) {
    JSON.parse(localStorage.getItem("todo")).forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      const checkbox = document.createElement("input");
      const deleteBtn = document.createElement("span");
      deleteBtn.classList.add("icono-cross");
      checkbox.type = "checkbox";
      li.prepend(checkbox);
      li.appendChild(deleteBtn);
      todoList.appendChild(li);
      li.classList.add("todo-item");

      checkbox.addEventListener("click", () => {
        li.classList.toggle("checked");
      });

      deleteBtn.addEventListener("click", () => {
        li.innerHTML = "";
      });
    });
  }

  todoOpen.addEventListener("click", () => {
    todoBlock.classList.toggle("active");
    overlay.classList.add("active");
  });

  overlay.addEventListener("click", () => {
    todoBlock.classList.remove("active");
    overlay.classList.remove("active");
  });

  function renderTodoList() {
    const li = document.createElement("li");
    li.textContent = todoInput.value;
    const checkbox = document.createElement("input");
    const deleteBtn = document.createElement("span");

    checkbox.addEventListener("click", () => {
      console.log(1);
    });
    deleteBtn.classList.add("icono-cross");
    checkbox.type = "checkbox";
    li.prepend(checkbox);
    li.appendChild(deleteBtn);
    todoList.appendChild(li);
    li.classList.add("todo-item");
    todoInput.value = "";
    let liArray;
    localStorage.getItem("todo")
      ? (liArray = JSON.parse(localStorage.getItem("todo")))
      : (liArray = []);
    liArray.push(li.textContent);
    checkbox.addEventListener("click", () => {
      li.classList.toggle("checked");
    });
    deleteBtn.addEventListener("click", () => {
      li.innerHTML = "";
    });
    localStorage.setItem("todo", JSON.stringify(liArray));
  }

  todoBtn.addEventListener("click", () => {
    renderTodoList();
  });
};
