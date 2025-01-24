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
                tasksHandler.getTasks()[i].list ==
                graphicHandler.getCurrentProject()
            ) {
                domBuilder.taskListCreator(i);
            }
        }
    };

    const reloadTaskDeatails = (index) => {
        const taskTitle = document.querySelector(".task-title");
        taskTitle.innerHTML = tasksHandler.getTasks()[index].title;

        const discribtion = document.querySelector(".discribtion");
        discribtion.innerHTML = tasksHandler.getTasks()[index].discribtion;

        const prios = document.querySelector("#prios");
        prios.value = tasksHandler.getTasks()[index].priority;

        const dueDate = document.querySelector(".due-date");
        dueDate.innerHTML = tasksHandler.getTasks()[index].dueDate;
        console.log("look its fucking working");
    };

    return {
        todoProjectsLoader,
        contentHandler,
        reloadTasks,
        changeCurrentProject,
        getCurrentProject,
        reloadTaskDeatails,
    };
})();

console.log("mn lwel "+ todoFlow.getTodos());

if (JSON.parse(localStorage.getItem("todo")) == [] ) {
    storage.intializeStorage();
    console.log("hayhay");
    graphicHandler.todoProjectsLoader();
    console.log(JSON.parse(localStorage.getItem("todo")));
    todoFlow.refresh();
}
console.log("aewedi hak " +localStorage.getItem("todo"));

graphicHandler.reloadTasks(); 
graphicHandler.todoProjectsLoader();

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
