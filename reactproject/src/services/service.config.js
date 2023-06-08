import axios from "axios";

//CREAMOS LA CONFIGURACION DEL SERVICIO DE LA API.
//1º) Recogemos el usuario del localStorage para darle la authenticacion mediante el Bearer Token.
//2º) Creamos las cabeceras del servicio, para explicarle a axios la información que va a requerir nuestro servicio
//3º) Creamos el servicio mediante axios.create() con la info de las cabeceras y la URL

//Recogemos el usuario del localStorage y lo convertimos en JSON
const userLocal = localStorage.getItem("user");
const parseUser = JSON.parse(userLocal);

//Creamos una funcion updateToken() que nos devuelva el valor del token si existe el usuario, para que no falle el localStorage y la asincronia
import { updateToken } from "../utils/updateToken";
//Creamos las cabeceras del servicio, con la información que contendrán
const ApiHeaders = {
  Accept: "application/json",
  "Content-Type": "application/json",
  "Acces-Control-Allow-Origin": "*",
  Authorization: `Bearer ${parseUser}}`, //---> Obtenemos el token del usuario convertido a objeto para darle la authenticacion
};

//Creamos el servicio axios.create con los datos que necesita: la URL, las cabeceras y el tiempo de respuesta
export const API = axios.create({
  baseURL: `http://localhost:8080/api/v1`,
  headers: ApiHeaders,
  timeout: 60000,
});
