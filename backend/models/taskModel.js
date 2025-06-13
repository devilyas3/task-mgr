const pool = require("../config/db");

const getTaskByUser = async (userId) => {
    const res = await pool.query("SELECT * FROM tasks WHERE user_id = $1", [userId]);
    return res.rows;
};

const createTask = async (userId, title, description, status, deadline) => {
    const res = await pool.query(
        "INSERT INTO tasks (user_id, title, description, status, deadline) VALUES ($1, $2, $3, $4, $5) RETURNING *",
        [userId, title, description, status, deadline]
    );
    return res.rows[0];
};

const updateTask = async (taskId, title, description, status, deadline) => {
    const res = await pool.query(
        "UPDATE tasks SET title = $1, description = $2, status = $3, deadline = $4 WHERE id = $5 RETURNING *",
        [title, description, status, deadline, taskId]
    );
    return res.rows[0];
};

const deleteTask = async (taskId) => {
    await pool.query("DELETE FROM tasks WHERE id = $1", [taskId]);
};

module.exports = {
    getTaskByUser,
    createTask,
    updateTask,
    deleteTask,
};