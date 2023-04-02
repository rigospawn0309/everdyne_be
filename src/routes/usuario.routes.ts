import express from "express";
import { deleteUsuarioController, getUsuarioController, getUsuariosController, postUsuarioController, putUsuarioController } from "../controllers/usuario.controller";

export const usuarioRouter = express.Router();

usuarioRouter.get("/", getUsuariosController);
usuarioRouter.post("/", postUsuarioController);

usuarioRouter.get("/:id", getUsuarioController);
usuarioRouter.put("/:id", putUsuarioController);
usuarioRouter.delete("/:id", deleteUsuarioController);