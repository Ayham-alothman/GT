
import { Router } from "express";

import { AddClassGroupContollar } from "../controllar/class.controllar/AddGroupClass.Controllar";
import { GetAllClassContollar } from "../controllar/class.controllar/GetAllClass.Controllar";
const routeUrl=Router();

routeUrl.post(`/addgroup`,AddClassGroupContollar);
routeUrl.post('/getallclass',GetAllClassContollar);

export default routeUrl;