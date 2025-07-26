import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginSuccess.css";

export default function LoginSuccess() {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token"); // ✅ match this to login.js
        if (!token) {
            navigate("/login"); // redirect if no valid login
        }
    }, [navigate]);

    const handleGoToProfile = () => {
        navigate("/profile");
    };

    return (
        <div className="success-container">
            <div className="success-card">
                <h1>Login Successful! 🚀</h1>
                <p>Welcome back! You are now logged in.</p>
                <button onClick={handleGoToProfile}>Go to Profile</button>
            </div>
        </div>
    );
}
