import "./style.css";
import { todoFlow } from "./todos";
import { domBuilder } from "./domBuilder";
import { dialogHandler } from "./dialogHandler";
import { tasksHandler } from "./tasksHandler";
import { storage } from "./storage";
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
        for (let i = 0; i < tasksHandler.getTasks().length; i++) {
            if (
                tasksHandler.getTasks()[i].list.toUpperCase() ==
                graphicHandler.getCurrentProject().toUpperCase()
            ) {
                domBuilder.taskListCreator(i);
            }
        }
    };

    const reloadTaskDeatails = (index) => {
      const taskTitle = document.querySelector(".task-title");
      taskTitle.innerHTML = tasksHandler.getTasks()[index].title;

      const discribtion= document.querySelector(".discribtion");
      discribtion.innerHTML = tasksHandler.getTasks()[index].discribtion;
      
      const prios= document.querySelector("#prios");
      prios.value = tasksHandler.getTasks()[index].priority;
      
      const dueDate= document.querySelector(".due-date");
      dueDate.innerHTML = tasksHandler.getTasks()[index].dueDate;
      console.log("look its fucking working");
    };

    return {
        todoProjectsLoader,
        contentHandler,
        reloadTasks,
        changeCurrentProject,
        getCurrentProject,
        reloadTaskDeatails
    };
})();

const tab = ["ak", "ra", "m"];
localStorage.setItem("awedi", JSON.stringify(tab));
console.log("try " + typeof(Object.values(JSON.parse(localStorage.getItem("awedi")))));

const obj = JSON.parse(localStorage.getItem("todo"));
console.log("hak tab   "+typeof(Object.values(obj)));


storage.intializeStorage();

todoFlow.addTodo("akram");

if(storage.verifyItemExist("todos")){
  console.log("firast"+ typeof(localStorage.getItem("todoStore")));
}else{
  console.log("oacih"+JSON.parse(localStorage.getItem("todoStore")));
}
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
