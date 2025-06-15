import { useState } from "react";
import { useAuth } from "../context/AuthContext";

const Login = () => {
    const {login} = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) =>  {
        e.preventDefault();
        await login(email, password);
    };

    return (
        <div className='max-w-md mx-auto mt-20 bg-white p-6 rounded shadow'>
            <h2 className='text-2xl font-bold mb-4'>Login</h2>
            <form onSubmit={handleSubmit}>
                <input
                    className='w-full mb-3 p-2 border rounded'
                    type='email'
                    placeholder='Email ID'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    className='w-full mb-3 p-2 border rounded'
                    type='password'
                    placeholder='Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button className='w-full bg-blue-500 text white p-2 rounded' type='submit'>
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login;