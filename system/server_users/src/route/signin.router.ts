import { Router } from "express";

import { LoginCeoControllar } from "../controllar/login.controllar/loginCeo.controllar";
import {LoginAdminControllar} from '../controllar/login.controllar/loginAdmin.contollar'
import { LoginStudentCntrollar } from "../controllar/login.controllar/loginStudent.controllar";
import { LoginCoorditionControllar } from "../controllar/login.controllar/loginCoordition.controllar"; 
const routerUrl=Router();
routerUrl.post('/ceo',LoginCeoControllar);
routerUrl.post('/admin',LoginAdminControllar);
routerUrl.post('/coordition',LoginCoorditionControllar);
routerUrl.post('/student',LoginStudentCntrollar);

export default routerUrl;