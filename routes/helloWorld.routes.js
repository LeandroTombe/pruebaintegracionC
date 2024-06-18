import express from "express";
// Importo los controladores de autenticación
import { sayHello } from "../controllers/helloWorld.controller.js"
// Creo una instancia de router de express
const router = express.Router();

// Defino mis endpoints. 
router.get("/helloWorld", sayHello)

export default router;
