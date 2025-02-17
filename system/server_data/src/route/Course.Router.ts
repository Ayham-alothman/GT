import { Router } from "express";

import { AddCourseControllar } from "../controllar/course.controllar/AddCourse.Controllar";

import { GetCourseforUniAndDepartControllar } from "../controllar/course.controllar/GetCourseForUniAndDepart";
import { GetCourseforUniControllar } from "../controllar/course.controllar/GetCourseForUni.Controllar";

const routeUrl=Router();

routeUrl.post('/addcourse',AddCourseControllar);
routeUrl.post('/getcourseforuni',GetCourseforUniControllar);
routeUrl.post('/getcoursefordepart',GetCourseforUniAndDepartControllar);


export default routeUrl;