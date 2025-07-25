🔐 User Authentication System

📌 Overview

This project implements a secure user authentication system with login, registration, and protected route access. It ensures that only authenticated users can access specific areas or resources of the application.

🚀 Features
 
    ➣ User registration with hashed passwords (e.g., using bcrypt)
    
    ➣ Secure login with JWT or session-based authentication
    
    ➣ Access control: Protected routes accessible only after authentication
    
    ➣ Input validation and error handling
    
    ➣ Logout functionality
    
    ➣ Token/session expiration for enhanced security
    

🛠️ Tech Stack

    ➣ Frontend: (React / HTML-CSS-JS)
    
    ➣ Backend: Node.js + Express
    
    ➣ Database: MySQL
    
    ➣ Authentication: JWT (JSON Web Tokens) / Express-Session
    
    ➣ Password Security: bcrypt
    
🔐 Security Measures

    ➣ Passwords are hashed using bcrypt before storing.
    
    ➣ Authentication tokens are signed with a secret key.
    
    ➣ Tokens have expiration times to prevent abuse.
    
    ➣ Protected routes are middleware-guarded.
    
    ➣ Input fields are validated to prevent injection attacks.

📸 Screenshots

Below are some key screenshots demonstrating the core functionality of the authentication system:
<br />


🏡 Home Page 

<img width="700" height="700" alt="image" src="https://github.com/user-attachments/assets/eeadb969-9d74-4948-838b-ea3beb8bdaa6" />




📝 Registration Page

Users can sign up by providing their credentials. All inputs are validated before submission.

<img width="300" height="300" alt="image" src="https://github.com/user-attachments/assets/9948e41b-959c-4f8c-8a4d-8e84083ca2d6" />




🔐 Login Page

Registered users can log in securely using their email and password.

<img width="300" height="300" alt="image" src="https://github.com/user-attachments/assets/3b8ca7b0-cb98-4cef-b26f-a01e2ea28ccc" />

If a user forgets their password, they can click on the "Forgot Password" link on the login page. They will be prompted to enter their registered email address, after which a One-Time Password (OTP) will be sent to their email. Upon verifying the OTP, the user can securely reset and set a new password.


<img width="439" height="282" alt="Screenshot 2025-07-25 at 8 54 25 PM" src="https://github.com/user-attachments/assets/18a58c01-13e8-41d7-ba51-5a518aa31a18" />





🛡️ Protected Dashboard

This route is protected and only accessible after successful authentication. Unauthorized users are redirected to the login page.

<img width="300" height="300" alt="image" src="https://github.com/user-attachments/assets/df53af49-9441-4cfc-8255-a96ca9d55517" />






🚪 Logout Feature

Authenticated users can log out from the dashboard, which ends their session or token.

<img width="300" height="300" alt="image" src="https://github.com/user-attachments/assets/1bea4fe7-5a76-4295-aa8f-3173ab04723f" />






