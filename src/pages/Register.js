import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from "../assets/PPI.png";

//Test comment

function Register() {
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [validLength, setValidLength] = useState(false);
    const [hasUpper, setHasUpper] = useState(false);
    const [hasLower, setHasLower] = useState(false);
    const [hasNumber, setHasNumber] = useState(false);
    const [hasSpecial, setHasSpecial] = useState(false);
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordMismatch, setPasswordMismatch] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [phoneError, setPhoneError] = useState(false);
    const [serverError, setServerError] = useState('');
    const [showErrorPopup, setShowErrorPopup] = useState(false); // State for the error popup
    const [errorMessage, setErrorMessage] = useState(''); // State for the error message

    const handleChange = (e) => {
        const val = e.target.value;
        setPassword(val);

        setValidLength(val.length >= 8);
        setHasUpper(/[A-Z]/.test(val));
        setHasLower(/[a-z]/.test(val));
        setHasNumber(/[0-9]/.test(val));
        setHasSpecial(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(val));
    };

    const handlePhoneNumberChange = (e) => {
        const val = e.target.value;
        setPhoneNumber(val);

        if (!/^\d{0,10}$/.test(val)) {
            setPhoneError(true);
        } else {
            setPhoneError(false);
        }
    };

    const handleRegister = async () => {
        if (password !== confirmPassword) {
            setPasswordMismatch(true);
            return;
        }

        const res = await fetch('http://127.0.0.1:8000/users/register/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({ email, password, phone_number: phoneNumber })
        });

        const data = await res.json();

        if (res.status === 201) {
            navigate('/login');  // Navigate to /login upon successful registration
        } else {
            setServerError(data.status);
            setShowErrorPopup(true);  // Display the error popup
            setErrorMessage(data.status);  // Set the error message
        }
    };

    return (
        <div className="flex items-center justify-center h-screen lr-stripe-bg">
            <img
                src={logo}
                alt="Logo"
                className="absolute top-2 w-1/5"
                style={{ right: '3rem' }}
            />
            <div className="p-8 rounded-tr-lg shadow-md w-96" style={{ right: '3rem' }}>
                <div className="mb-2">
                    <input
                        type="text"
                        placeholder="Email"
                        className="w-full p-3 rounded-lg border border-blue-300 text-black"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="mb-2">
                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full p-3 rounded-lg border border-blue-300 text-black"
                        value={password}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-2">
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        className="w-full p-3 rounded-lg border border-blue-300 text-black"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </div>
                {passwordMismatch && <div className="text-red-500">Passwords do not match</div>}
                <div className="mb-2">
                    <input
                        type="text"
                        placeholder="(***) ***-****"
                        className={`w-full p-3 rounded-lg border ${phoneError ? 'border-red-500' : 'border-blue-300'} text-black`}
                        value={phoneNumber}
                        onChange={handlePhoneNumberChange}
                    />
                    {phoneError && <div className="text-red-500">Invalid phone number</div>}
                </div>
                <div className="mb-2">
                    <button
                        className="text-white p-2 rounded-lg w-full custom-bg"
                        onClick={handleRegister}
                    >
                        Register
                    </button>
                    {serverError && <div className="text-red-500">{serverError}</div>}
                </div>
                <div className="border-b border-gray-300 my-2"></div>
                <div className="text-center mt-4">
                    <button className="bg-white text-black p-2 rounded text-xl w-40"
                            onClick={() => navigate('/login')}
                    >
                        Login Instead
                    </button>
                </div>
            </div>
            {showErrorPopup && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="bg-white p-4 rounded-lg shadow-lg font-black font-bold">
                        <h2 className="font-bold font-black">Error</h2>
                        <p className="font-bold font-black">{errorMessage}</p>
                        <button onClick={() => setShowErrorPopup(false)} className="bg-blend-color-burn bg-amber-400">Close</button>
                    </div>
                </div>
            )}
            <div className="mb-2 text-center">
                <button
                    className="position-center text-black p-1 rounded-full w-56 bg-white"
                    onClick={() => navigate('/register/admin')}
                >
                    Admin Registration
                </button>
            </div>
        </div>

    );
}

export default Register;
