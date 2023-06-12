import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";


const ProtectedCheck = ({ children }) => {
  //allUser.data.user.check = true

  // user.check = true

  // cuando sea true lo mandamos a la dashboard y no le dejamos entrar en la pagina

  const { user, allUser } = useAuth();

  if (allUser?.data?.user?.check == true || user?.check == true) {
    console.log(allUser)
    console.log("user",user)
    return children;
  } else {
    return <Navigate to="/checkCode" />;
  }
};

export default ProtectedCheck;
