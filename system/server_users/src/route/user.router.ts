import { Router } from "express";

import { ChangePreInfoControllar } from "../controllar/user.controllar/ChangePreInfo.Controllar";

const routerUrl=Router();

routerUrl.post('/changepreinfo',ChangePreInfoControllar);

export default routerUrl;