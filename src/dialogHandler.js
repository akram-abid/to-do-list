const todoContent = document.querySelector(".to-do-lists");
import { todoFlow } from "./todos";
import { graphicHandler } from "./main";

const projectList = document.querySelector(".project-list");

export const dialogHandler = (function () {

  const projectDialog = document.querySelector("dialog");
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

  const showProjectDialog = () => {
    projectDialog.showModal();
  };
    
  return {
    showProjectDialog,
  };
})();
