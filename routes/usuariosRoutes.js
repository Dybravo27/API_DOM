import express from "express";
import UsuariosController from "../controller/UsuariosController.js";

const router = express.Router();

router.get('/', UsuariosController.getAllUsuarios);

router.post('/', UsuariosController.createUsuarios);

router.put('/:id_usuario', UsuariosController.updateUsuarios);

router.patch('/:id_usuario', UsuariosController.updateParcialUsuarios);

router.delete('/:id_usuario', UsuariosController.deleteUsuarios);

export default router;