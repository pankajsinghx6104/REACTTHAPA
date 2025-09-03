const todoKey = "reactTodo";

export const getLocaleStorageTodoData = ()=>{
    const rawTodos = localStorage.getItem(todoKey);
    if(!rawTodos)return[];
    return JSON.parse(rawTodos);
};

export const setLocaleStorageTodoData = (task)=>{
    //todo add to localeStorag
  return localStorage.setItem(todoKey,JSON.stringify(task))
}