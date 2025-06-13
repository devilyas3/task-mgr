# 📝 Task Manager Backend

A RESTful backend API for a Task Manager App using **Node.js**, **Express**, and **PostgreSQL**.

## 🔧 Tech Stack

- Node.js
- Express.js
- PostgreSQL
- JWT Authentication
- bcryptjs
- dotenv

## 📂 Project Structure

task-mgr
├── backend/
│    ├── config/
│    │ └── db.js
│    ├── controllers/
│    │ ├── authController.js
│    │ └── taskController.js
│    ├── middleware/
│    │ └── authMiddleware.js
│    ├── models/
│    │ ├── taskModel.js
│    │ └── userModel.js
│    ├── routes/
│    │ ├── auth.js
│    │ └── tasks.js
│    ├── .env
│    ├── server.js
│    ├── package.json
├── db_commands/
│    └── db_commands.sql <!-- for creating tables and all. -->
├── README.md
└── .gitignore

## 🚀 Getting Started

### 1. Clone Repo

```
git clone https://github.com/your-username/task-mgr.git
cd task-mgr/backend
```

### 2. Install Dependencies

`npm install`

### 3. Configure Environment

Create a `.env` file:

```
PORT=5000
DATABASE_URL=postgresql://username:password@localhost:5432/your_db
JWS_SECRET=your_jwt_secret
```

### 4. Run Server

`npm run dev`

🧪 API Endpoints
Auth
Method	        Endpoint	            Description
POST	        /api/auth/register	    Register a new user
POST	        /api/auth/login	        Login and get JWT

Tasks (Protected)
Method	        Endpoint	            Description
GET	            /api/tasks	            Get all tasks
POST	        /api/tasks	            Add a new task
PUT	            /api/tasks/:id	        Update a task
DELETE	        /api/tasks/:id	        Delete a task

Use `Authorization: Bearer <token>` for all protected routes.

# 🛠️ Database Tables

Ensure the following PostgreSQL schema exists:

```
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100) UNIQUE,
  password TEXT
);

CREATE TABLE tasks (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  title VARCHAR(255),
  description TEXT,
  status VARCHAR(50),
  deadline DATE
);
```

### 5 Testing Endpoints with Postman

Base URL: `http://localhost:5000/api`

# 1. Auth Routes

* Register

- METHOD: `POST` endpoint: `/auth/register`

- Body:

```
{
    "name": "John Doe",
    "email": "john@example.com",
    "password": "123456"
}
```

* Login

- METHOD:`POST` endpoint: `/auth/login`

- Body:

```
{
  "email": "john@example.com",
  "password": "123456"
}
```

* You might get response similar to th below
`{ "token": "<JWT_TOKEN>" }`

# 2. Performing CRUD on protected Task Routes

Use `Bearer <JWT_TOKEN>` in the Authorization header.

* Get Tasks

- METHOD: `GET` endpoint: `/tasks`

* Create Task

- METHOD: `POST` endpoint: `/tasks`

- Body:

```
{
  "title": "Task 1",
  "description": "Finish backend",
  "status": "pending",
  "deadline": "2025-06-15"
}
```

* Update Task

- METHOD: `PUT` endpoint: `/tasks/:id`

- Body: same as POST

* Delete Task

- METHOD: `DELETE` endpoint: `/tasks/:id`

# ✍️ Author

iLyaS AKA Mr.Porsche