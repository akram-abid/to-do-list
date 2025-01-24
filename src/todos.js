import { storage } from "./storage";

export const todoFlow = (function () {
    let todos = [];

    const addTodo = (title) => {
        const todoFromStore = JSON.parse(localStorage.getItem("todo"));
        todoFromStore.push(title);
        console.log("termti" + todoFromStore[2]);
        localStorage.setItem("todo", JSON.stringify(todoFromStore));
        refresh()

    };

    const refresh = () => {
        todos = JSON.parse(localStorage.getItem("todo"));
    };

    const getTodos = () => {
        return JSON.parse(localStorage.getItem("todo"));
    };

    const deleteTodo = (index) => {
        refresh();
        todos.splice(index, 1);
        localStorage.setItem("todo", JSON.stringify(todos));
    };

    return {
        addTodo,
        getTodos,
        deleteTodo,
        refresh
    };
})();
