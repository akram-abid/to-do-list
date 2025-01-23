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
const task1 = Task("just do it", "nike", "today", "high", "Home");
const task2 = Task("just don't it", "adidas", "tomorow", "high", "work");

export const tasksHandler = (function () {
    const tasks = [task1, task2];
    const addTask = (title, discribtion, dueDate, priority, list, state) => {
        tasks.push(Task(title, discribtion, dueDate, priority, list, state));
    };

    const getTasks = () => {
        return tasks;
    };

    const deleteTask = (index) => {
        tasks.splice(index, 1);
    };

    const changeTaskState = (index, state) => {
        tasks[index].state = state;
    };

    return {
        addTask,
        getTasks,
        deleteTask,
        changeTaskState,
    };
})();
