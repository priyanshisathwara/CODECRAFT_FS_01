import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginSuccess.css";

export default function RegistrationSuccess() {
    const navigate = useNavigate();

    useEffect(() => {
        const isRegistered = localStorage.getItem("isRegistered");

        if (!isRegistered) {
            navigate("/register");
        }
        // ⛔ Do NOT remove it immediately here
    }, [navigate]);

    const handleGoToProfile = () => {
        // ✅ Now remove the flag only after button click
        localStorage.removeItem("isRegistered");
        navigate("/profile");
    };

    return (
        <div className="success-container">
            <div className="success-card">
                <h1>Registration Successful! 🎉</h1>
                <p>Your account has been created successfully.</p>
                <button onClick={handleGoToProfile}>Go to Profile</button>
            </div>
        </div>
    );
}
