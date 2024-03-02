// App.js
import React, { useState } from "react";
import MainLayout from "./components/layouts/MainLayouts";
import Input from "./components/atoms/Input";
import Button from "./components/atoms/Button";
import TodoList from "./components/organisms/TodoList";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  const handleAddTodo = () => {
    if (text.trim() !== "") {
      setTodos([...todos, { id: Date.now(), text }]);
      setText("");
    }
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <MainLayout>
      <h1 className="text-2xl font-bold mb-4">ToDo List</h1>
      <div className="flex mb-4">
        <Input
          type="text"
          placeholder="Enter your todo"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Button onClick={handleAddTodo}>Add Todo</Button>
      </div>
      <TodoList todos={todos} onDelete={handleDeleteTodo} />
    </MainLayout>
  );
};

export default App;
