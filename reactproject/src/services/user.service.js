import { API } from "./service.config";

//Nos traemos el servicio (API) para crear cada uno de los servicios que tiene que hacer nuestra pagina
//(crear usuario, cambiar password, checkear codigo, login...etc)

// REGISTER ---------------------

export const registerUser = async (dataForm) => {
  return API.post("/user/register", dataForm, {
    headers: { "Content-Type": "multipart/form-data" },
  })
    .then((res) => res)
    .catch((error) => {
      return error;
    });
};

// LOGIN -----------------------
export const loginUser = async (dataForm) => {
  return API.post("/user/login", dataForm)
    .then((res) => res)
    .catch((error) => {
      return error;
    });
};
// CHECK CODE ------------------
export const checkCode = async (dataForm) => {
  return API.post("/user/checkUser", dataForm)
    .then((res) => res)
    .catch((error) => {
      return error;
    });
};
// SEND CODE -------------------
export const resendCode = async (dataForm) => {
  return API.post("/user/resendCode", dataForm)
    .then((res) => res)
    .catch((error) => {
      return error;
    });
};
// FORGOT PASSWORD -------------
export const forgotPassword = async (dataForm) => {
  return API.get("/user/forgotPassword", dataForm)
    .then((res) => res)
    .catch((error) => {
      return error;
    });
};
// CHANGE PASSWORD -------------
export const changePassword = async (dataForm) => {
  return API.post("/user/changePassword", dataForm)
    .then((res) => res)
    .catch((error) => {
      return error;
    });
};
// DELETE USER -----------------
export const deleteUser = async (dataForm) => {
  return API.delete("user/delete", dataForm)
    .then((res) => res)
    .catch((error) => {
      return error;
    });
};
// UPDATE USER -----------------
export const updateUser = async (dataForm) => {
  return API.patch("/user/updateUser/:id", dataForm)
    .then((res) => res)
    .catch((error) => {
      return error;
    });
};
// ADD TO EVENT ---------------
export const addToEvent = async (dataForm) => {
  return API.post("/user/addtoEvent", dataForm)
    .then((res) => res)
    .catch((error) => {
      return error;
    });
};

// CREATE EVENT ----------------
// CREATE REVIEW ---------------
// CHANGE EMAIL ----------------
