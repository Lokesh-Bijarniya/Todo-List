import React, { useState, useEffect } from 'react';
import Task from './Task';
import { v4 as uuidv4 } from 'uuid';
import tasksData from '../data/tasks.json';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setTasks(tasksData);
  }, []);

  const addTask = (title, description) => {
    const newTask = {
      id: uuidv4(),
      title,
      description,
      completed: false,
      timestamp: new Date().toISOString(),
    };
    setTasks([...tasks, newTask]);
  };

  const updateTask = (id, updatedTask) => {
    setTasks(tasks.map((task) => (task.id === id ? updatedTask : task)));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>
      <input
        type="text"
        placeholder="Search tasks..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border p-2 rounded w-full mb-4"
      />
      <div>
        {filteredTasks.map((task) => (
          <Task key={task.id} task={task} onUpdate={updateTask} onDelete={deleteTask} />
        ))}
      </div>
      <div className="mt-4">
        <h2 className="text-xl font-bold mb-2">Add New Task</h2>
        <TaskForm onAdd={addTask} />
      </div>
    </div>
  );
};

const TaskForm = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(title, description);
    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow-md">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border p-2 rounded w-full mb-2"
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="border p-2 rounded w-full mb-2"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Add Task
      </button>
    </form>
  );
};

export default TaskList;
