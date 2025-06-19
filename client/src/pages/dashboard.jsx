import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";

const Dashboard = () => {
    const {logout} = useAuth();
    const [tasks, setTasks] = useState([]);
    const [newTasks, setNewTasks] = useState('');

    useEffect(() => {}, []);

    const handleAddTask = async (e) => {
        e.preventDefault();
        if (!newTasks.trim()) return;

        const task = {id: Date.now(), title: newTasks};
        setTasks([task, ...tasks]);
        setNewTasks('');
    };
    
    return (
        <div className='max-w-3xl mx-auto mt-10 p-6 bg-white rounded shadow'>
            <h1 className='text-3xl font-bold mb-4 text-center'>Welcome to your Dashboard!</h1>
            <div className='flex justify-between items-center mb-6'>
                <h1 className='text-2xl font-bold text-gray-800 mb-4'>Your Tasks</h1>
                <button
                    type='button' onClick={logout}
                    className='px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded'
                >
                    Logout
                </button>
            </div>

            <form onSubmit={handleAddTask} className='mb-6 flex gap-4'>
                <input
                    type='text'
                    value={newTasks}
                    onChange={(e) => setNewTasks(e.target.value)}
                    placeholder="Add a new task"
                    className='flex-1 p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400'
                />
                <button
                    type='submit'
                    className='px-6 bg-blue-600 text-white rounded hover:bg-blue-700 transition'
                >
                    Add Task
                </button>
            </form>

            <ul className='space-y-4'>
                {tasks.length === 0 ? (
                    <li className='text-gray-500 text-center'>Add tasks to
                     see here.</li>
                ) : (
                    tasks.map(task => (
                        <li key={task.id} className='p-4 bg-gray-100 rounded shadow flex justify-between items-center'>
                            <span>{task.title}</span>
                        </li>
                    ))
                )}
            </ul>
        </div>
    );
};

export default Dashboard;