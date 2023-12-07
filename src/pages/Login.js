import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../components/AuthContext'; // Update with your actual path
import logo from "../assets/PouncePassIconGb.png";

function Login() {
    const navigate = useNavigate();
    const { login } = useContext(AuthContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showError, setShowError] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const handleSignIn = async () => {
        try {
            const response = await fetch('http://127.0.0.1:8000/users/login/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            });

            if (!response.ok) {
                const data = await response.json();
                throw new Error(data.message || 'Login failed, please try again.');
            }

            const data = await response.json();
            login(data.access_token); // Use the login method from AuthContext

            // Redirect based on group
            if (data.group === 'Admin') {
                navigate('/adminDashboard');
            } else {
                navigate('/');
            }
        } catch (error) {
            setShowError(error.message);
            setTimeout(() => setShowError(false), 3000);
        }
    };





    return (
        <div className="flex items-center justify-center h-screen rl-stripe-bg">
            <img
                src={logo}  // Use the imported image here
                alt="Logo"
                className="absolute top-12 w-1/5"
                style={{ left: '3rem' }}
            />
            <div className="p-8 w-1/4 rounded-lg bg-black bg-opacity-50 shadow-white shadow-xl">
                <div className="mb-2">
                    <input
                        type="text"
                        placeholder="Email"
                        className="w-full p-3 rounded-full border border-blue-300 text-black"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="mb-2">
                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full p-3 rounded-full border border-blue-300 text-black"

                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="mb-2">
                    <button
                        className="text-white p-2 rounded-full w-full"
                        style={{ backgroundColor: '#373a3a' }}
                        onClick={handleSignIn}  // Updated this line
                    >
                        Sign In
                    </button>
                    {showError && (
                        <div
                            className="text-red-500 text-center my-2"
                            style={{ animation: 'fadeIn 0.5s ease-out', animationFillMode: 'forwards' }}
                        >
                            {showError}
                        </div>
                    )}
                </div>
                <div className="border-b border-gray-300 my-4"></div>
                <div className="mb-2 text-center">
                    <button className="text-black p-1 rounded-full w-56 bg-white" onClick={() => setShowModal(true)}>
                        Forgot Email/Password?
                    </button>
                </div>
                <div className="mb-2 text-center">
                    <button
                        className="position-center text-black p-1 rounded-full w-56 bg-white"
                        onClick={() => navigate('/register')}
                    >
                        Register Here
                    </button>
                </div>
                <div className="mb-2 text-center">
                    <button
                        className="position-center text-black p-1 rounded-full w-56 bg-white"
                        onClick={() => navigate('/login/admin')}
                    >
                        Admin Login
                    </button>
                </div>
            </div>

            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 bg-black">
                    <div className="bg-darkGreen p-16 rounded-lg shadow-md w-128 relative">
                        <button className="absolute top-3 right-2 font-bold text-darkGreen text-2xl rounded-tl-lg p-2 border-2 border-white" onClick={() => setShowModal(false)}>X</button>
                        <div className="text-center text-white text-2xl font-bold mb-8">
                            Find your PouncePass Account
                        </div>
                        <div className="mb-8">
                            <input
                                type="text"
                                placeholder="(UNDER CONSTRUCTION) Enter your email, username, or phone number"
                                className="w-full p-3 rounded text-xs border border-white text-black"
                            />
                        </div>
                        <div className="text-center">
                            <button className="bg-black text-white p-2 rounded text-xl w-40">
                                Next
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Login;