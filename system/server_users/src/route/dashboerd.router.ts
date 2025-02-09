import { Router } from "express";

import {valditionCeo} from '../middlewares/valditionForToken/middlware.valditionCeo'

import {AddUniversityContollar} from '../controllar/dashboerd.controllar/add.university.controllar'
import {AddAdminContollar} from '../controllar/dashboerd.controllar/add.admin.controllar'
import {GetAdminsContollar} from '../controllar/dashboerd.controllar/get.admins.controllar'
import { GetUniversityContollar } from "../controllar/dashboerd.controllar/get.university.controllar";
const routerUrl=Router();

routerUrl.post('/adduniversity',valditionCeo,AddUniversityContollar);
routerUrl.post('/addadmin',valditionCeo,AddAdminContollar);
routerUrl.get('/getadmins',valditionCeo,GetAdminsContollar);
routerUrl.get('/getUniversitys',valditionCeo,GetUniversityContollar);


export default routerUrl;