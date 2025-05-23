import express from "express";
import CiudadesController from "../controller/CiudadesController.js";

const router = express.Router();

router.get('/', CiudadesController.getAllCiudades);

router.post('/', CiudadesController.createCiudades);

router.put('/:id_ciudad', CiudadesController.updateCiudades);

router.patch('/:id_ciudad', CiudadesController.updateParcialCiudades);

router.delete('/:id_ciudad', CiudadesController.deleteCiudades);


export default router;