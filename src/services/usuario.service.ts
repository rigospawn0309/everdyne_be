import { registerInput, usuarioInput } from "../interfaces/usuario.interfaces";
import usuarioModel, { IUsuario } from "../models/usuario.model";

class UsuarioService {
  static async postUsuarioService(usuario: IUsuario): Promise<registerInput> {
    return await usuarioModel.create(usuario);
  }

  static async getUsuariosService() {
    return await usuarioModel.find(
      {},
      {
        password: 0,
        __v: 0,
        fechaActualizacion: 0,
        fechaCreacion: 0,
        terminos: 0,
        status: 0,
      }
    );
  }

  static async getUsuarioService(id: string) {
    return await usuarioModel.findById(id, {
      __v: 0,
      fechaActualizacion: 0,
      fechaCreacion: 0,
      terminos: 0,
      status: 0,
    });
  }

  static async getUsuarioByEmailService(email: string){
    return await usuarioModel.findOne({ email });
  }

  static async putUsuarioService(id: string,usuario: IUsuario): Promise<usuarioInput> {
    return await usuarioModel.findByIdAndUpdate(id, usuario, { new: true });
  }

  static async deleteUsuarioService(id: string): Promise<usuarioInput> {
    return await usuarioModel.findByIdAndUpdate(
      id,
      { status: false },
      { new: true }
    );
  }
}

export default UsuarioService;
