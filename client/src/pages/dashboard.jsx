import { useAuth } from "../context/AuthContext";

const Dashboard = () => {
    const {logout} = useAuth();
    
    return (
        <div className='text-center mt-20'>
            <h1 className='text-3xl font-bold mb-4'>Dashboard</h1>
            <button onClick={logout} className='bg-red-500 text-white px-4 py-2 rounded'>
                Logout
            </button>
        </div>
    );
};

export default Dashboard;