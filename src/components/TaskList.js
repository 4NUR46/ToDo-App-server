import React from 'react';

const TaskList = ({ tasks, onDelete, onUpdate }) => {
  return (
    <ul className="task-list">
      {tasks.map(task => (
        <li key={task._id}>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <p>Status: {task.status}</p>
          <button className="delete-btn" onClick={() => onDelete(task._id)}>Delete</button>
          <button className="update-btn" onClick={() => onUpdate(task._id, task.title)}>Update</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
