import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

const Register = () => {
    const {register} = useAuth();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) =>  {
        e.preventDefault();
        await register(name, email, password);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className='max-w-md w-full bg-white p-8 rounded-xl shadow-md'>
                <h2 className='text-3xl font-bold mb-6 text-center text-blue-600'>Register</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        className='w-full mb-4 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400'
                        type='text'
                        placeholder='Full Name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        className='w-full mb-4 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400'
                        type='email'
                        placeholder='Email ID'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        className='w-full mb-4 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400'
                        type='password'
                        placeholder='Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button className='w-full bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-green-600 transition'>
                        Register
                    </button>
                </form>
                <p className='text-center text-gray-600 mt-4'>
                    Don't have an account? {' '}
                    <Link to='/login' className='text-blue-500 hover:underline'>Login</Link>
                </p>
            </div>
        </div>
    );
};

export default Register;