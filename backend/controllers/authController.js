const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const { findUserByEmail, createUser } = require("../models/userModel");

dotenv.config();

const register = async (req, res) => {
    const {name, email, password} = req.body;
    try {
        const existingUser = await findUserByEmail(email);
        if (existingUser) return res.status(400).json({message: "Email Already in use"});

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await createUser(name, email, hashedPassword);
        res.status(201).json({message: "User registered", user: newUser});
    } catch (err) {
        res.status(500).json({message: "Server Error", error: err.message});
    }
};

const login = async (req, res) => {
    const {email, password} = req.body;
    try {
        const user = await findUserByEmail(email);
        if (!user) return res.status(400).json({ message: "User not found"});

        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) return res.status(401).json({message: "Incorrect Password"});

        const token = jwt.sign({id: user.id}, process.env.JWS_SECRET, {expiresIn: "1d"});
        res.status(200).json({token});
    } catch (err) {
        res.status(500).json({message: "Server Error", error: err.message});
    }
};

module.exports = {register, login};