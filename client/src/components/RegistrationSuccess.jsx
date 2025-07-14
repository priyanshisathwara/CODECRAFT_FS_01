import React from "react";
import { useNavigate } from "react-router-dom";
import "./LoginSuccess.css";

export default function RegistrationSuccess() {
    const navigate = useNavigate();

    const handleGoToLogin = () => {
        navigate("/profile");
    };

    return (
        <div className="success-container">
            <div className="success-card">
                <h1>Registration Successful! 🎉</h1>
                <p>Your account has been created successfully.</p>
                <button onClick={handleGoToLogin}>Go to Profile</button>
            </div>
        </div>
    );
}
