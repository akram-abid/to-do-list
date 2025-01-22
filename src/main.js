import "./style.css";
import { todoFlow } from "./todos";
import { domBuilder } from "./domBuilder";
import { dialogHandler } from "./dialogHandler";
import { tasksHandler } from "./tasksHandler";
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

  const reloadTasks = () => {
    const taskListPaper = document.querySelector(".task-list-paper");
    taskListPaper.innerHTML = "";
    for (let i = 0; i < tasksHandler.getTasks().length; i++){
        domBuilder.taskListCreator(i);
//        console.log(tasksHandler.getTasks()[i]);
        console.log("hak hak hak"+tasksHandler.getTasks()[i].title);

    }
};
  return {
    todoProjectsLoader,
    contentHandler,
    reloadTasks
  };
})();

graphicHandler.todoProjectsLoader();
graphicHandler.reloadTasks();
console.log(tasksHandler.getTasks());

const addTodoProjectButton = document.querySelector(".add-project");
addTodoProjectButton.addEventListener("click", () => {
  dialogHandler.showProjectDialog();
});

const addTaskButton = document.querySelector(".add-task");
addTaskButton.addEventListener("click", () => {
    graphicHandler.reloadTasks();
});
