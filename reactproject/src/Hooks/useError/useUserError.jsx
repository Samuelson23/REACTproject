import Swal from "sweetalert"

const useUserError = (res, setRegisterOk) => {
    //STATUS 200 ----> REGISTRADO CORRECTAMENTE
    //STATUS 404 ----> ALGO HA SALIDO MAL, VUELVE A INTENTARLO
    //STATUS 409 ----> EL USUARIO YA EXISTE
    //STATUS 500 ----> PROBLEMA CONEXION SERVIDOR

}
export default useUserError