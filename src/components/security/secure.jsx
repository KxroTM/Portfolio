import { Navigate } from "react-router-dom";

function isAuthenticated() {
    const userIsAdmin = localStorage.getItem("isAdmin") === "true"; 
    return userIsAdmin;
}

function ProtectedRoute({ children }) {
    if (!isAuthenticated()) {
        return <Navigate to="/" replace />;
    }

    return children;
}

export default ProtectedRoute;
