import React from 'react'
import { FaCheck } from "react-icons/fa6";
import { MdDeleteForever } from "react-icons/md";

const TodoList = ({ data, checked, handleDeleteBtn, onHandleCheckedTodo }) => {
  return (
    <li className="todo-item">
              <span className={checked?"checkList" : "notCheckList"}>{data.content}</span>
              <button className="check-btn" onClick={()=>onHandleCheckedTodo(data)}>
                <FaCheck />
              </button>
              <button
                onClick={() => handleDeleteBtn(data)}
                className="delete-btn"><MdDeleteForever />
              </button>
            </li>
  )
}

export default TodoList
