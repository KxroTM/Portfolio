// src/App.js
import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import ReactGA from "react-ga4";

import Homepage from "./pages/homepage";
import About from "./pages/about";
import Projects from "./pages/projects";
import Contact from "./pages/contact";
import Notfound from "./pages/404";
import Admin from "./pages/admin";
import Login from "./pages/login";
import Register from "./pages/register";
import Logout from "./pages/logout";
import Edit from "./pages/edit";
import { GetAllsProjects } from "./data/user";

import ProtectedRoute from "./components/security/secure";
import { TRACKING_ID } from "./data/tracking";
import { AuthProvider } from "./context/AuthContext";
import "./app.css";

function App() {
    useEffect(() => {
        if (TRACKING_ID !== "") {
            ReactGA.initialize(TRACKING_ID);
        }
    }, []);

    return (
        <AuthProvider>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Register />} />
                    <Route path="/logout" element={<Logout />} />
                    <Route path="/admin" element={<ProtectedRoute><Admin /></ProtectedRoute>} />
                    <Route path="/edit" element={<ProtectedRoute><Edit /></ProtectedRoute>} />
                    <Route path="*" element={<Notfound />} />
                </Routes>
            </div>
        </AuthProvider>
    );
}

GetAllsProjects();
export default App;
