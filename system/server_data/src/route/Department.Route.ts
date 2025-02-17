
import { Router } from "express";

import { AddGroupDepartControlar } from "../controllar/department.controllar/AddGroupDepqt.Controllar";
import { GetAllDepartControlar } from "../controllar/department.controllar/GetAllDeparts.Controllar";

const routeUrl=Router();

routeUrl.post(`/addgroup`,AddGroupDepartControlar);

routeUrl.post(`/getdeparts`,GetAllDepartControlar);

export default routeUrl;