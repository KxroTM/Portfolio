import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext"; 

const Login = () => {
    const { login } = useContext(AuthContext);

    const handleLogin = async (e) => {
        e.preventDefault();

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        try {
            const response = await fetch(`http://localhost:8080/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });

            if (response.ok) {
                login();
                window.location.href = "/admin";
            } else {
                console.error("Login failed");
            }
        } catch (error) {
            console.error("An error occurred during login:", error);
        }
    };

    return (
        <div>
            <form onSubmit={handleLogin}>
                <input type="email" id="email" placeholder="Email" />
                <input type="password" id="password" placeholder="Password" />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
