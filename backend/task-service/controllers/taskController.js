const {
    getTaskByUser,
    createTask,
    updateTask,
    deleteTask
} = require("../models/taskModel");

export const getAllTasks = async (req, res) => {
    try {
        const tasks = await getTaskByUser(req.user.id);
        res.json(tasks);
    } catch (err) {
        res.status(500).json({message: "Error retrieving tasks", error: err.message});
    }
};

export const addTask = async (req, res) => {
    const {title, description, status, deadline} = req.body;
    try {
        const task = await createTask(req.user.id, title, description, status, deadline);
        res.status(201).json(task);
    } catch (err) {
        res.status(500).json({ message: "Error creating task", error: err.message });
    }
};

export const editTask = async (req, res) => {
    const {title, description, status, deadline} = req.body;
    const {id} = req.params; 
    try {
        const updatedTask = await updateTask(id, title, description, status, deadline);
        res.json(updatedTask);
    } catch (err) {
        res.status(500).json({ message: "Error updating task", error: err.message });
    }
};

export const removeTask = async (req, res) => {
    const {id} = req.params; 
    try {
        await deleteTask(id);
        res.json({message: "Task deleted"});
    } catch (err) {
        res.status(500).json({ message: "Error deleting task", error: err.message });
    }
};