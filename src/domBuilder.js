import { graphicHandler } from "./main";
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

  return {
    navBarElementCreator,
  };
})();
