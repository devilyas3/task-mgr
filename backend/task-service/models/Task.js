const db = require('../config/db');

export const getTaskByUser = async (userId) => {
    const res = await db.query("SELECT * FROM tasks WHERE user_id = $1", [userId]);
    return res.rows;
};

export const createTask = async (userId, title, description, status, deadline) => {
    const res = await db.query(
        "INSERT INTO tasks (user_id, title, description, status, deadline) VALUES ($1, $2, $3, $4, $5) RETURNING *",
        [userId, title, description, status, deadline]
    );
    return res.rows[0];
};

export const updateTask = async (taskId, title, description, status, deadline) => {
    const res = await db.query(
        "UPDATE tasks SET title = $1, description = $2, status = $3, deadline = $4 WHERE id = $5 RETURNING *",
        [title, description, status, deadline, taskId]
    );
    return res.rows[0];
};

export const deleteTask = async (taskId) => {
    await db.query("DELETE FROM tasks WHERE id = $1", [taskId]);
};