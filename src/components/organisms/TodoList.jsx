import React from "react";
import TodoItem from "../molecules/TodoItem";

const TodoList = ({ todos, onDelete }) => {
  return (
    <div className="space-y-2">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default TodoList;
