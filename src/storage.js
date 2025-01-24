export const storage = (function (){

    const storageAvailable = (type) => {
        let storage;
        try {
          storage = window[type];
          const x = "__storage_test__";
          storage.setItem(x, x);
          storage.removeItem(x);
          return true;
        } catch (e) {
          return (
            e instanceof DOMException &&
            e.name === "QuotaExceededError" &&
            storage &&
            storage.length !== 0
          );
        }
      }
      
    const verifyStorageExist = () => {
        if (storageAvailable("localStorage")) {
            console.log("yay its working");
        } else {
            console.log("cheers you have a problem");
        } 
    };

    const verifyItemExist = (key) => {
        if(localStorage.getItem(key) === null){
            return false;
        }else{
            return true;
        }
    };

    const intializeStorage = () => {
        const todoStore = [];

        todoStore.push("Home");
        todoStore.push("Work");
        todoStore.push("Study");

        localStorage.setItem("todo", JSON.stringify(todoStore));
        //return JSON.parse(localStorage.getItem("todoStore"));
    };

    return {
        verifyStorageExist,
        verifyItemExist,
        intializeStorage
    }
})();