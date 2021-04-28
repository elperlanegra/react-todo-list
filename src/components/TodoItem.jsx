import React from "react";

export default function TodoItem({ todo, toggleTodo }) {
  const { id, task, completed } = todo;

  const handleTodoClick = () => {
    toggleTodo(id);
  };

  return (
    <li>
      <div className={"card"}>
        <div className={"card-body"}>
          <input type={"checkbox"} onChange={handleTodoClick} />
        </div>
        {task}
      </div>
    </li>
  );
}
