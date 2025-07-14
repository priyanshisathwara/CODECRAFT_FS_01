import React from "react";
import { useNavigate } from "react-router-dom";
import "./LoginSuccess.css"; // You can reuse your RegistrationSuccess.css if you want

export default function LoginSuccess() {
    const navigate = useNavigate();

   const handleGoToLogin = () => {
        navigate("/profile");
    };

    return (
        <div className="success-container">
            <div className="success-card">
                <h1>Login Successful! 🚀</h1>
                <p>Welcome back! You are now logged in.</p>
                <button onClick={handleGoToLogin}>Go to Profile</button>
            </div>
        </div>
    );
}
