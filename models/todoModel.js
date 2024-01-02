const mongoose = require('mongoose');

// Define the todo schema using Mongoose
const todoSchema = mongoose.Schema({
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    status: {
        type: String,
        enum: ['pending', 'completed', 'due'],
        default: 'pending',
    },
    completionTime: { type: Date,required: true  },
    createdAt: { type: Date, default: Date.now }
}, {
    versionKey: false
});

// Create a Todo model using the defined schema
const Todo = mongoose.model('Todo', todoSchema);

// Export the Todo model
module.exports = { Todo };
