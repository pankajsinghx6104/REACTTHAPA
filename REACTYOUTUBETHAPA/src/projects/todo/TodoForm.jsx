import React from "react";
import { useState } from "react";

const TodoForm = ({onAddTodo}) => {
  const [inputValue, setInputValue] = useState({});

  const handleInputChange = (e) => {
    setInputValue({
      id: e.target.value, 
      content: e.target.value, 
      checked: false
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onAddTodo(inputValue);
    setInputValue({id: "", content: "", checked: false});

  }

  return (
    <section className="form">
      <form onSubmit={handleFormSubmit}>
        <div>
          <input
            type="text"
            className="todo-input"
            autoComplete="off"
            value={inputValue.content}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <button type="submit" className="todo-btn">
            Add Task
          </button>
        </div>
      </form>
    </section>
  );
};

export default TodoForm;
