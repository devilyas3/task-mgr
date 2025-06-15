import { Navigate, Route, Routes } from 'react-router-dom';
import Login from './pages/login';
import Register from './pages/register';
import Dashboard from './pages/dashboard';

function App() {

  return (
    <div className='min-h-screen bg-gray-100 p-4'>
      <Routes>
        <Route path='/' element={<Navigate to='/login' />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path="*" element={<div className="p-10">Page Not Found</div>} />
      </Routes>
    </div>
  )
}

export default App;