import React, { useState } from 'react';
function MakeTodoList() {
  const [todos, setTodos] = useState([
    { id: 1, task: 'Learn React', completed: false },
    { id: 2, task: 'Do Homework', completed: false },
  ]);

  const [newTask, setNewTask] = useState('');

  const addTodo = () => {
    if (newTask.trim() == '') return;
    const todo = {
      id: Date.now(),
      task: newTask,
      completed: false,
    };
    setTodos([...todos, todo]);
    setNewTask('');
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <h2>Todo List</h2>
      <input
        type="text"
        id="todoInput"
        placeholder="Enter a new task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      {todos.map((todo) => (
        <div key={todo.id}>
          <span>{todo.task}</span>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </div>
      ))}
      <button onClick={addTodo}>Add Task</button>
    </div>
  );
}
export default MakeTodoList;
