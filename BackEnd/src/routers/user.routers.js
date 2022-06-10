import { Router } from "express";

import { validateToken } from "../controllers/login.controller";
import { getSexs, getUserByID, getUsers, deleteUserById, updateUserById} from '../controllers/user.controller';

const router = Router();

router.get('/user/', validateToken, getUsers);
router.get('/sex/', validateToken, getSexs);
router.get('/user/:cedula', validateToken, getUserByID);
router.put('/user/:cedula', validateToken, updateUserById);
router.delete('/user/:cedula', validateToken, deleteUserById);

export default router