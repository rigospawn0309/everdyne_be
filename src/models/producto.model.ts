
import mongoose, { Schema, Document } from 'mongoose';
import { ICategoria } from './categoria.model';
import { IUsuario } from './usuario.model';

export interface IProducto extends Document {
    marca: string;
    modelo: string;
    operador: string;
    categoria: ICategoria['id'];
    descripcion: string;
    descripcionHTML: string;
    estado: string;
    cantidad: number;
    precioCompra: number;
    fechaCreacion: Date;
    propietario: IUsuario['id'];
    status: boolean;
  }

const ProductoSchema: Schema = new Schema({
  marca: {
    type: String,
    required: [true, "la Marca es obligatoria"],
  },
  modelo: {
    type: String,
    required: [true, "El Modelo es obligatorio"],
  },
  operador: {
    type: String,
    required: [true, "El operador es obligatorio"],
    default: "SIN_OPERADOR",
  },
  categoria: {
    type: Schema.Types.ObjectId,
    required: [true, "la categoria propietorio es obligatorio"],
  },
  descripcion: {
    type: String,
    require: true,
  },
  descripcionHTML: {
    type: String,
  },
  estado: {
    type: String,
    required: [true, "Estado del producto obligatorio"],
    default: "USADO",
    enum: {
      values: ["NUEVO", "USADO", "DESGUACE"],
      message: "{VALUE} no es valido",
    },
  },
  cantidad: {
    type: Number,
    require: true,
  },
  precioCompra: {
    type: Number,
    require: true,
  },
  fechaCreacion: {
    type: Date,
    default: Date.now,
  },
  propietario: {
    type: Schema.Types.ObjectId,
    required: [true, 'El usuario propietorio es obligatorio']
  },
  status: {
    type: Boolean,
    default: true,
    required: [true, "El estado es obligatorio"],
  },
});
// esta función permite filtrar el modelo producto, quito de poder devolverlo entero y se guarda el modelo entero en DB
ProductoSchema.methods.toJSON = function () {
  const { __v, status, fechaCreacion, ...producto } = this.toObject(); //pongo lo que no quiero mostrar
  return producto; //filtrada
};

export default mongoose.model('Producto', ProductoSchema);