import { useContext } from "react";
import { AuthContext } from "../AuthContext";
import { Navigate } from "react-router-dom";

const PrivateRoute: React.FC<any> = ({ children }) => {
  const { loading, user } = useContext(AuthContext);

  if (loading) {
    return <span>...</span>;
  }

  if (user) {
    return children;
  }

  return <Navigate to="/login" />;
};

export default PrivateRoute;