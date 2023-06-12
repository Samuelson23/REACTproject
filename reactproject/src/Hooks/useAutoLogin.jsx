import { Navigate } from "react-router-dom";
import { autoLogin } from "../services/user.service";


const useAutoLogin = async (allUser, userlogin) => {
  //! Error 1: en este caso el allUser y el uselogin lo traemos como parametro y no directamente del context
  try {
    const { password, email } = allUser?.user;
    const custoFormData = {
      email,
      password,
    };
    const setData = await autoLogin(custoFormData);
    if (setData.status == 200) {
      const dataCustom = {
        token: setData.data.token,
        user: setData.data.user.name,
        email: setData.data.user.email,
        image: setData.data.user.image,
        check: setData.data.user.check,
        events: setData.data.user.events,
        reviews: setData.data.user.events,
        id: setData.data.user.id,
      };

      const dataSting = JSON.stringify(dataCustom);
      userlogin(dataSting);
      return <Navigate to="/dashboard" />;
    } else {
      return <Navigate to="/login" />;
    }
  } catch (error) {
    console.log(error);
  }
};

export default useAutoLogin;