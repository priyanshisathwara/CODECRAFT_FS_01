import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import './Login.css';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});

    const navigate = useNavigate();

    function Validation(values) {
    let error = {};

    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{6,}$/;

    if (!values.email || values.email.trim() === "") {
        error.email = "Email should not be empty";
    } else if (!email_pattern.test(values.email)) {
        error.email = "Invalid email format";
    }

    if (!values.password || values.password.trim() === "") {
        error.password = "Password should not be empty";
    } else if (!password_pattern.test(values.password)) {
        error.password = "Password must contain at least 6 characters, including uppercase, lowercase, and number";
    }

    return error;
}

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newValues = { email, password };

        const validationErrors = Validation(newValues);
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length > 0) return;

        try {
            const response = await axios.post("http://localhost:8000/api/auth/login", newValues);
            console.log("Response Data:", response.data);

            if (response.data.Login) {
                const token = response.data.token;
                const user = response.data.user; // Assuming user info is returned in the response
                
                if (token && user) {
                    localStorage.setItem('token', token);
                    localStorage.setItem('user', JSON.stringify(user));  // Store user data
                    console.log('Token and user stored:', token, user);
                } else {
                    console.log('Token or user data is missing in the response');
                }
                
                toast.success("Login Successful");
                setTimeout(() => navigate("/login-success"), 3000);  // Redirect to profile
            } else {
                toast.error("No record found");
            }
        } catch (err) {
            console.error(err);
            toast.error("Error occurred. Try again.");
        }
    };

    return (
        <div className="login-page">
            <div className="login-container">
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email"><strong>Email</strong></label>
                        <input
                            type="text"
                            placeholder="Enter email"
                            autoComplete="off"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {errors.email && <span className="error">{errors.email}</span>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="password"><strong>Password</strong></label>
                        <input
                            type="password"
                            placeholder="Enter password"
                            autoComplete="off"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {errors.password && <span className="error">{errors.password}</span>}
                    </div>

                    <Link to="/forgot" className="forgot-password">Forgot Password?</Link>

                    <button type="submit" className="login-btn">Login</button>
                </form>

                <p>Don't Have an Account?</p>
                <Link to="/register" className="register-btn-in-login">Register</Link>
            </div>
            <ToastContainer />
        </div>
    );
}

export default Login;
