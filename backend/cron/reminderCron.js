const mongoose = require('mongoose');
const Task = require('../models/taskModel');
const sendReminderEmail = require('../utils/sendReminder');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log('✅ Connected to MongoDB');
  runReminderCheck().then(() => mongoose.disconnect());
});

async function runReminderCheck() {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const tasks = await Task.find({
    dueDate: { $lte: today },
    completed: false,
  });

  console.log(`📋 Found ${tasks.length} tasks to remind`);

  for (const task of tasks) {
    console.log(`📨 Sending reminder to ${task.userEmail} for task "${task.title}"`);
    await sendReminderEmail(task.userEmail, task.title, task.dueDate);
  }
}
