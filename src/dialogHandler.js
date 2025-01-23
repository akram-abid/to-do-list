const todoContent = document.querySelector(".to-do-lists");
import { todoFlow } from "./todos";
import { graphicHandler } from "./main";
import { tasksHandler } from "./tasksHandler";

const projectList = document.querySelector(".project-list");

export const dialogHandler = (function () {
  const projectDialog = document.querySelector(".st-dialog");
  projectDialog.classList.add("dialog-todo-handel");
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

  const taskDialog = document.querySelector(".add-task-dialog");
  const taskDialogAddbtn = document.querySelector(".dialog-add-task-button");
  const taskDialogCancelBtn = document.querySelector(".dialog-close-task");
  const titleInput = document.querySelector("#task-ttl");
  const discribtionInput = document.querySelector("#task-dsc");
  const dueDateInput = document.querySelector("#task-s-date");
  const priorityInput = document.querySelector(".prios");

  taskDialogAddbtn.addEventListener("click", () => {
    tasksHandler.addTask(
      titleInput.value,
      discribtionInput.value,
      dueDateInput.value,
      priorityInput.value,
      graphicHandler.getCurrentProject(),
      false
    );
    graphicHandler.reloadTasks();
    hideTaskDialg();  
    titleInput.value ="";
      discribtionInput.value = "";
      dueDateInput.value = "";
      priorityInput.value = "";
  });
  taskDialogCancelBtn.addEventListener("click", () => {
    taskDialog.close();
  });

  const showTaskDialog = () => {
    taskDialog.showModal();
  };
  const hideTaskDialg = () => {
    taskDialog.close();
  };

  return {
    showProjectDialog,
    showTaskDialog,
    hideTaskDialg,
  };
})();
