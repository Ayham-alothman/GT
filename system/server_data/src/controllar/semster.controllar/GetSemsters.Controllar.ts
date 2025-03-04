
import { Request,Response } from "express";

import { GetSemstersModel } from "../../model/semster.model/getsemster.model";

async function GetSemstersControllar(req:Request,res:Response) {

    try{
      const {idUni}=req.body;
      const DataSemsters=await GetSemstersModel(idUni);
      res.status(200).json(DataSemsters);
     
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

export {GetSemstersControllar}