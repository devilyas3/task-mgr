import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4 text-center">
            <img
                src="https://undraw.co/api/illustrations/7f7b2eeb-b7e2-4059-8aef-5e8cfec2c183" // You can replace with any SVG/PNG URL
                alt="Not Found"
                className="w-64 h-64 mb-6"
            />
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Page Not Found</h1>
            <p className="text-gray-600 mb-6">
                Oops! The page you're looking for doesn't exist or was moved.
            </p>
            <Link
                to="/login"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition"
            >
                Go to Login
            </Link>
        </div>
    );
};

export default NotFound;
