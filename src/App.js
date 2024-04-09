import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import FilterDropdown from './components/FilterDropdown';
import UpdatePopup from './components/UpdatePopup';
import './App.css'


function App() {
  const HOST_URL = process.env.REACT_APP_SERVER_URL;
  console.log("HOST:", HOST_URL)
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('');
  const [showUpdatePopup, setShowUpdatePopup] = useState(false);
  const [taskIdToUpdate, setTaskIdToUpdate] = useState('');
  const [taskTitle, setTaskTitle] = useState('');

  useEffect(() => {
    const fetchTasks = async () => {
      const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/tasks`);
      setTasks(response.data);
    };
    fetchTasks();
  }, []);

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const filteredTasks = tasks.filter(task => filter ? task.status === filter : true);

  const handleSubmit = async (taskData) => {
    try {
      const response = await axios.post(`${HOST_URL}/api/tasks`, taskData);
      setTasks([...tasks, response.data]);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (taskId) => {
    try {
      await axios.delete(`${HOST_URL}/api/tasks/${taskId}`);
      setTasks(tasks.filter(task => task._id !== taskId));
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdateClick = (taskId, title) => {
    setTaskIdToUpdate(taskId);
    setTaskTitle(title);
    setShowUpdatePopup(true);
  };

  const handleUpdate = async (taskId, newStatus) => {
    try {
      const response = await axios.patch(`${HOST_URL}/api/tasks/${taskId}`, { status: newStatus });
      setTasks(tasks.map(task => task._id === taskId ? response.data : task));
      setShowUpdatePopup(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="App">
      <h1>Task Management Application</h1>
      <TaskForm onSubmit={handleSubmit} />
      <FilterDropdown onChange={handleFilterChange} />
      <TaskList tasks={filteredTasks} onDelete={handleDelete} onUpdate={handleUpdateClick} />
      {showUpdatePopup && <UpdatePopup taskId={taskIdToUpdate} taskTitle={taskTitle} onUpdate={handleUpdate} />}
    </div>
  );
}

export default App;
