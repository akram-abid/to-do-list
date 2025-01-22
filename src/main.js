import "./style.css";
import { todoFlow } from "./todos";

const projectList = document.querySelector(".project-list");
console.log(todoFlow.getTodos());
const createTodo = (i) => {
  const projectContainer = document.createElement("div");
  projectList.appendChild(projectContainer);
  projectContainer.classList.add("project-container");
  const deletProject = document.createElement("button");
  const todoProject = document.createElement("button");
  projectContainer.appendChild(todoProject);
  projectContainer.appendChild(deletProject);
  todoProject.innerHTML = todoFlow.getTodos()[i];
  todoProject.dataset.value = i;
  todoProject.addEventListener("click", (e) => {
    console.log("tryin to change the content " + e.target.dataset.value);
  });
  todoProject.classList.add("project");
  deletProject.classList.add("delet-project");
  deletProject.innerHTML = "x";
  deletProject.dataset.value = i;
  deletProject.addEventListener("click", () => {
    console.log("trying to delete the project");
  });
  todoProject.addEventListener("mouseenter", () => {
    deletProject.style.display = "block";
  });
  todoProject.addEventListener("mouseleave", () => {
    deletProject.style.display = "none";
  });
  deletProject.addEventListener("mouseenter", () => {
    deletProject.style.display = "block";
  });
  deletProject.addEventListener("mouseleave", () => {
    deletProject.style.display = "none";
  });
  deletProject.addEventListener("click", (e) => {
    todoFlow.deleteTodo(e.target.dataset.value);
    console.log(e.target.dataset.value);
    graphicHandler.todoProjectsLoader();
  });
};
const graphicHandler = (function () {
  const todoProjectsLoader = () => {
    projectList.innerHTML = "";
    for (let i = 0; i < todoFlow.getTodos().length; i++) {
      createTodo(i);
    }
  };

  return {
    todoProjectsLoader,
  };
})();

const projectDialog = document.querySelector("dialog");
console.log(projectDialog);
const input = document.querySelector(".add-input");
const projectAddBtn = document.querySelector(".add-btn");
projectAddBtn.addEventListener("click", () => {
  todoFlow.addTodo(input.value);
  console.log(input.value);
  projectList.innerHTML = "";
  graphicHandler.todoProjectsLoader();
  projectDialog.close();
  input.value = "";

});
const projectCancel = document.querySelector(".cancelTodo");
console.log(projectCancel);
projectCancel.addEventListener("click", () => {
  projectDialog.close();
  input.value = "";
});

graphicHandler.todoProjectsLoader();
const addTodoProjectButton = document.querySelector(".add-project");
addTodoProjectButton.addEventListener("click", () => {
  projectDialog.showModal();
});
