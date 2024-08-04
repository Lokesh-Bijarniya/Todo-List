import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Task from './Task';
import { v4 as uuidv4 } from 'uuid';
import tasksData from '../data/tasks.json';
import TaskForm from './TaskForm';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Parse search term from URL
    const params = new URLSearchParams(location.search);
    const query = params.get('q') || '';
    setSearchTerm(query);
    // Filter tasks based on the search term
    setTasks(tasksData.filter(task => task.title.toLowerCase().includes(query.toLowerCase())));
  }, [location.search]);

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

  const handleSearchChange = (e) => {
    const newSearchTerm = e.target.value;
    setSearchTerm(newSearchTerm);
    // Update URL with the new search term
    navigate(`?q=${encodeURIComponent(newSearchTerm)}`);
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>
      <input
        type="text"
        placeholder="Search tasks..."
        value={searchTerm}
        onChange={handleSearchChange}
        className="border p-2 rounded w-full mb-4 text-black"
      />
      <div>
        {tasks.map((task) => (
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

export default TaskList;
