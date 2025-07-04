import db from '../config/db';
// const pool = require("../config/db");

const createUser = async (name, email, hashedPassword) => {
    const res = await db.query(
        "INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *",
        [name, email, hashedPassword]
    );
    return res.rows[0]
};

const findUserByEmail = async (email) => {
    const res = await db.query("SELECT * FROM users WHERE email = $1", [email]);
    return res.rows[0];
};

module.exports = {
    createUser,
    findUserByEmail,
};