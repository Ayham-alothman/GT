import { Request,Response } from "express";
import { GetAllClassModel } from "../../model/class.model/GetAllClass.Model";
async function GetAllClassContollar(req:Request,res:Response){
    try{
        const {idUni}=req.body;
        const Class=await GetAllClassModel(idUni);
        res.status(200).json(Class)
       
    }
    catch(e:any){ 
        if(e instanceof Error){
            res.status(400).json(e.message);
        }
        else{
            res.status(400).json(e)
        }
        }
}
export {GetAllClassContollar}