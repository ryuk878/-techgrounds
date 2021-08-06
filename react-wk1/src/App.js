import React, { useState, useRef, useEffect } from "react";
import "./App.css";
import TodoList from "./TodoList";
import uuid from "react-uuid";

const LOCAL_STORAGE_KEY = " todoApp.todos";
function App() {
  const [todos, setTodos] = useState([]);
  const todoNameref = useRef();

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedTodos) setTodos(storedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  function toggleTodo(id) {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.complete = !todo.complete;

    setTodos(newTodos);
  }
  function handleAddTodo(event) {
    const name = todoNameref.current.value;
    if (name === "") return;
    setTodos((prevTodos) => {
      return [...prevTodos, { id: uuid(), name: name, complete: false }];
    });
    todoNameref.current.value = null;
    
  }
  function handleClearTodo(){

    const newTodos = todos.filter(todo => !todo.complete)
    setTodos(newTodos)

  }
  return (
    <>
    <div class ="flex">
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <input className ="input" ref={todoNameref} type="text" placeholder="What do i need to do?"/>
      <button className ="addTodo" onClick={handleAddTodo}><span>Add Todo</span></button>
      <button className ="clearTodo " onClick={handleClearTodo}><span>Clear Completed Todos</span></button>
      <div class ="remainder">{todos.filter((todo) => !todo.complete).length}</div>
      </div>
    </>
  );
}

export default App;
