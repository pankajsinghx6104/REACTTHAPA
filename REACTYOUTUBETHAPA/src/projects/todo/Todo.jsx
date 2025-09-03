import "./Todo.css";
import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import TodoDate from "./TodoDate";
import { getLocaleStorageTodoData,setLocaleStorageTodoData } from "./TodoLocalStorage";



const Todo = () => {
  const [task, setTask] = useState(()=>getLocaleStorageTodoData());

  const handleFormSubmit = (inputValue) => {
    const { id, content, checked } = inputValue;
    // to check if the input value is emapty or not
    if (!content) return;
    // to check if the data is already exixting or not
    // if (task.includes(content)) {
    //   alert("Task already exists");
    //   return;
    // }

    const ifTodoContentMatched = task.find(
      (curTask) => curTask.content === content
    );
    if (ifTodoContentMatched) return;

    setTask((prevTasks) => [...prevTasks, { id, content, checked }]);
  };
  // todo local storage
setLocaleStorageTodoData(task)
  // Delete Task

  const handleDeleteBtn = (value) => {
    const updatedTask = task.filter((curTask) => curTask.content !== value);
    setTask(updatedTask);
  };
  // handle check todo
  const HandleCheckedTodo = (content) => {
    const updatedTask = task.map((curTask) => {
      if (curTask.content === content) {
        return { ...curTask, checked: !curTask.checked };
      } else {
        return curTask;
      }
    });
      setTask(updatedTask);

  };
  const clearAllbtn = () => {
    setTask([]);
  };

  return (
    <section className="todo-container">
      <header>
        <h1>Todo List</h1>
        <TodoDate />
      </header>
      <TodoForm onAddTodo={handleFormSubmit} />

      <section className="myUnOrdList">
        <ul>
          {task.map((curTask) => {
            return (
              <TodoList
                key={curTask.id}
                data={curTask.content}
                checked={curTask.checked}
                handleDeleteBtn={handleDeleteBtn}
                onHandleCheckedTodo={HandleCheckedTodo}
              />
            );
          })}
        </ul>
        <section>
          <button
            style={{
              backgroundColor: "blue",
              color: "white",
              padding: "10px 20px",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
            onClick={clearAllbtn}
          >
            Clear ALL
          </button>
        </section>
      </section>
    </section>
  );
};

export default Todo;
