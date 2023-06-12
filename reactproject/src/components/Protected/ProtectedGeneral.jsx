import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";


export const ProtectedGeneral = ({ children }) => {
  // tendremos que traernos el user del contexto

  const { user } = useAuth();

  if (user == null) {
    return <Navigate to="/login" />;
  }

  return children;
};
