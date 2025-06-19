import { createContext, useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({children}) => {
    const navigate = useNavigate();
    const location = useLocation();

    const [token, setToken] = useState(localStorage.getItem('token'));
    const [user, setUser] = useState(null);

    useEffect(() => {
        const isAuthPage = ['/login', '/register'].includes(location.pathname);

        if (token && isAuthPage) {
            navigate('/dashboard');
        } 
    }, [token, location.pathname]);

    const login = async (email, password) => {
        try {
            const res = await fetch('http://localhost:5000/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({email, password})
            });

             const data = await res.json();
             if (!res.ok) throw Error(data.message);

             localStorage.setItem('token', data.token);
             setToken(data.token);
             setUser(data.user);
        } catch (err) {
            alert(err.message);
        }
    };

    const register = async (name, email, password) => {
        try {
            const res = await fetch('http://localhost:5000/api/auth/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({name, email, password})
            });

             const data = await res.json();
             if (!res.ok) throw Error(data.message);

             alert("Registration successful!.");

             // Automatically login after successful registration
             const loginRes = await fetch('http://localhost:5000/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({email, password})
             });

             
             const loginData = await loginRes.json();
             if(!loginRes.ok) throw Error(loginData.message);

             localStorage.setItem('token', loginData.token);
             setToken(loginData.token);
             setUser(loginData.user);
        } catch (err) {
            alert(err.message);
        }
    };

    const logout = () => {
        localStorage.removeItem('token');
        setToken(null);
        setUser(null);
        navigate('/login');
    };

    return (
        <AuthContext.Provider value={{ token, user, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    );
};