import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import UsuarioService  from '../services/usuario.service';

export const postUsuarioController = async (req: Request, res: Response) => {
  console.log('postUsuarioController -> req.body: ', req.body)
  try {
     // Obtén los datos del usuario desde el cuerpo de la solicitud
     const { password, email, ...rest } = req.body;

     const existeEmail = await UsuarioService.getUsuarioByEmailService(email);

     if ( existeEmail ) {
         return res.status(400).json({
             ok: false,
             msg: 'El correo ya está registrado'
         });
     }

     // Genera un hash de la contraseña usando bcrypt
     const saltRounds = 10;
     const hashedPassword = await bcrypt.hash(password, saltRounds);

     // Crea un objeto de usuario con la información proporcionada
     const usuarioHashed = {
      ...rest,
      email,
       password: hashedPassword,
     };
     
    const usuario = await UsuarioService.postUsuarioService(usuarioHashed);
    res.status(201).json({ usuario });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getUsuariosController = async (req: Request, res: Response) => {
  try {
    const usuarios = await UsuarioService.getUsuariosService();
    res.status(200).json({ usuarios });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getUsuarioController = async (req: Request, res: Response) => {
  console.log('getUsuarioController -> req.params: ', req.params)
  try {
    const { id } = req.params;
    const usuario = await UsuarioService.getUsuarioService(id);
    res.status(200).json({ usuario });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export const putUsuarioController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const usuario = await UsuarioService.putUsuarioService(id, req.body);
    res.status(200).json({ usuario });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export const deleteUsuarioController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const usuario = await UsuarioService.deleteUsuarioService(id);
    res.status(200).json({ usuario });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}