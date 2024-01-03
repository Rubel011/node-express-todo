const { successResponse, errorResponse } = require('../helpers/successAndError');
const { Todo } = require('../models/todoModel');
const { User } = require('../models/userModel');



exports.retrieveAllTodos = async (req, res) => {
    try {
        const userId = req.body.userId
        // Retrieve all TODO items from the database
        const todos = await Todo.find({ createdBy: userId });

        // Respond with the list of TODO items
        res.status(200).json(successResponse(200, "Successfully retrieved all TODO items from the database", todos));
    } catch (error) {
        // Handle server error
        res.status(500).json(errorResponse(500, error.message));
    }
};

exports.retrieveTodoById = async (req, res) => {
    try {
        const id = req.params.id;
        // Retrieve TODO item by id from the database
        const todo = await Todo.findById(id);

        // Respond with the TODO item
        res.status(200).json(successResponse(200, "Successfully retrieved TODO item by id from the database", todo));
    } catch (error) {
        // Handle server error
        res.status(500).json(errorResponse(500, error.message));
    }
};

exports.addNewTodo = async (req, res) => {
    try {
        // Extract TODO information from the request body
        let { title, description, status, completionTime, createdBy } = req.body;
        // return console.log(createdBy);
        createdBy = createdBy || req.body.userId
        completionTime= new Date(completionTime);

        // Check if the conversion is successful
        if (isNaN(completionTime)) {
            return res.status(400).json(errorResponse(400, "Invalid date format"));
        }
        // Check if the user exists
        const userExists = await User.findById(createdBy);
        if (!userExists) {
            return res.status(400).json(errorResponse(400, "User does not exist"));
        }

        // Create a new TODO document
        const newTodo = new Todo({ title, description, status, completionTime, createdBy });

        // Save the new TODO item to the database
        await newTodo.save();

        // Respond with a success message
        res.status(201).json(successResponse(201, "TODO item added successfully", newTodo));
    } catch (error) {
        // Handle bad request
        res.status(400).json(errorResponse(500, error.message));
    }
};

exports.updateTodo = async (req, res) => {
    try {
        const id = req.params.id;
        // Extract updated TODO information from the request body
        // const { title, description, status, completionTime } = req.body;

        // Use findByIdAndUpdate to update TODO item
        const updatedTodo = await Todo.findByIdAndUpdate(
            id,
            req.body,
            { new: true } // Return the updated document
        );

        // Check if the TODO item exists
        if (!updatedTodo) {
            return res.status(404).json(errorResponse(404, "TODO item not found"));
        }

        // Respond with the updated TODO item
        res.status(200).json(successResponse(200, "TODO item updated successfully", updatedTodo));
    } catch (error) {
        // Handle server error
        res.status(500).json(errorResponse(500, error.message));
    }
};

exports.deleteTodo = async (req, res) => {
    try {
        const id = req.params.id;

        // Use findByIdAndDelete to delete TODO item
        const deletedTodo = await Todo.findByIdAndDelete(id);

        // Check if the TODO item exists
        if (!deletedTodo) {
            return res.status(404).json(errorResponse(404, "TODO item not found"));
        }

        // Respond with a success message
        res.status(200).json(successResponse(200, "TODO item deleted successfully"));
    } catch (error) {
        // Handle server error
        res.status(500).json(errorResponse(500, error.message));
    }
};


