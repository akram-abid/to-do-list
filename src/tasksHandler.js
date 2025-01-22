function Task(title, discribtion, dueDate, priority){
    return{
        title,
        discribtion,
        dueDate,
        priority
    }
}

const addButtton = document.querySelector(".add-task");

export const tasksHandler = (function(){
    const tasks = [];
    const addTask = (task) => {
        tasks.push(task);
    };

})();