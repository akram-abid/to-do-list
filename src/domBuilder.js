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
      graphicHandler.changeCurrentProject( todoFlow.getTodos()[e.target.dataset.value]);
      console.log("a halouf " + todoFlow.getTodos()[e.target.dataset.value]+" w haw wech kayen "+ graphicHandler.getCurrentProject());
      graphicHandler.reloadTasks();
    });
    todoProject.classList.add("project");
    deletProject.classList.add("delet-project");
    deletProject.innerHTML = "x";
    deletProject.dataset.value = i;
    deletProject.addEventListener("click", () => {
      console.log("a hlouf"+graphicHandler.getCurrentProject());
      graphicHandler.reloadTasks();
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
    task.dataset.value = i;

    const removeTask = document.createElement("button");
    removeTask.classList.add("remove-task");
    removeTask.innerHTML = "x";

    const inputHolder = document.createElement("div");
    inputHolder.classList.add("input-holder");
    inputHolder.dataset.value = i;

    const taskTodo = document.createElement("label");
    taskTodo.setAttribute("for", `${tasksHandler.getTasks()[i].title}`);

    const p = document.createElement("p");
    p.innerHTML = tasksHandler.getTasks()[i].title;

    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("id", `${tasksHandler.getTasks()[i].title}`);
    checkbox.setAttribute("name", "state");
    checkbox.setAttribute("value", `${tasksHandler.getTasks()[i].title}`);
    checkbox.checked = tasksHandler.getTasks()[i].state;
    checkbox.dataset.value = i;
    
    if (checkbox.checked) {
      p.style.textDecoration = "line-through";
      p.style.color = "#f5f5f559";
      checkbox.style.opacity = 0.4;
      tasksHandler.changeTaskState(checkbox.dataset.value, checkbox.checked);
    }else{
      p.style.textDecoration = "none"
      p.style.color = "white";
      checkbox.style.opacity = 1;
      tasksHandler.changeTaskState(checkbox.dataset.value, checkbox.checked);
    }
    
    taskTodo.appendChild(p);

    inputHolder.appendChild(checkbox);
    inputHolder.appendChild(taskTodo);
    
    task.appendChild(inputHolder);
    task.appendChild(removeTask);

    taskListPaper.appendChild(seperator);

    taskTodo.addEventListener("click", () => {
      //console.log("haya dertha");
      //p.style.textDecoration = "line-through";
    });
    checkbox.addEventListener("click", () => {
      if (checkbox.checked) {
        p.style.textDecoration = "line-through";
        p.style.color = "#f5f5f559";
        checkbox.style.opacity = 0.4;
        tasksHandler.changeTaskState(checkbox.dataset.value, checkbox.checked);
      }else{
        p.style.textDecoration = "none"
        p.style.color = "white";
        checkbox.style.opacity = 1;
        tasksHandler.changeTaskState(checkbox.dataset.value, checkbox.checked);
      }
    });

    inputHolder.addEventListener("mouseenter", () => {
      removeTask.style.display = "block";
    });
    inputHolder.addEventListener("mouseleave", () => {
      removeTask.style.display = "none";
    });

    inputHolder.addEventListener("click", (e) => {
      graphicHandler.reloadTaskDeatails(e.target.dataset.value);
    });

    removeTask.addEventListener("mouseenter", () => {
      removeTask.style.display = "block";
    });
    removeTask.addEventListener("mouseleave", () => {
      removeTask.style.display = "none";
    });
    removeTask.addEventListener("click", () => {
        console.log("hihih");
        tasksHandler.deleteTask(i);
        graphicHandler.reloadTasks();
    });
  };

  return {
    navBarElementCreator,
    taskListCreator,
  };
})();
