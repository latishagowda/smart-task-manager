const express = require('express');
const router = express.Router();
const {
  createTask,
  getTasks,
  deleteTask,
  updateTaskStatus,
} = require('../controllers/taskController');

router.get('/tasks', getTasks); // GET /api/tasks?email=
router.post('/tasks', createTask); // POST /api/tasks
router.delete('/tasks/:id', deleteTask);
router.put('/tasks/:id/status', updateTaskStatus);

module.exports = router;
