import { Router } from "express";

import { validateToken } from "../controllers/login.controller";
import { createDepartment, deleteDepartmentById, getDepartments, getDepartmentsByID, updateDepartmentById } from "../controllers/department.controller";

const router = Router();

router.get('/departamento/', validateToken, getDepartments);
router.post('/departamento/', validateToken, createDepartment);
router.get('/departamento/:idDepartamento', validateToken, getDepartmentsByID);
router.delete('/departamento/:idDepartamento', validateToken, deleteDepartmentById);
router.put('/departamento/:idDepartamento', validateToken, updateDepartmentById);

export default router