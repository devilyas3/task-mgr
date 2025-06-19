const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1] //This is Bearer <token> from Headers

    if (!token) return res.status(401).json({message: "Access denied!"});

    try {
        const decoded = jwt.verify(token, process.env.JWS_SECRET);
        req.user = decoded;
        next();
    } catch (err) {
        return res.status(403).json({message: "Invalid Token!"});
    }
};

module.exports = authenticateToken;