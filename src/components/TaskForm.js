import React, { useState } from 'react';

const TaskForm = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('To Do');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, description, status });
    setTitle('');
    setDescription('');
    setStatus('To Do');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input className="form-input" type="text" style={{width:'97%'}} placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
      <textarea className="form-input" style={{width:'97%'}} placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
      <select className="form-input" value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="To Do">To Do</option>
        <option value="In Progress">In Progress</option>
        <option value="Done">Done</option>
      </select>
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
