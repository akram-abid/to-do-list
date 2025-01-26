import "./style.css";
import { todoFlow } from "./todos";
import { domBuilder } from "./domBuilder";
import { dialogHandler } from "./dialogHandler";
import { tasksHandler } from "./tasksHandler";
import { storage } from "./storage";
import { format, formatDistance, differenceInDays } from "date-fns";
import { tr } from "date-fns/locale";
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
        let first = 0;
        const size = tasksHandler.getTasks().length;
        for (let i = 0; i < size; i++) {
            if (
                tasksHandler.getTasks()[i].list ==
                graphicHandler.getCurrentProject()
            ) {
                domBuilder.taskListCreator(i);
                if (first == 0) {
                    reloadTaskDeatails(i);
                    first++;
                }
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

const today = document.querySelector(".today");
console.log(today);
today.addEventListener("click", () => {
    const taskListPaper = document.querySelector(".task-list-paper");
    taskListPaper.innerHTML = "";
    let first = 0;
    const size = tasksHandler.getTasks().length;
    for (let i = 0; i < size; i++) {
        if (
            tasksHandler.getTasks()[i].dueDate ===
            format(new Date(), "yyyy-MM-dd")
        ) {
            domBuilder.taskListCreator(i);
            if (first == 0) {
                graphicHandler.reloadTaskDeatails(i);
                first++;
            }
        }
    }
});

const week = document.querySelector(".week");
week.addEventListener("click", () => {
    const taskListPaper = document.querySelector(".task-list-paper");
    taskListPaper.innerHTML = "";
    let first = 0;
    const size = tasksHandler.getTasks().length;
    for (let i = 0; i < size; i++) {
        if (
            differenceInDays(
                format(new Date(), "yyyy-MM-dd"),
                tasksHandler.getTasks()[i].dueDate
            ) < 7 &&
            differenceInDays(
                format(new Date(), "yyyy-MM-dd"),
                tasksHandler.getTasks()[i].dueDate
            ) >= 0
        ) {
            domBuilder.taskListCreator(i);
            if (first == 0) {
                graphicHandler.reloadTaskDeatails(i);
                first++;
            }
        }
    }
});

console.log(typeof(differenceInDays(
  format(new Date(), "yyyy-MM-dd"),
  tasksHandler.getTasks()[2].dueDate
)));

const all = document.querySelector(".all");
all.addEventListener("click", () => {
    const taskListPaper = document.querySelector(".task-list-paper");
    taskListPaper.innerHTML = "";
    const size = tasksHandler.getTasks().length;
    for (let i = 0; i < size; i++) {
        domBuilder.taskListCreator(i);
    }
});

const complted = document.querySelector(".completed");
complted.addEventListener("click", () => {
    const taskListPaper = document.querySelector(".task-list-paper");
    taskListPaper.innerHTML = "";
    let first = 0;
    const size = tasksHandler.getTasks().length;
    for (let i = 0; i < size; i++) {
        if (tasksHandler.getTasks()[i].state == true) {
            domBuilder.taskListCreator(i);
            if (first == 0) {
                graphicHandler.reloadTaskDeatails(i);
                first++;
            }
        }
    }
});
