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
        const size = tasksHandler.getTasks().length;
        console.log("this is the size of it ", size);
        console.log("this is it ", tasksHandler.getTasks());
        for (let i = 0; i < size ; i++) {
          console.log("this is the condition ", tasksHandler.getTasks()[i].list == graphicHandler.getCurrentProject());
          console.log("elements of cond ", graphicHandler.getCurrentProject());
          console.log("another element is from the list ", tasksHandler.getTasks()[i].list);
            if (
                tasksHandler.getTasks()[i].list ==
                graphicHandler.getCurrentProject()
            ) {
                console.log("tryin to create an element", currentTodoProject);
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

console.log("mn lwel " + todoFlow.getTodos());

if (JSON.parse(localStorage.getItem("todo")) == []) {
    storage.intializeStorage();
    console.log("hayhay");
    graphicHandler.todoProjectsLoader();
    console.log(JSON.parse(localStorage.getItem("todo")));
    todoFlow.refresh();
    console.log("giving the order to start creating");
    graphicHandler.reloadTasks();
}

function Task(title, discribtion, dueDate, priority, list, state) {
    return {
        title,
        discribtion,
        dueDate,
        priority,
        list,
        state,
    };
}

const t1 = Task("dir jedha", "nike", "today", "high", "hak", true);
const t2 = Task("hak berk", "nike", "today", "high", "hak", true);
const fuck = [];
//fuck.push(t2);

//  localStorage.setItem("task", JSON.stringify(fuck));

console.log("giving the order to start creating");
graphicHandler.reloadTasks();
console.log("done creating");

const retrivedData = localStorage.getItem("tasko")
    ? JSON.parse(localStorage.getItem("tasko"))
    : "empty";
console.log("hamlik tasks ", JSON.parse(localStorage.getItem("task")));
console.log("aewedi hak ", retrivedData);
console.log(tasksHandler.getTasks());

const tmpTasks = Object.values(localStorage.getItem("task"));
console.log("chouf hna " + Array.isArray(tmpTasks));

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
