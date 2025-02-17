import { Request,Response } from "express";

import { GetCourseforUniAndDepart } from "../../model/course.model/GetCourseForDepart.Model";

async function GetCourseforUniAndDepartControllar(req:Request,res:Response) {
    try{
        const {Depart,idUni}=req.body;
          let AllCourse: any[] = [];

          for (let D of Depart) {
              const DataCourse = await GetCourseforUniAndDepart(idUni, D._id);
              AllCourse = [...AllCourse, ...DataCourse];
          }
          res.status(200).json(AllCourse);
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

export {GetCourseforUniAndDepartControllar}