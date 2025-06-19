import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import db from './config/db.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5002;

app.use(cors());
app.use(express.json());

app.use('/api/tasks', );

app.get('/', (req, res) => res.send('Task Service Running'));
app.listen(PORT, () => console.log(`Task service on http://localhost:${PORT}`));