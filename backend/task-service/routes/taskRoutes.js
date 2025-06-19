const express = require('express');
const authenticateToken = require('../middleware/authMiddleware');
const {
    getAllTasks,
    addTask,
    editTask,
    removeTask
} = require('../controllers/taskController');

const router = express.Router();

router.get('/', authenticateToken, getAllTasks);
router.post('/', authenticateToken, addTask);
router.put('/:id', authenticateToken, editTask);
router.delete('/:id', authenticateToken, removeTask);

module.exports = router;