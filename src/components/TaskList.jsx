// src/components/TaskList.js
import React from 'react';
import { deleteTask } from '../api/taskService';

const TaskList = ({ tasks, setTasks }) => {
    const handleDelete = async (taskId) => {
        try {
            await deleteTask(taskId);
            setTasks(tasks.filter((task) => task.id !== taskId)); // Remove the task from the state
        } catch (error) {
            console.error('Error deleting task:', error);
        }
    };

    return (
        <div>
            <h2>Task List</h2>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>
                        <div>
                            <strong>{task.title}</strong>
                            <p>{task.description}</p>
                            <p>Status: {task.status}</p>
                            <button onClick={() => handleDelete(task.id)}>Delete</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;
