import { graphicHandler } from "./main";
import { tasksHandler } from "./tasksHandler";
import { todoFlow } from "./todos";

export const domBuilder = (function () {
  const navBarElementCreator = (i) => {
    const projectList = document.querySelector(".project-list");
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
      graphicHandler.contentHandler(e.target.dataset.value);
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

  const taskListCreator = (i) => {
    const taskListPaper = document.querySelector(".task-list-paper");
    const seperator = document.createElement("hr");
    const task = document.createElement("div");
    taskListPaper.appendChild(task);
    task.classList.add("task");
    const taskTodo = document.createElement("label");
    taskTodo.setAttribute("for", `${tasksHandler.getTasks()[i].title}`);
    const p = document.createElement("p");
    p.innerHTML = tasksHandler.getTasks()[i].title;
    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("id", `${tasksHandler.getTasks()[i].title}`);
    checkbox.setAttribute("name", "state");
    checkbox.setAttribute("value", `${tasksHandler.getTasks()[i].title}`);
    task.appendChild(checkbox);
    task.appendChild(taskTodo);
    taskTodo.appendChild(p);
    taskListPaper.appendChild(seperator);

    taskTodo.addEventListener("click", () => {
      console.log("haya dertha");
      p.style.textDecoration = "line-through";
    });
    checkbox.addEventListener("click", () => {
      if (checkbox.checked) {
        p.style.textDecoration = "line-through";
        p.style.color = "#f5f5f559";
      }else{
        p.style.textDecoration = "none"
        p.style.color = "white";
      }
    });
  };

  return {
    navBarElementCreator,
    taskListCreator,
  };
})();
