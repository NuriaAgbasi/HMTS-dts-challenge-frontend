// src/components/TaskList.js
import React from 'react';
import { deleteTask } from '../api/taskService';

const TaskList = ({ tasks, setTasks }) => {
  const handleDelete = async (taskId) => {
    try {
      await deleteTask(taskId);
      setTasks(tasks.filter((task) => task.id !== taskId));

    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-10">
      <h2 className="text-2xl font-semibold text-blue-800 mb-4">Task List</h2>
      <ul className="space-y-4">
        {tasks.map((task) => (
          <li key={task.id} className="flex justify-between items-center p-4 bg-blue-50 rounded-lg shadow-md hover:bg-blue-100 transition-colors">
            <div>
              <h3 className="font-semibold text-lg text-gray-800">Title: {task.title}</h3>
              <p className="text-gray-600">Description: {task.description}</p>
              <p className="text-sm text-gray-500 mt-1">Due: {new Date(task.due_date).toLocaleString()}</p>
            </div>
            <div>
              <button
                onClick={() => handleDelete(task.id)}
                className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
