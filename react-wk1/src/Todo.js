import React from "react";


export default function todo({ todo, toggleTodo }) {
  function handleTodoClick() {
    toggleTodo(todo.id);
  }

  return (
    <div>
      <label class = "inputToDo">
        <input 
          type="checkbox" class = "checkbox"
          checked={todo.complete}
          onChange={handleTodoClick}
        
        />
        
        {todo.name}
      </label>
    </div>
  );
}
