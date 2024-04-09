import React, { useState } from 'react';

const UpdatePopup = ({ taskId, taskTitle, onUpdate }) => {
    const [status, setStatus] = useState("To Do");

    const handleSubmit = (e) => {
        e.preventDefault();
        onUpdate(taskId, status);
    };

    return (
        <div className="popup">
            <form onSubmit={handleSubmit}>
                <center>
                    <h3>Update Task Status</h3>
                    <hr />
                </center>
                <h3>Title: {taskTitle}</h3>
                <br />
                <select value={status} onChange={(e) => setStatus(e.target.value)} required>
                    <option value="To Do" selected>To Do</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Done">Done</option>
                </select>
                <center>
                    <button type="submit">Update</button>
                </center>
            </form>
        </div>
    );
};

export default UpdatePopup;
