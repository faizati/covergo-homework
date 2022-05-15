import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ condition, redirectPath = "/", children }) => {
  if (!condition) {
    return <Navigate to={redirectPath} replace />;
  }

  return children ? children : <Outlet />;
};

export default ProtectedRoute;
