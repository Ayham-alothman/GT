import { Request,Response } from "express";
import { ChangePreInfoModel } from "../../model/user.model/ChangePreInfo.Model";

async function ChangePreInfoControllar(req:Request,res:Response) {
    try{
        const {idAdmin}=req.body;
        await ChangePreInfoModel(idAdmin);
        res.status(200).end();

    }
    catch(e:any){
      if(e instanceof Error){
        res.status(400).json(e.message);
      }
      else{
        res.status(400).json(e);
      }
    }
    
}

export {ChangePreInfoControllar}