import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { authContext } from "../context/AuthContext";

// =============protected route =============only can doctor access========
const ProtectedRoute = ({ children, allowedRoles }) => {
  
  const { token, role } = useContext(authContext);

  const isallowed = allowedRoles.includes(role);
  const accessibleRoute =
    token && isallowed ? children : <Navigate to="/login" replace={true} />;

  return accessibleRoute;
};

export default ProtectedRoute;
