

import { Request,Response } from "express";

import { GetCourseforUni } from "../../model/course.model/GetCourseForUni.Model";
async function GetCourseforUniControllar(req:Request,res:Response) {
    try{
        const {idUni}=req.body;
        const DataCourse=await GetCourseforUni(idUni);
        res.status(200).json(DataCourse);
    }
    catch(e:any){ console.log(e)
        if(e instanceof Error){
            res.status(400).json(e.message);
        }
        else{
            res.status(400).json(e)
        }
        }
    
}

export {GetCourseforUniControllar}