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
//const task1 = Task("just do it", "nike", "today", "high", "Work", true);
//const task2 = Task("just don't it", "adidas", "tomorow", "high", "Work", false);

export const tasksHandler = (function () {
    //let tasks = [task1, task2];

    let tasks = [];
    

    const addTask = (title, discribtion, dueDate, priority, list, state) => {
        const tmpTasks = Object.values(localStorage.getItem("task"))
        console.log("chouf hna "+ Array.isArray(tmpTasks));
        console.log("seyi seyi  "+ tmpTasks);
        tmpTasks.push(Task(title, discribtion, dueDate, priority, list, state));
        localStorage.setItem("task", tmpTasks);
        refresh();
    };

    const getTasks = () => {
        return tasks;
    };

    const deleteTask = (index) => {
        tasks.splice(index, 1);
        localStorage.setItem("task", tasks);
        refresh();
    };

    const refresh = () => {
        tasks = Object.values(localStorage.getItem("task"));
    };

    const changeTaskState = (index, state) => {
        tasks[index].state = state;
        localStorage.setItem("task", tasks);
    };

    return {
        addTask,
        getTasks,
        deleteTask,
        changeTaskState,
    };
})();
