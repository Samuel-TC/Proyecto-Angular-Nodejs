import { Router } from "express";

import { validateToken } from "../controllers/login.controller";
import { getCountrys, getProvinces, getDistricts} from '../controllers/location.controller';

const router = Router();

router.get('/countrys/', validateToken, getCountrys);
router.get('/provinces/', validateToken, getProvinces);
router.get('/districts/', validateToken, getDistricts);

export default router