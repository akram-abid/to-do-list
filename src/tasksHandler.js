import { domBuilder } from "./domBuilder";

function Task(title, discribtion, dueDate, priority, list){
    return{
        title,
        discribtion,
        dueDate,
        priority,
        list
    }
}
const task1 = Task("just do it", "nike", "today", "high", "Home");
const task2 = Task("just don't it", "adidas", "today", "high", "Home");

const addButtton = document.querySelector(".add-task");

export const tasksHandler = (function(){
    const tasks = [task1, task2];
    const addTask = (task) => {
        tasks.push(task);
    };

    const getTasks = () => {
        return tasks
    };

    return {
        addTask,
        getTasks
    }
})();