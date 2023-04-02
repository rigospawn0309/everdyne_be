import mongoose, { Schema, Document } from "mongoose";

export interface IUsuario extends Document {
  nombre: string;
  primerApellido: string;
  segundoApellido: string;
  email: string;
  img: string;
  password: string;
  telefono: string;
  google: boolean;
  rol: string;
  terminos: boolean;
  status: boolean;
}

const UsuarioSchema: Schema = new Schema({
  nombre: {
    type: String,
    required: [true, "el nombre es obligatoria"],
  },
  primerApellido: {
    type: String,
    required: [true, "el primer apellido es obligatorio"],
  },
  segundoApellido: {
    type: String,
    required: [true, "el segundo apellido es obligatorio"],
  },
  email: {
    type: String,
    required: [true, "el email es obligatorio"],
  },
  img: {
    type: String,
  },
  password: {
    type: String,
    required: [true, "el password es obligatorio"],
  },
  telefono: {
    type: String,
    required: [true, "el telefono es obligatorio"],
  },
  google: {
    type: Boolean,
    default: false,
  },
  rol: {
    type: String,
    required: [true, "el rol es obligatorio"],
    default: "USER_ROLE",
    enum: {
      values: ["ADMIN_ROLE", "USER_ROLE"],
      message: "{VALUE} no es valido",
    },
  },
  terminos: {
    type: Boolean,
    default: false,
  },
  status: {
    type: Boolean,
    default: true,
    required: [true, "El estado es obligatorio"],
  },
});
// esta función permite filtrar el modelo usuario, quito de poder devolverlo entero y se guarda el modelo entero en DB
UsuarioSchema.methods.toJSON = function () {
  const { __v, status, ...usuario } = this.toObject(); //pongo lo que no quiero mostrar
  return usuario; //filtrada
};

export default mongoose.model("Usuario", UsuarioSchema);
