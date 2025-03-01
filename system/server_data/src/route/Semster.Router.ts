
import { Router } from "express";

import {GenerateNewSemsterControllar} from '../controllar/semster.controllar/GenerateNewSemster.controllar'
import {SetDataToNewSemsterControllar} from '../controllar/semster.controllar/SetDataSemster.Controllar'
import { SetTableControllar } from "../controllar/semster.controllar/settable.controllar";
import { GetSemstersControllar } from "../controllar/semster.controllar/GetSemsters.Controllar";
const routeUrl=Router();

routeUrl.post(`/newsemster`,GenerateNewSemsterControllar);

routeUrl.post(`/setdatanewsemster`,SetDataToNewSemsterControllar);

routeUrl.post(`/settable`,SetTableControllar);

routeUrl.post(`/getsemsters`,GetSemstersControllar);


export default routeUrl;