 // src/api/taskService.js
import supabase from '../supabaseClient'; // import supabase client

// Get all tasks
export const getTasks = async () => {
  try {
    const { data, error } = await supabase
      .from('tasks')   // 'tasks' is your table name
      .select('*')     // Select all columns
      .order('due_date', { ascending: true });  // Order tasks by due_date

    if (error) {
      throw error;  // If there's an error, throw it
    }

    return data;  // Return the fetched tasks
  } catch (error) {
    console.error('Error fetching tasks:', error.message);
    throw error;  // Propagate the error
  }
};

// Create a new task
export const createTask = async (taskData) => {
  try {
    const { data, error } = await supabase
      .from('tasks')
      .insert([{
        title: taskData.title,
        description: taskData.description,
        due_date: taskData.dueDate, // Ensure the field name matches your DB schema
        status: 'pending', // Default to 'pending' status
      }])
      .select();  // Return the newly inserted task

    if (error) {
      throw error;  // If there's an error, throw it
    }

    return data[0];  // Return the first item in the data array (the new task)
  } catch (error) {
    console.error('Error creating task:', error.message);
    throw error;  // Propagate the error
  }
};

// Update a task
export const updateTask = async (taskId, taskData) => {
  try {
    const { data, error } = await supabase
      .from('tasks')
      .update({
        title: taskData.title,
        description: taskData.description,
        due_date: taskData.dueDate,
        status: taskData.status,
      })
      .eq('id', taskId)  // Match the task by its 'id'
      .select();

    if (error) {
      throw error;  // If there's an error, throw it
    }

    return data[0];  // Return the updated task
  } catch (error) {
    console.error('Error updating task:', error.message);
    throw error;  // Propagate the error
  }
};

// Delete a task
export const deleteTask = async (taskId) => {
  try {
    const { error } = await supabase
      .from('tasks')
      .delete()
      .eq('id', taskId);  // Match the task by its 'id'

    if (error) {
      throw error;  // If there's an error, throw it
    }

    return;  // Successfully deleted
  } catch (error) {
    console.error('Error deleting task:', error.message);
    throw error;  // Propagate the error
  }
};
