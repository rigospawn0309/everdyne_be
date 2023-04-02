import mongoose, { Schema, Document } from "mongoose";
import { IUsuario } from "./usuario.model";


export interface ICategoria extends Document {
  nombre: string;
  propietario: IUsuario['id'];
  status: boolean;
}

const CategoriaSchema: Schema = new Schema({
  nombre: {
    type: String,
    required: [true, "el nombre es obligatoria"],
  },
  propietario: {
    type: Schema.Types.ObjectId,
    required: [true, "El usuario propietaorio es obligatorio"],
  },
  status: {
    type: Boolean,
    default: true,
    required: [true, "El estado es obligatorio"],
  },
});
// esta función permite filtrar el modelo categoria, quito de poder devolverlo entero y se guarda el modelo entero en DB
CategoriaSchema.methods.toJSON = function () {
  const { __v, status, ...categoria } = this.toObject(); //pongo lo que no quiero mostrar
  return categoria; //filtrada
};

export default mongoose.model("Categoria", CategoriaSchema);
