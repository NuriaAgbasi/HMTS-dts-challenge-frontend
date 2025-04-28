// src/components/TaskForm.js
import React, { useState } from 'react';
import { createTask } from '../api/taskService';

const TaskForm = ({ addTask }) => {
    const [task, setTask] = useState({
        title: '',
        description: '',
        dueDate: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTask((prevTask) => ({ ...prevTask, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const newTask = await createTask(task);
            addTask(newTask); // Add the new task to the state in App.js
            alert('Task created successfully!');
            setTask({
                title: '',
                description: '',
                dueDate: '',
            }); // Clear the form after submission
        } catch (error) {
            console.error('Error creating task:', error);
            alert('Error creating task.');
        }
    };

    return (
        <div>
            <h2>Create Task</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title:</label>
                    <input
                        type="text"
                        name="title"
                        value={task.title}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Description:</label>
                    <input
                        type="text"
                        name="description"
                        value={task.description}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Due Date:</label>
                    <input
                        type="datetime-local"
                        name="dueDate"
                        value={task.dueDate}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Create Task</button>
            </form>
        </div>
    );
};

export default TaskForm;
