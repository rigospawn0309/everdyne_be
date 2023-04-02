import express from "express";
import connectDB from "../conf/config";
import cors from "cors";
import { usuarioRouter } from "../routes/index";

class Server {
  public app: express.Application;
  public port: number;

  constructor() {
    this.app = express();
    this.port = Number(process.env.PORT) || 3000;
    //conectar a base de datos
    this.conectarDB();
    // Middlewares
    this.middlewares();
    // Rutas de mi aplicacion
    this.routes();

  }

  async conectarDB() {
    await connectDB();
  }

  middlewares() {
    //CORS
    this.app.use(cors());
    //Lectura y parseo del body
    this.app.use(express.json());
    //Directorio publico
    this.app.use(express.static("public"));
  }
  routes(){
    this.app.use('/api/usuarios',usuarioRouter);
    
  }

  listen() {
    this.app.listen(this.port, () => {
      return console.log(`Express conectado al http://localhost:${this.port}`);
    });
  }
}

export default Server;
