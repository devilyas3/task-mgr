import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import db from './config/db.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

app.use('/api/auth', );

app.get('/', (req, res) => res.send('Auth Service Running'));
app.listen(PORT, () => console.log(`Auth service on http://localhost:${PORT}`));