import { Router } from "express";

import { validateToken } from "../controllers/login.controller";
import { createRequest,deleteRequestById,getRequest,getRequestByID,updateRequestById,getClasificadores,createFile,deleteFileById,getFileByIDSolicitud,getRequestByIDUser, getRequestByIDUserbuscar, responseResquest } from "../controllers/request.controller";

const router = Router();

router.get('/request/', validateToken, getRequest);
router.post('/request/', validateToken, createRequest);
router.get('/request/:idSolicitud', validateToken, getRequestByID);
router.delete('/request/:idSolicitud', validateToken, deleteRequestById);
router.put('/request/:idSolicitud', validateToken, updateRequestById);
router.get('/request/user/:idUsuario', validateToken, getRequestByIDUser);
router.get('/request/user/buscar/:idUsuario', validateToken, getRequestByIDUserbuscar);

router.get('/clasificadores/', validateToken, getClasificadores);

//File
router.post('/file/', validateToken, createFile);
router.get('/file/:idSolicitud', validateToken, getFileByIDSolicitud);
router.delete('/file/:idArchivo', validateToken, deleteFileById);

//Response
router.put('/response/:idSolicitud', validateToken, responseResquest);

export default router