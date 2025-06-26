const Task = require('../models/taskModel');

const getTasks = async (req, res) => {
  const { email } = req.query;

  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  try {
    const tasks = await Task.find({ userEmail: email });
    res.json(tasks);
  } catch (error) {
    console.error('Error fetching tasks:', error);
    res.status(500).json({ error: 'Failed to fetch tasks' });
  }
};

  const createTask = async (req, res) => {
  try {
    const { title, description, userEmail, dueDate } = req.body;
    const task = new Task({ title, description, userEmail, dueDate });
    await task.save();
    res.status(201).json(task);
  } catch (err) {
    res.status(500).json({ error: 'Error creating task' });
  }
};


// controllers/taskController.js
const deleteTask = async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Task deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Error deleting task' });
  }
};

// Update task status (complete/incomplete)
const updateTaskStatus = async (req, res) => {
  try {
    const updated = await Task.findByIdAndUpdate(
      req.params.id,
      { completed: req.body.completed },
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: 'Error updating task' });
  }
};

module.exports = {
  createTask,
  getTasks,
  deleteTask,
  updateTaskStatus, 
};

