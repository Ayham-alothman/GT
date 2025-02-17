
import { Router } from "express";

import { GetAllTeachersControlar } from "../controllar/teachers.controllar/GetAllTeachers.Controllar";

import { AddNewTeacherControlar } from "../controllar/teachers.controllar/AddTeacher.Controllar";

const routeUrl=Router();

routeUrl.post(`/getallteacher`,GetAllTeachersControlar);

routeUrl.post(`/addteacher`,AddNewTeacherControlar);

export default routeUrl;