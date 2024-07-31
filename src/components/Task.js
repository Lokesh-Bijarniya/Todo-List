import React, { useState } from 'react';

const Task = ({ task, onUpdate, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);

  const handleSave = () => {
    onUpdate(task.id, { ...task, title, description });
    setIsEditing(false);
  };

  return (
    <div className="border p-4 rounded mb-2 bg-white">
      {isEditing ? (
        <div>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border p-2 rounded w-full mb-2"
          />
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border p-2 rounded w-full mb-2"
          />
          <button onClick={handleSave} className="bg-blue-500 text-white px-4 py-2 rounded">
            Save
          </button>
        </div>
      ) : (
        <div>
          <h3 className="text-xl font-bold">{task.title}</h3>
          <p className="text-gray-700">{task.description}</p>
          <small className="text-gray-500">Last updated: {new Date(task.timestamp).toLocaleString()}</small>
          <div className="mt-2">
            <button onClick={() => setIsEditing(true)} className="bg-yellow-500 text-white px-4 py-2 rounded mr-2">
              Edit
            </button>
            <button onClick={() => onDelete(task.id)} className="bg-red-500 text-white px-4 py-2 rounded mr-2">
              Delete
            </button>
            <button
              onClick={() => onUpdate(task.id, { ...task, completed: !task.completed })}
              className={`px-4 py-2 rounded ${task.completed ? 'bg-gray-500' : 'bg-green-500'} text-white`}
            >
              {task.completed ? 'Mark as Undone' : 'Mark as Done'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Task;
