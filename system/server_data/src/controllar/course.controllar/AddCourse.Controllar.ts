import { Request,Response } from "express";
import { AddCourseModel } from "../../model/course.model/AddCourse.Model";

async function AddCourseControllar(req:Request,res:Response){
    try{
        let {dataCourse}=req.body;console.log(dataCourse)
        await AddCourseModel(dataCourse);
        res.status(200).end();
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

export {AddCourseControllar}