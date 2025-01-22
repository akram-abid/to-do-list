import "./style.css";
import { todoFlow } from "./todos";
import { domBuilder } from "./domBuilder";

const projectList = document.querySelector(".project-list");

export const graphicHandler = (function () {
  const todoProjectsLoader = () => {
    projectList.innerHTML = "";
    for (let i = 0; i < todoFlow.getTodos().length; i++) {
        domBuilder.navBarElementCreator(i);
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
