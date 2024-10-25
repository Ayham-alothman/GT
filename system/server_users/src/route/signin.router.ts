import { Router } from "express";

import { LoginCeoControllar } from "../controllar/login.controllar/loginCeo.controllar";

const routerUrl=Router();

routerUrl.post('/ceo',LoginCeoControllar);
routerUrl.post('/admin');
routerUrl.post('/coordition');
routerUrl.post('/student');

export default routerUrl;