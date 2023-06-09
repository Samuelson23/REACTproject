import swal from "sweetalert";

const useLoginError = (res, setLoginOk, userLogin) => {
    //STATUS 200 -> el usuario se ha logeado correctamente. Existe en la base de datos y los datos introducidos son correctos
    //STATUS 404 -> la contraseña introducida NO es correcta
    //STATUS 404 -> el usuario no existe
    //STATUS 505 -> internal error
}