import React from 'react';
import TaskList from './components/TaskList';
import { Routes, Route } from'react-router-dom';

const App = () => {
  return (
    <div className="bg-black text-white min-h-screen p-10">
    <Routes>
      <Route path="/" element={<TaskList />} />
    </Routes>

    </div>
  );
};

export default App;
