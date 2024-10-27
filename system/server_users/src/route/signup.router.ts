import { Router } from "express";

import { valditionCeo } from "../middlewares/valditionForToken/middlware.valditionCeo";
import { valditionAdminData } from "../middlewares/valditionForDataSignup/middleware.valditionDataAdmin";
import { ControllarAdminSignup } from "../controllar/signup.controllar/signupAdmin.controllar";

//######

import { valditionAdmin } from "../middlewares/valditionForToken/middleware.valditionAdmin";
import { valditionCoorditionData } from "../middlewares/valditionForDataSignup/middleware.valditionDataCoordition";
import { signupCoorditionControllar } from "../controllar/signup.controllar/signupCoordition.contollar";
//####
import { valditionCoordition } from "../middlewares/valditionForToken/middleware.valditionCoodition";
import { valditionStudentData } from "../middlewares/valditionForDataSignup/middleware.valditionDataStudent";
import { signupStudentControllar } from "../controllar/signup.controllar/signupStudent.controllar";
//###
const routerUrl = Router();

routerUrl.post(
  "/admin",
  valditionCeo,
  valditionAdminData,
  ControllarAdminSignup
); 
routerUrl.post(
  "/coordition",
  valditionAdmin,
  valditionCoorditionData,
  signupCoorditionControllar
);
routerUrl.post(
  "/student",
  valditionCoordition,
  valditionStudentData,
  signupStudentControllar
);

export default routerUrl;
