import { Router } from "express";

import { validateToken } from "../controllers/login.controller";
import { createRequest,deleteRequestById,getRequest,getRequestByID,updateRequestById,getClasificadores } from "../controllers/request.controller";

const router = Router();

router.get('/request/', validateToken, getRequest);
router.post('/request/', validateToken, createRequest);
router.get('/request/:idSolicitud', validateToken, getRequestByID);
router.delete('/request/:idSolicitud', validateToken, deleteRequestById);
router.put('/request/:idSolicitud', validateToken, updateRequestById);
router.get('/clasificadores/', validateToken, getClasificadores);

export default router