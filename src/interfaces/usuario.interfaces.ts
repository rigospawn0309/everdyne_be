
//REQUESTS

import { IUsuario } from "../models/usuario.model";

export interface usuarioInput {
  nombre:IUsuario['nombre'];
  email:IUsuario['email'];
  img:IUsuario['img'];
  password:IUsuario['password'];
  telefono:IUsuario['telefono'];
  google:IUsuario['google'];
  rol:IUsuario['rol'];
  terminos:IUsuario['terminos'];
  status:IUsuario['status'];
}

// Datos que el usuario ingresa cuando se crear un usuario en register
export interface registerInput {
  email:IUsuario['email'];
  nombre:IUsuario['nombre'];
  password:IUsuario['password'];
  terminos:IUsuario['terminos'];
}

// Datos que el usuario ingresa cuando se loguea
export interface loginInput {
  email:IUsuario['email'];
  password:IUsuario['password'];
}

//RESPONSES

// Token que se devuelve cuando se loguea
export interface loginResponse {
  accessToken:string;
}