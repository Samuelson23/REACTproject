import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";


export const Protected = ({ children }) => {
  // tendremos que traernos el user del contexto

  const { user} = useAuth();

  if (user == null || user?.check == false) {
    localStorage.removeItem("user")
    return <Navigate to="/login" />
  }

  return children;
};
