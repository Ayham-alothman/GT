
import { Request,Response } from "express";
import { SaveTableModel } from "../../model/semster.model/SetTable.Model";

async function SetTableControllar(req:Request,res:Response) {

    try{ 
      const {idSemster}=req.body;
      if(req.file?.buffer){ 
       
        const BufferSemster=req.file?.buffer;
        await SaveTableModel(BufferSemster,idSemster)
        res.status(200).end();
      }
      else{throw `do't found data file in data`}
      
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

export {SetTableControllar}