import "./style.css";
import { todoFlow } from "./todos";
import { domBuilder } from "./domBuilder";
import { dialogHandler } from "./dialogHandler";
import { tasksHandler } from "./tasksHandler";
const projectList = document.querySelector(".project-list");

export const graphicHandler = (function () {
  let currentTodoProject = todoFlow.getTodos()[0];

  const changeCurrentProject = (project) => {
      currentTodoProject = project;
  };

  const todoProjectsLoader = () => {
    projectList.innerHTML = "";
    for (let i = 0; i < todoFlow.getTodos().length; i++) {
      domBuilder.navBarElementCreator(i);
    }
  };

  const getCurrentProject = () => {
    return currentTodoProject;
  };

  const contentHandler = (i) => {
    const p = document.querySelector(".todo-title > p");
    p.innerHTML = todoFlow.getTodos()[i];
  };

  const reloadTasks = () => {
    const taskListPaper = document.querySelector(".task-list-paper");
    taskListPaper.innerHTML = "";
    for (let i = 0; i < tasksHandler.getTasks().length; i++){
      if(tasksHandler.getTasks()[i].list.toUpperCase() == graphicHandler.getCurrentProject().toUpperCase()){
        domBuilder.taskListCreator(i);
      }
    }
};
  return {
    todoProjectsLoader,
    contentHandler,
    reloadTasks,
    changeCurrentProject,
    getCurrentProject
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
    dialogHandler.showTaskDialog();
});

