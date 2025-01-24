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
        todos = localStorage.getItem("todoStore");
    };

    const getTodos = () => {
        return todos;
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
