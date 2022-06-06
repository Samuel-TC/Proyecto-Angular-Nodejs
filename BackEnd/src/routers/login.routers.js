import { Router } from "express";

import { login,validateToken } from "../controllers/login.controller";

const router = Router();

router.post('/login',login);

export default router