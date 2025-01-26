import { domBuilder } from "./domBuilder";

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
const task = Task("just don't it", "motivation", "now", "high", "Work", false);

export const tasksHandler = (function () {
    let tasks = [];
    const insilizer = () => {
        tasks.push(task);
        localStorage.setItem("task", JSON.stringify(tasks));
    };
    

    const addTask = (title, discribtion, dueDate, priority, list, state) => {
        const tmpTasks = localStorage.getItem("task") ? JSON.parse(localStorage.getItem("task")) : [];
        console.log("chouf hna ", tasks );
        console.log("seyi seyi  ", tasks);
        tmpTasks.push(Task(title, discribtion, dueDate, priority, list, state));
        localStorage.setItem("task", JSON.stringify(tmpTasks));
        refresh();
    };

    const getTasks = () => {
        console.log("i am getting the data ", JSON.parse(localStorage.getItem("task")));
        refresh();
        return tasks;
    };

    const deleteTask = (index) => {
        tasks.splice(index, 1);
        localStorage.setItem("task", JSON.stringify(tasks));
        refresh();
    };

    const refresh = () => {
        tasks = localStorage.getItem("task") ? JSON.parse(localStorage.getItem("task")) : [];
        
    };

    const changeTaskState = (index, state) => {
        tasks[index].state = state;
        localStorage.setItem("task", JSON.stringify(tasks));
    };

    return {
        addTask,
        getTasks,
        deleteTask,
        changeTaskState,
        insilizer
    };
})();
