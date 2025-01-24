import { storage } from "./storage";

export const todoFlow = (function () {
    let todos = [];

    const addTodo = (title) => {
        //todos.push(title);
        const todoFromStore = JSON.parse(localStorage.getItem("todo"));
        //todoFromStore.push(title);
        console.log("termti"+todoFromStore.valueOf().values());
        localStorage.setItem("todo", JSON.stringify(todoFromStore));
    };

    const refresh = () => {
        todos = localStorage.getItem("todoStore");
    };

    const getTodos = () => {
        return localStorage.getItem("todoStore");
    };

    const deleteTodo = (index) => {
        todos.splice(index, 1);
    };

    return {
        addTodo,
        getTodos,
        deleteTodo,
    };
})();
