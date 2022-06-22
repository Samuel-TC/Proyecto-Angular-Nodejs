import { Router } from "express";

import { validateToken } from "../controllers/login.controller";
import { getSexs, getUserByID, getUsers, deleteUserById, updateUserById, getUserByIDFoto} from '../controllers/user.controller';

const router = Router();

router.get('/user1/:cedula', validateToken, getUsers);
router.get('/user2/:idUsuario', validateToken, getUserByIDFoto);
router.get('/sex/', validateToken, getSexs);
router.get('/user/:cedula', validateToken, getUserByID);
router.put('/user/:cedula', validateToken, updateUserById);
router.delete('/user/:cedula', validateToken, deleteUserById);

export default router