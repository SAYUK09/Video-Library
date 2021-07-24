import { useAuth } from "../../contexts/authContext";
import { Route, Navigate } from "react-router-dom";

export function PrivateRoute({ path, ...props }) {
  const { auth } = useAuth();
  return auth ? (
    <Route {...props} path={path} />
  ) : (
    <Navigate state={{ from: path }} replace to="/login" />
  );
}
