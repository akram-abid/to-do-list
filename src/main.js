import "./style.css";
import { todoFlow } from "./todos";
import { domBuilder } from "./domBuilder";
import { dialogHandler } from "./dialogHandler";
const projectList = document.querySelector(".project-list");

export const graphicHandler = (function () {
  const todoProjectsLoader = () => {
    projectList.innerHTML = "";
    for (let i = 0; i < todoFlow.getTodos().length; i++) {
      domBuilder.navBarElementCreator(i);
    }
  };

  const contentHandler = (i) => {
    const p = document.querySelector(".todo-title > p");
    p.innerHTML = todoFlow.getTodos()[i];
  };

  return {
    todoProjectsLoader,
    contentHandler
  };
})();

graphicHandler.todoProjectsLoader();

const addTodoProjectButton = document.querySelector(".add-project");
addTodoProjectButton.addEventListener("click", () => {
  dialogHandler.showProjectDialog();
});
