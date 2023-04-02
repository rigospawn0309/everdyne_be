import { IUsuario } from "../models/usuario.model";

// Datos que el usuario ingresa (nombre e email)
export interface inputUsuario {
  email:IUsuario['email'];
  nombre:IUsuario['nombre'];
  password:IUsuario['password'];
  terminos:IUsuario['terminos'];
}




// // Datos que el usuario ingresa (nombre e email)
// const usuarioFiltrado = {
//     email: z.string(
//         {
//             required_error: 'Email es requerido',
//             invalid_type_error: 'Email tiene que ser del tipo String'
//         }
//     ).email(),
//     nombre: z.string()
// };

// //Usuario entero
// const postUsuarioSchema = z.object({
//     ...usuarioFiltrado,
//     terminos: z.boolean(),
//     password: z.string(
//         {
//             required_error: 'Email es requerido',
//             invalid_type_error: 'Email tiene que ser del tipo String'
//         }
//     )
// });

// //Login Usuario
// const loginSchema = z.object({
//     email: z.string(
//         {
//             required_error: 'Email es requerido',
//             invalid_type_error: 'Email tiene que ser del tipo String'
//         }
//     ).email(),
//     password: z.string()
// });

// //Token
// const loginResponseSchema = z.object({
//     accessToken: z.string()
// });

// //Respuesta de post de usuario
// const postUsuarioResponseSchema = z.object({
//     id: z.number(),
//  ...usuarioFiltrado
// });

// export type PostUsuarioInput = z.infer<typeof postUsuarioSchema>;

// export type loginInput = z.infer<typeof loginSchema>;

// export const {schemas: usuarioSchemas, $ref} = buildJsonSchemas({
//     postUsuarioSchema,
//     postUsuarioResponseSchema,
//     loginSchema,
//     loginResponseSchema
// },
// {
//     $id: "usuarioSchemas",
// })