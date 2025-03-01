
import { Request,Response } from "express";
import { GenerateNewSemster } from "../../model/semster.model/GenerateNewSemster.Model";

async function GenerateNewSemsterControllar(req:Request,res:Response) {

    try{
      const {idUni}=req.body;
      const IdNewSemster=await GenerateNewSemster(idUni);
      res.status(200).json(IdNewSemster);
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

export {GenerateNewSemsterControllar}