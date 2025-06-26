// models/taskModel.js

const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: String,
    completed: { type: Boolean, default: false },
    dueDate: Date,
    userEmail: { type: String, required: true },
  },
  { timestamps: true } // ✅ Adds createdAt and updatedAt
);

module.exports = mongoose.model('Task', taskSchema);
