import React from "react";

const TodoItem = ({ todo, onDelete }) => {
  return (
    <div className="flex items-center justify-between border-b py-2">
      <span>{todo.text}</span>
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </div>
  );
};

export default TodoItem;
