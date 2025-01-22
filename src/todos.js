


export const todoFlow = (function (){
    let todos = [];
    todos.push("Home");
    todos.push("Work");
    todos.push("Study");

    const addTodo = (title) => {
        todos.push(title)
    };

    const getTodos = ()=> {
        return todos;
    };

    const deleteTodo = (index) => {
        todos.splice(index , 1);
    };

    return {
        addTodo,
        getTodos,
        deleteTodo
    };

})();

