
import { Request,Response } from "express";
import { SetDataOfNewSemster } from "../../model/semster.model/SetDataOfNewSemster.Model";

async function SetDataToNewSemsterControllar(req:Request,res:Response) {

    try{ 
      const {DataDepart,DataTime,DataCourse,idSemster}=req.body;
       
        await SetDataOfNewSemster(idSemster,DataCourse,DataTime,DataDepart);
        res.status(200).end();
    
     
      
    }
    catch (e: any) {
        console.log(e);
        if (e instanceof Error) {
          res.status(400).json(e.message);
        } else {
          res.status(400).json(e);
        }
      }
    
}

export {SetDataToNewSemsterControllar}